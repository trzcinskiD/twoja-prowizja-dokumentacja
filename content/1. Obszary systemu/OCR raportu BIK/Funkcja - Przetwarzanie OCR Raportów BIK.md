---
Estimation: 20
---

## Cel

- Odczytanie danych z dokumentów BIK za pomocą OCR
- Przetworzenie danych z OCR przez AI w celu uzyskania danych na temat kredytów do wykorzystania w systemie
- Identyfikacja leada, którego dotyczą dane z dokumentów

## Warunki początkowe

- Użytkownik ma uprawnienia do modułu OCR
- Wczytano przynajmniej jeden plik do przetwarzania
- Pliki spełniają wymagania techniczne (format, rozmiar)
- System obsługuje dwa typy raportów BIK: płatne (zawsze w PDF) i bezpłatne (często skany dokumentów papierowych)

## Przebieg główny

### Dane wejściowe

- Lista plików do przetwarzania
- Parametry OCR:
  - maksymalny rozmiar pliku: 25MB
  - maksymalny czas przetwarzania strony: 10s
  - formaty: PDF, JPG, PNG, TIFF

### Kroki

1. Sprawdź wymagania techniczne dla plików:
   - format, rozmiar, wielkość strony
   - Jeśli którykolwiek plik nie spełnia wymagań → przerwij proces z odpowiednim komunikatem

2. Przygotuj pliki do przetwarzania:
   - Dla każdego pliku utwórz rekord w DokumentOCR:
      - status: "Nowy"
      - leadId: null (zostanie uzupełnione po identyfikacji)
      - nazwaPliku, rozmiarPliku, formatPliku
      - ilośćPrób: 0
      - Zmień status wszystkich dokumentów na "WTrakciePrzetwarzania"
      - Zwiększ ilośćPrób o 1

3. Przetwarzanie OCR:
   - Uruchom OCR dla każdego dokumentu
   - Identyfikuj typ raportu BIK (płatny/bezpłatny) na podstawie struktury dokumentu
   - Dostosuj algorytm ekstrakcji danych do typu raportu:
     - Dla raportów płatnych: wykorzystaj stały schemat (kredyty otwarte na początku, zamknięte w dalszych częściach)
     - Dla raportów bezpłatnych: zastosuj bardziej elastyczny algorytm rozpoznawania
   - Dla każdego dokumentu:
     - Oblicz scoring jakości odczytu
     - Zapisz scoringJakości w DokumentOCR
     - Gdy scoring < XX% → oznacz status "DoWeryfikacji"
     - Gdy scoring ≥ XX% → zmień status na "PrzetworzonyPoprawnie"

4. Sprawdź scoring jakości (Odpowiedni scoring do ustalenia przez developera wykonującego funkcję):
   - Dla każdego dokumentu:
     - Gdy scoring < XX% → oznacz status "DoWeryfikacji"
     - Gdy scoring ≥ XX% → zmień status na "PrzetworzonyPoprawnie"

5. Z odczytanych danych wyodrębnij:
   - Dane osobowe klienta:
     - Imię i nazwisko
     - PESEL
     - Adres (ulica, numer, kod pocztowy, miejscowość)
   - Dla raportów płatnych:
     - Kredyty otwarte z tabeli na początku dokumentu
     - Kredyty zamknięte z sekcji po słowie kluczowym "zamknięte" (bank, data rozpoczęcia, kwota kredytu, data zamknięcia)
   - Dla raportów bezpłatnych:
     - Zastosuj bardziej ogólne rozpoznawanie struktury kredytów
   - Dla każdej wykrytej instytucji bankowej:
     - Wyszukaj istniejącą instytucję po NIP, REGON lub KRS (wystarczy dopasowanie jednego z identyfikatorów)
     - Jeśli znaleziono - użyj istniejącej instytucji
     - Jeśli nie znaleziono - oznacz kredyt do weryfikacji

6. Wyszukaj potencjalnych leadów na podstawie hierarchii kryteriów:
   1. Dokładne dopasowanie PESEL
   2. Jeśli brak dopasowania po PESEL:
      - Podobieństwo imienia i nazwiska (ignoring case, podobne znaki)
      - Podobieństwo adresu

7. Połącz wyniki ze wszystkich dokumentów:
   - Agreguj znalezione kredyty
   - Usuń duplikaty kredytów

### Dane wyjściowe

- Status przetwarzania dokumentów
- Scoring jakości dla każdego pliku i łączny
- Lista potencjalnych leadów
- Zagregowane dane w ustrukturyzowanym formacie:
  - Dane osobowe
  - Lista kredytów
  - Lista instytucji bankowych wymagających weryfikacji

## Powiązania

- Ekrany: [[Ekran - OCR dokumentów z BIK]]
- Przykładowe pliki z bezpłatnymi raportami BIK do OCR: [Link do folderu](https://drive.google.com/drive/folders/1BG1qrIwU5QPw3Mvz2DexXOtslZy9fRQF?usp=drive_link)
- Przykładowe pliki z płatnymi raportami BIK do OCR (zdjęcia a docelowo w PDF): [Link do folderu](https://drive.google.com/drive/folders/1na28GDYmycRtvn7eSrDdAB0tolma8fr6?usp=drive_link)
