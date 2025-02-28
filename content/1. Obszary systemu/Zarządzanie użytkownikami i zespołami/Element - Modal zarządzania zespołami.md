---
Estimation: 5
---

## Przeznaczenie

- Służy do zarządzania zespołami w systemie poprzez dodawanie nowych, edycję istniejących oraz ich dezaktywację
- Umożliwia administratorom szybki podgląd i modyfikację wszystkich zespołów w jednym miejscu
- Dostępny tylko dla użytkowników z rolą Administrator

## Struktura elementu

### Nagłówek

- Tytuł modalu "Zarządzanie zespołami"
- {Zamknij}: *button* -> zamyka modal

### Sekcja listy zespołów

- Sekcja zawiera listę wszystkich zespołów w systemie
- Z czego składa się sekcja:
  - {Wyszukiwarka zespołów}: *text* -> filtruje listę zespołów po nazwie
    - Minimum 3 znaki do rozpoczęcia wyszukiwania
- {Lista zespołów}: tabela z listą wszystkich zespołów
  - Kolumny:
    - Nazwa zespołu (text)
    - Liczba członków zespołu (number)
    - Status (badge) - kolorystyczne oznaczenie Aktywny/Nieaktywny
    - Data utworzenia (date)
    - Akcje (buttons)
  - Akcje dla każdego zespołu:
    - {Edytuj} -> przełącza wiersz w tryb edycji
    - {Usuń} -> usuwa zespół po potwierdzeniu
      - Wymagane potwierdzenie: "Czy na pewno chcesz usunąć zespół? Operacja jest nieodwracalna."
      - Walidacja: nie można usunąć zespołu z przypisanymi użytkownikami
  - {Dodaj zespół} -> dodaje nowy wiersz do tabeli w trybie edycji

### Sekcja edycji zespołu (widoczna w trybie edycji/dodawania)

- Sekcja zawiera formularz edycji danych zespołu
- Z czego składa się sekcja:
  - {Nazwa zespołu}: *text* - nazwa zespołu
    - Walidacje:
      - Wymagane: "Pole jest wymagane"
      - Min. 3 znaki: "Nazwa musi mieć minimum 3 znaki"
      - Unikalność: "Zespół o takiej nazwie już istnieje"
  - {Opis}: *textarea* - opis zespołu (opcjonalne)
    - Placeholder: "Wprowadź opis zespołu (opcjonalnie)"
  - {Status}: *select* - status zespołu
    - Opcje: Aktywny/Nieaktywny
  - Przyciski:
    - {Zapisz} -> zapisuje zmiany
      - Aktywne tylko gdy wprowadzono zmiany
    - {Anuluj} -> anuluje edycję
      - W trybie dodawania: usuwa nowy wiersz
      - W trybie edycji: przywraca poprzednie wartości

## Stany

- **Domyślny**:
  - Lista zespołów załadowana
  - Tryb przeglądania
- **Edycja**:
  - Wybrany wiersz w trybie edycji
  - Formularz z wypełnionymi danymi
  - Przyciski "Zapisz" i "Anuluj" aktywne
- **Dodawanie**:
  - Nowy pusty wiersz w trybie edycji
  - Formularz z pustymi polami
  - Przyciski "Zapisz" i "Anuluj" aktywne
- **Ładowanie**:
  - Wskaźnik ładowania danych
  - Akcje zablokowane
- **Błąd walidacji**:
  - Wyświetlone komunikaty błędów przy polach
  - Przycisk "Zapisz" nieaktywny
