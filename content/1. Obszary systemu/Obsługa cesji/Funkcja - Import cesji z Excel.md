---
Estimation: 12
---

## Cel

Import danych cesji wraz z powiązanymi leadami z pliku Excel według określonego szablonu, z uwzględnieniem mapowania doradców i analityków oraz obsługą wielu umów kredytowych.

## Warunki początkowe

- Użytkownik posiada uprawnienia Administratora
- Format pliku Excel zgodny z szablonem eksportu
- Plik nie przekracza 20MB
- System ma skonfigurowane mapowanie doradców i analityków

## Uwagi implementacyjne

1. Ze względu na dużą ilość danych (9000 rekordów):
   - Przetwarzać dane w paczkach po 100 rekordów
   - Używać transakcji bazodanowych dla każdej paczki
   - Implementować mechanizm wznawiania importu od ostatniego udanego wiersza
   - Zapisywać postęp importu

## Przebieg główny

### Dane wejściowe

- Plik Excel z danymi cesji

### Kroki

1. Walidacja pliku:
   - Sprawdź format pliku (xlsx)
   - Sprawdź rozmiar pliku (max 20MB)
   - Sprawdź zgodność struktury kolumn z szablonem
   - Gdy błąd → przerwij import z odpowiednim komunikatem

2. Przygotowanie mapowań:
   - Załaduj doradców i analtyków
   - Załaduj słownik instytucji bankowych

3. Przetwarzanie wiersz po wierszu:
   - Dla każdego wiersza:
     a. Sprawdź czy lead istnieje (po PESEL lub kombinacji imię+nazwisko+telefon):
        - Gdy istnieje → użyj istniejącego
        - Gdy nie istnieje → utwórz nowego z danymi:
          - Imię, nazwisko, PESEL
          - Dane kontaktowe
          - Dane adresowe
          - Status
          - Przypisany doradca
          - Źródło bazy leadów

     b. Utwórz cesję:
        - Podstawowe dane cesji
        - Powiązanie z leadem
        - Status cesji
        - Przypisany doradca cesji
        - Przypisany analityk
        - Data utworzenia dokumentu
        - Data modyfikacji
        - Komentarze

     c. Przetwórz listę umów kredytowych:
        - Podziel tekst z komórki na pojedyncze umowy
        - Dla każdej umowy:
          - Wyodrębnij numer umowy
          - Wyodrębnij kwotę
          - Wyodrębnij datę (jeśli dostępna)
          - Przypisz do odpowiedniej instytucji bankowej

     d. Dodaj umowy kredytowe do cesji

4. Obsługa błędów:
   - Loguj błędy dla każdego wiersza osobno
   - Kontynuuj import pomimo błędów pojedynczych wierszy
   - Przygotuj raport z błędów

### Dane wyjściowe

- Raport z importu zawierający:
  - Liczba zaimportowanych cesji
  - Liczba utworzonych nowych leadów
  - Liczba użytych istniejących leadów
  - Liczba utworzonych umów kredytowych
  - Lista błędów z numerami wierszy i opisem
  - Lista ostrzeżeń (np. brak mapowania doradcy)

## Powiązania

- [[Modal - Import cesji z Excel]]
- Szablon Excel: [Szablon Excel do eksportu danych cesji](https://docs.google.com/spreadsheets/d/1BJwEwv-tcCWIIVP3iKRJCjCUFhtMzRkj/edit?usp=drive_link&ouid=112953634265814180095&rtpof=true&sd=true)
