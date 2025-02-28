---
Estimation: 2
---

## Przeznaczenie

- Służy do importowania cesji z pliku Excel według określonego szablonu
- Uprawnienia: Funkcja dostępna dla Administratora

## Struktura elementu

### Nagłówek

- Tytuł modalu "Import cesji z Excel"

### Sekcja informacyjna

- Informacja o szablonie:
  - "Użyj szablonu zgodnego z formatem eksportu cesji"
  - Link do pobrania przykładowego szablonu

### Sekcja uploadu pliku

- {Pole wyboru pliku}: *file* - akceptuje tylko pliki .xlsx do 20MB
- {Wskaźnik postępu} - pokazuje postęp uploadowania pliku
- {Informacja o limicie} - "Maksymalny rozmiar pliku: 20MB"

### Sekcja przycisków

- {Anuluj}: *button* -> zamyka modal bez zapisywania
- {Importuj}: *button* -> uruchamia import cesji
  - Stan disabled gdy:
    - Nie wybrano pliku
    - Trwa upload pliku

## Stany

- **Domyślny**: Pole wyboru pliku puste, przycisk "Importuj" nieaktywny
- **W trakcie uploadu**:
  - Aktywny wskaźnik postępu
  - Przycisk "Importuj" nieaktywny
- **Gotowy do importu**:
  - Plik wybrany
  - Przycisk "Importuj" aktywny
- **Import w toku**:
  - Informacja o postępie importu
  - "Import może potrwać kilka minut. Po zakończeniu zostanie wyświetlony raport."
