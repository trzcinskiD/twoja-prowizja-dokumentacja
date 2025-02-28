---
Estimation: 3
---

## Przeznaczenie

- Służy do importowania nowej paczki leadów poprzez plik CSV oraz określenia jej podstawowych parametrów, takich jak pochodzenie, daty i spółka
- Uprawnienia: Funkcja dostępna dla Administratora, Szefa działu oraz Kierownika zespołu

## Struktura elementu

### Nagłówek

- Tytuł modalu "Import paczki leadów"

### Sekcja informacyjna

- Wylistowanie wymaganych kolumn w pliku CSV:
  - {Lista kolumn}: *text* - imię (wymagane), nazwisko (wymagane), numer telefonu (wymagane), województwo, kod pocztowy, miejscowość, ulica, nr budynku, nr mieszkania

### Sekcja uploadu pliku

- {Pole wyboru pliku}: *file* - akceptuje tylko pliki .csv do 10MB
- {Wskaźnik postępu} - pokazuje postęp uploadowania pliku
- {Informacja o limicie} - "Maksymalny rozmiar pliku: 10MB"

### Sekcja formularza

- {Pochodzenie bazy}: *select* - wybór źródła danych
  - Walidacje:
    - pole wymagane: "Wybierz pochodzenie bazy"
  - Opcje: Neocraft/Mobi-me/Inne
- {Spółka}: *text* - nazwa spółki
  - Walidacje:
    - pole wymagane: "Wprowadź nazwę spółki"
    - max 100 znaków: "Nazwa spółki jest za długa"
- {Data przekazania leadów}: *date* - data otrzymania bazy
  - Walidacje:
    - pole wymagane: "Wprowadź datę przekazania"
    - nie może być z przyszłości: "Data nie może być z przyszłości"
- {Data przedawnienia leadów}: *date* - termin przedawnienia bazy
  - Walidacje:
    - pole wymagane: "Wprowadź datę przedawnienia"
    - późniejsza niż data przekazania: "Data przedawnienia musi być późniejsza niż data przekazania"
- {Uwagi}: *textarea* - dodatkowe informacje o paczce
  - Walidacje:
    - max 500 znaków: "Przekroczono maksymalną długość uwag"

### Sekcja przycisków

- {Anuluj}: *button* -> zamyka modal bez zapisywania
- {Importuj}: *button* -> uruchamia import paczki leadów
  - Stan disabled gdy:
    - Nie wybrano pliku
    - Brakuje wymaganych pól
    - Trwa upload pliku

## Stany

- **Domyślny**: Wszystkie pola puste, przycisk "Importuj" nieaktywny
- **W trakcie uploadu**:
  - Aktywny wskaźnik postępu
  - Zablokowane pola formularza
  - Przycisk "Importuj" nieaktywny
- **Błąd walidacji**:
  - Wyświetlone komunikaty błędów przy polach
  - Przycisk "Importuj" nieaktywny
- **Gotowy do importu**:
  - Wszystkie wymagane pola wypełnione poprawnie
  - Przycisk "Importuj" aktywny
- **Import dużej paczki** (powyżej 10,000 rekordów):
  - Dodatkowa informacja o szacowanym czasie importu
