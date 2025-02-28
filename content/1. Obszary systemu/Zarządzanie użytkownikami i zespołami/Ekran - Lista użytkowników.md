---
Estimation: 3
---

## Cel ekranu

- Ekran służy do przeglądania, filtrowania i zarządzania listą użytkowników systemu
- Dostępny tylko dla użytkowników z rolą Administrator
- Umożliwia przejście do szczegółów użytkownika oraz podstawowe operacje na użytkownikach

## Struktura ekranu

### Sekcja nagłówkowa

- Sekcja zawiera główne informacje i akcje dostępne dla administratora
- Z czego składa się sekcja:
  - {Licznik wszystkich użytkowników}: pokazuje całkowitą liczbę użytkowników w systemie
  - {Licznik aktywnych użytkowników}: pokazuje liczbę aktywnych użytkowników
  - {Utwórz użytkownika} -> otwiera [[Ekran - Szczegóły użytkownika]] w trybie tworzenia nowego użytkownika
  - {Zarządzaj zespołami} -> otwiera [[Element - Modal zarządzania zespołami]]
    - Modal zawiera:
      - Lista istniejących zespołów z możliwością edycji i usunięcia
      - {Dodaj zespół} -> otwiera formularz dodawania nowego zespołu
        - {Nazwa zespołu}: *text* - nazwa nowego zespołu
          - Walidacje:
            - Wymagane: "Pole jest wymagane"
            - Min. 3 znaki: "Nazwa musi mieć minimum 3 znaki"
            - Unikalność: "Zespół o takiej nazwie już istnieje"
        - {Opis}: *textarea* - opis zespołu (opcjonalne)

### Sekcja filtrów

- Sekcja zawiera zestaw filtrów do zawężania widoku danych w tabeli użytkowników
- Z czego składa się sekcja:
  - Filtry:
    - {Wyszukiwarka}: *imię, nazwisko, email* -> wyszukuje użytkownika po danych osobowych
    - {Role}: *multiselect* -> filtruje użytkowników po rolach w systemie
    - {Status}: *multiselect* -> filtruje użytkowników po statusie (Aktywny/Zablokowany)
    - {Zespoły}: *multiselect* -> filtruje użytkowników po przypisaniu do zespołów
    - {Data utworzenia konta}: *daterange* -> filtruje użytkowników po dacie utworzenia konta
    - {Data ostatniego logowania}: *daterange* -> filtruje użytkowników po dacie ostatniego logowania

### Sekcja główna - tabela użytkowników

- Sekcja wyświetla dane w formie tabeli z możliwością interakcji
- Z czego składa się sekcja:
  - {Tabela użytkowników}: tabela z listą wszystkich użytkowników
    - Kolumny:
      - Checkbox (boolean)
      - Imię i nazwisko (text)
      - Email (text)
      - Role (enum) - z kolorami dla poszczególnych ról
      - Status (enum)
      - Zespół (text)
      - Data utworzenia konta (date)
      - Data ostatniego logowania (date)
      - Liczba obsługiwanych leadów (number)
      - {Szczegóły użytkownika} -> otwiera [[Ekran - Szczegóły użytkownika]]
    - Sortowanie w tabeli:
      - Domyślne sortowanie: po dacie utworzenia konta (malejąco)
      - Możliwość sortowania po kolumnach:
        - Imię i nazwisko (alfabetycznie)
        - Email (alfabetycznie)
        - Data utworzenia konta
        - Data ostatniego logowania
        - Liczba obsługiwanych leadów
    - Akcje:
      - Zaznaczanie pojedynczych i wszystkich rekordów
      - {Zablokuj użytkowników} -> blokuje zaznaczonych użytkowników po potwierdzeniu (aktywne tylko gdy zaznaczono przynajmniej jeden rekord)
      - {Odblokuj użytkowników} -> odblokowuje zaznaczonych użytkowników po potwierdzeniu (aktywne tylko gdy zaznaczono przynajmniej jeden rekord)
    - Kontrolki paginacji:
      - {Wybór liczby rekordów}: *select* -> wybór 20/50/100 rekordów na stronę
      - {Nawigacja stron}: przyciski nawigacji (pierwsza/poprzednia/następna/ostatnia)
      - {Info o stronach}: text w formacie "Strona X z Y (łącznie N rekordów)"
