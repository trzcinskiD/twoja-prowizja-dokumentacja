---
Estimation: 8
---

## Cel ekranu

- Ekran służy do tworzenia nowych użytkowników oraz edycji danych istniejących użytkowników
- Dostępny tylko dla użytkowników z rolą Administrator
- Umożliwia zarządzanie podstawowymi danymi użytkownika, jego uprawnieniami i przypisaniem do zespołów

## Struktura ekranu

### Sekcja przycisków akcji

- Sekcja zawiera główne akcje dostępne dla administratora
- Z czego składa się sekcja:
  - {Zapisz zmiany} -> zapisuje wszystkie wprowadzone zmiany
    - Przycisk aktywny tylko gdy wprowadzono jakieś zmiany
    - Po zapisie wyświetla komunikat "Zmiany zostały zapisane"
  - {Anuluj zmiany} -> przywraca stan sprzed edycji
    - Przycisk aktywny tylko gdy wprowadzono jakieś zmiany
    - Przed anulowaniem wyświetla potwierdzenie "Czy na pewno chcesz anulować wprowadzone zmiany?"
  - {Powrót do listy} -> powrót do [[Ekran - Lista użytkowników]]
  - {Data utworzenia} i {Utworzone przez}: informacje audytowe
  - {Data modyfikacji} i {Zmodyfikowane przez}: informacje audytowe

### Sekcja danych podstawowych

- Sekcja zawiera podstawowe informacje o użytkowniku
- Z czego składa się sekcja:
  - {Imię}: *text* - imię użytkownika
    - Walidacje:
      - Wymagane: "Pole jest wymagane"
      - Min. 2 znaki: "Imię musi mieć minimum 2 znaki"
  - {Nazwisko}: *text* - nazwisko użytkownika
    - Walidacje:
      - Wymagane: "Pole jest wymagane"
      - Min. 2 znaki: "Nazwisko musi mieć minimum 2 znaki"
  - {Email}: *email* - adres email użytkownika (login do systemu)
    - Walidacje:
      - Wymagane: "Pole jest wymagane"
      - Format email: "Nieprawidłowy format adresu email"
      - Unikalność: "Podany adres email jest już zajęty"
  - {Telefon}: *phone* - numer telefonu użytkownika
    - Walidacje:
      - Format: "Nieprawidłowy format numeru telefonu"
    - Informacja o statusie połączenia numeru telefonu z Callyzer
  - {Sprawdź połączenie telefonu z Callyzer} -> odświeża informację o statusie połączenia numeru telefonu z Callyzer
  - {Status}: *select* - status konta użytkownika
    - Opcje: Aktywny/Zablokowany
  - {Reset hasła} -> wysyła link do resetu hasła na adres email użytkownika
    - Widoczne tylko w trybie edycji

### Sekcja uprawnień

- Sekcja zawiera ustawienia ról i uprawnień użytkownika
- Z czego składa się sekcja:
  - {Role}: *multiselect* - wybór ról użytkownika
    - Walidacje:
      - Wymagane: "Wybierz przynajmniej jedną rolę"
  - {Zespoły}: *multiselect* - przypisanie do zespołów
    - Walidacje:
      - Wymagane dla wybranych ról: "Wybierz przynajmniej jeden zespół"
    - Akcje:
      - {Dodaj nowy zespół} -> otwiera [[Element - Modal zarządzania zespołami]] w trybie dodawania
      - {Edytuj zespół} -> otwiera [[Element - Modal zarządzania zespołami]] w trybie edycji
        - Widoczne tylko dla zaznaczonego zespołu
        - Aktywne tylko dla użytkownika z rolą Administrator

### Sekcja statystyk (tylko w trybie edycji, ponieważ dla nowego użytkownika nie ma jeszcze danych)

- Sekcja zawiera podstawowe statystyki użytkownika
- Z czego składa się sekcja:
  - {Ostatnie logowanie}: data i godzina ostatniego logowania
  - {Liczba obsługiwanych leadów}: dla roli Doradca klienta BIK
  - {Liczba aktywnych cesji}: dla roli Doradca klienta Cesje
  - {Link do szczegółowych statystyk} -> przekierowanie do [[Ekran - Wyświetlenie statystyk zespołu]] z prefiltrowanym zespołem użytkownika
