---
Estimation: 29
---

## Cel

- Odczytanie danych z odpowiedzi banku za pomocą OCR
- Analiza treści przez AI w celu ekstrakcji kluczowych informacji
- Wygenerowanie podsumowania odpowiedzi
- Prezentacja potencjalnie powiązanych cesji do wyboru przez użytkownika

## Dodatkowe informacje na temat dokumentów z odpowiedziami od banków, które wpływają na ich przetwarzanie

- Poszczególne banki:
    a. BANKI SPÓŁDZIELCZE (BS) – odpowiedzi od nich są różne z tego względu, że rzadko zdarza się, że się powtarza konkretny bank spółdzielczy (W TYTULE PRZELEWÓW w 90% przypadków jest IMIĘ i NAZWISKO)
    b. CITI HANDLOWY – ma prostą krótką treśc bez szczegółowych informacji (W TYTULE PRZELEWÓW w 95% przypadków jest IMIĘ i NAZWISKO)
    c. PEKAO S.A. – podają nr umów ale nie są doprecyzowane datą zawarcia (W TYTULE PRZELEWÓW w 95% przypadków jest IMIĘ i NAZWISKO)
    d. PKO BP – ma prostą krótką treśc bez szczegółowych informacji (W TYTULE PRZELEWÓW w 99% przypadków jest IMIĘ i NAZWISKO)
    e. MBANK – szczegółowa odpowiedź – wiemy po datach o których kredytach mowa (W TYTULE PRZELEWÓW w 95% przypadków jest IMIĘ i NAZWISKO)
    f. MILLENNIUM – brak szczegółów zwiazanych z pojedynczymi kredytami – tutaj interesuje nas wyciągnięcie nr zgłoszenia (CLMxxxxxxxxx) oraz imię i nazwisko
    g. VELOBANK – nie wiemy dokładnie który kredyt rozliczyli względem naszych danych z biku ale interesuje nas głównie nr umowy żeby połączyć przelew z danymi klienta
    h. CREDIT AGRIKOLE - nie wiemy dokładnie który kredyt rozliczyli względem naszych danych z biku (W TYTULE PRZELEWÓW w 99% przypadków jest IMIĘ i NAZWISKO),
    i. BNP – w większości pism opisują szczegółowo nr kredytu oraz data zawarcia – do rozszyfrowania przelewu potrzebujemy nr reklamacji (2024/14459) – po nim możemy rozszyfrować przelew
    j. ING - ma prostą krótką treśc bez szczegółowych informacji, czasami piszą że jeśli się należy to rozliczą – więc jedyna ścieżka sprawdzenia czy rozliczyli to konto bankowe. W przelewach podają NR zgłoszenia (pod datą na górze)
    k. SANTANDER BANK POLSKA – szegółowy opis – do rozszyfrowania potrzebujemy NR KREDYTU, każdy przelew = jeden kredyt
    l. SALTUS – to jest ubezpieczalnia od SKOKU STEFCZYKA potrzebujemy NR POLISY

## Warunki początkowe

- Użytkownik ma uprawnienia do modułu OCR
- Wczytano przynajmniej jeden plik do przetwarzania
- Pliki spełniają wymagania techniczne (format, rozmiar)

## Przebieg główny

### Dane wejściowe

- Lista plików do przetwarzania
- Parametry OCR:
  - maksymalny rozmiar pliku: 25MB
  - maksymalny czas przetwarzania strony: 10s
  - formaty: PDF, JPG, PNG, TIFF

### Kroki

1. Sprawdź wymagania techniczne dla plików:
   - Gdy plik nie spełnia wymagań → przerwij proces z komunikatem

2. Przetwarzanie OCR:
   - Utwórz rekord w DokumentOCR:
     - status: "WTrakciePrzetwarzania"
     - typ: "OdpowiedźBanku"
     - ilośćPrób: 1
   - Uruchom OCR dla dokumentu
   - Oblicz scoring jakości odczytu
   - Zapisz scoring w DokumentOCR
   - Gdy scoring < XX% → oznacz "DoWeryfikacji"
   - Gdy scoring ≥ XX% → kontynuuj przetwarzanie

3. Analiza AI odczytanego tekstu:
   - Przekaż tekst do modelu AI z następującymi wytycznymi:
     - Wyszukanie kluczowych informacji:
       - Informacje podstawowe:
         - Bank nadawca odpowiedzi (nazwa instytucji)
         - Numer zgłoszenia/reklamacji
         - Dane klienta (imię, nazwisko)
         - Wynik reklamacji (zasadna/niezasadna)
         - Informacje o ubezpieczeniu - jak odpowiedzieli na zwrot ubezpieczenia o kóre się ubiegaliśmy. Interesuje nas przede wszystkim, czy w danej odpowiedzi odnieśli się do ubezpieczenia czy nie.
       - Sprawdzenie czy występują kwoty łączne:
         - Czy podano kwotę łączną?
         - Jeśli tak:
           - Kwota wypłaty łączna
           - Prowizja i odsetki łączne
       - Sprawdzenie czy występują informacje o konkretnych kredytach:
         - Czy podano informacje o konkretnych umowach?
         - Jeśli tak, dla każdego wykrytego kredytu:
           - Numer kredytu/umowy
           - Data zawarcia
           - Kwota wypłaty dla tego kredytu
           - Prowizja i odsetki dla tego kredytu
   - Model zwraca ustrukturyzowane dane w formacie JSON

4. Generowanie podsumowania przez AI:
   - Na podstawie ustrukturyzowanych danych, wygeneruj:
     - Krótkie podsumowanie odpowiedzi w formie tekstu
     - Wyróżnienie najważniejszych kwot i informacji
     - Oznaczenie czy odpowiedź odnosi się do ubezpieczenia

5. Wyszukiwanie potencjalnych cesji do powiązania:
   - Na podstawie hierarchii kryteriów:
     1. Dopasowanie danych klienta (imię, nazwisko)
     2. Dopasowanie numeru kredytu/umowy kredytowej
     3. Dopasowanie numeru reklamacji
   - Zwróć listę wszystkich potencjalnie pasujących cesji wraz ze stopniem dopasowania
   - Dla każdej cesji pokaż:
     - Dane klienta
     - Lista umów kredytowych w cesji:
       - Numer kredytu
       - Data rozpoczęcia
       - Status
       - Czy znaleziono informacje o tej umowie w odpowiedzi
       - Kwota wypłaty (jeśli znaleziono)
       - Prowizja i odsetki (jeśli znaleziono)
     - Instytucję bankową
     - Stopień dopasowania danych

### Dane wyjściowe

- Ustrukturyzowane dane z odpowiedzi banku
- Tekstowe podsumowanie odpowiedzi
- Lista potencjalnie pasujących cesji
- Status przetwarzania dokumentu i scoring jakości

## Powiązania

- Ekran: [[Ekran - OCR odpowiedzi z banku]]
- Przykładowe odpowiedzi z banków: [Link do folderu](https://drive.google.com/drive/folders/1u0FWQdlJ0s5fZoZKqHs1hrjGT5xEq2Kv?usp=drive_link)
