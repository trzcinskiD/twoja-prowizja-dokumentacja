---
Estimation: 6
---

## Cel

Utworzenie cesji na podstawie odczytanych danych

## Warunki początkowe

- Poprawnie odczytane dane z OCR lub zweryfikowane ręcznie
- Lead istnieje w systemie i ma przypisanego aktywnego doradcę klienta
- Wszystkie kredyty mają przypisane instytucje bankowe z bazy danych
- System ma skonfigurowane wysyłanie emaili

## Przebieg główny

### Dane wejściowe

- Dane leada (ID, imię, nazwisko, adres, PESEL)
- Lista kredytów zawierająca:
  - ID wybranej instytucji bankowej z bazy danych
  - Status kredytu (otwarty/zamknięty)
  - Data rozpoczęcia kredytu
  - Data zakończenia kredytu (dla zamkniętych)
  - Numer kredytu
  - Scoring jakości odczytu

### Kroki

1. Zaktualizuj dane leada jeśli są niekompletne:
   - Jeśli brak PESEL → uzupełnij z danych OCR
   - Jeśli brak adresu → uzupełnij z danych OCR
   - Jeśli obecne dane różnią się od OCR → zachowaj dotychczasowe, dodaj komentarz o rozbieżności
2. Sprawdź czy wszystkie kredyty mają przypisane instytucje z bazy:
   - Jeśli nie → przerwij proces z komunikatem o konieczności weryfikacji
3. Podziel kredyty na dwie grupy:
   - Kredyty otwarte - będą przypisane do Leada
   - Kredyty zamknięte - będą pogrupowane w cesje
4. Dla kredytów otwartych:
   - Zapisz każdy kredyt w tabeli UmowyKredytoweLead:
     - leadId: ID aktualnego leada
     - instytucjaBankowaId: ID instytucji z bazy
     - status: "Otwarty"
     - dataRozpoczęciaKredytu: data rozpoczęcia
     - numerUmowy: numer kredytu
     - kwotaKredytu: kwota kredytu z OCR
     - dokumentOCRId: ID aktualnego dokumentu
     - scoringJakości: scoring odczytu dla danego kredytu
5. Dla kredytów zamkniętych:
   - Grupuj kredyty według instytucji bankowych
   - Dla każdej grupy kredytów z tej samej instytucji:
     - Utwórz nową cesję:
       - leadId: ID aktualnego leada
       - instytucjaBankowaId: ID instytucji z bazy
       - status: "Nowa"
       - dataOtwarcia: aktualna data
       - przypisanyDoradca: przypisany zostaje kolejny z kolei doradca klienta cesje z listy doradców klienta cesje. Aplikacja przechowuje ostatnio przypisanego doradce klienta cesje.
       - numerCesji: null (zostanie zaktualizowane przez funkcję automatycznego uzupełnienia)
       - kwotaPrzelewu: null (zostanie zaktualizowane przez funkcję automatycznego uzupełnienia)
       - czyCesjaNotarialna: czy kredyt ma być związany z cesją notarialną
     - Utwórz powiązanie w CesjaZrodlo:
       - cesjaId: ID utworzonej cesji
       - dokumentOCRId: ID aktualnego dokumentu
       - scoringJakości: średni scoring dla kredytów w grupie
     - Dla każdego kredytu w grupie Zapisz dane kredytu w UmowaKredytowa
        - cesjaId: ID utworzonej cesji
        - instytucjaBankowaId: ID instytucji z bazy
        - status: status kredytu (otwarty/zamknięty)
        - dataRozpoczęciaKredytu: data rozpoczęcia
        - dataZamknięciaKredytu: data zakończenia (dla zamkniętych)
        - numerUmowy: numer kredytu
        - kwotaKredytu: kwota kredytu z OCR
        - dokumentOCRId: ID aktualnego dokumentu
        - scoringJakości: scoring odczytu dla danego kredytu
        - kredytObsługiwanyNotarialnie: czy kredyt ma być obsługiwany notarialnie
     - Wywołaj funkcję automatycznego uzupełnienia dla utworzonej cesji:
       [[Funkcja - Automatyczne uzupełnienie numeru cesji oraz kwoty przelewu]]
6. Zmień status Leada na "Otrzymano raport BIK"
7. Dla każdej utworzonej cesji wyślij powiadomienie email do doradcy klienta z komunikatem:
   - Gdy utworzono 1 cesję → "Dla Twojego klienta [imię] [nazwisko] został przetworzony raport BIK. Utworzono nową cesję dla [nazwa instytucji bankowej]. Przejdź do systemu, aby rozpocząć pracę nad cesją."
   - Gdy utworzono więcej cesji → "Dla Twojego klienta [imię] [nazwisko] został przetworzony raport BIK. Utworzono [liczba] nowe cesje dla następujących instytucji: [lista nazw instytucji bankowych]. Przejdź do systemu, aby rozpocząć pracę nad cesjami."

### Dane wyjściowe

- Lista utworzonych cesji z przypisanymi kredytami zamkniętymi
- Lista kredytów otwartych przypisanych do Leada
- Status wysłania powiadomień email do doradcy

## Powiązania

- Ekrany: [[Ekran - OCR dokumentów z BIK]]
- Funkcje: [[Funkcja - Automatyczne uzupełnienie numeru cesji oraz kwoty przelewu]]
