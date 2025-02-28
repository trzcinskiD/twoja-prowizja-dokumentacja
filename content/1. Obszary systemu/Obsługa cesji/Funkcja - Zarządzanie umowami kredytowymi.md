---
Estimation: 5
---

# Funkcja - Zarządzanie umowami kredytowymi

## Cel

Umożliwienie dodawania, edycji i usuwania umów kredytowych w ramach cesji.

## Warunki początkowe

- Użytkownik ma uprawnienia do zarządzania umowami: Administrator, Kierownik zespołu, Szef działu, Doradca klienta Cesji (dla swoich cesji)
- Cesja istnieje w systemie
- Cesja nie jest w statusie "Zamknięta"

## Przebieg główny

### Dane wejściowe

- Z [[Ekran - Szczegóły Cesji]], sekcja umów kredytowych

### Kroki

1. Przy dodawaniu nowej umowy:

   - Wyświetl pusty formularz umowy
   - Waliduj wprowadzone dane:
     - Gdy data zamknięcia wcześniejsza niż rozpoczęcia → "Data zamknięcia musi być późniejsza niż data rozpoczęcia"
     - Gdy nieprawidłowy format numeru konta → "Nieprawidłowy format numeru konta"
   - Zapisz nową umowę

2. Przy edycji umowy:
   - Załaduj dane umowy do formularza
   - Waliduj wprowadzone zmiany (jak wyżej)
   - Zapisz zmiany

3. Przy usuwaniu umowy:
   - Wyświetl potwierdzenie "Czy na pewno chcesz usunąć tę umowę?"
   - Gdy potwierdzono → usuń umowę
   - Gdy anulowano → zamknij potwierdzenie

4. Aktualizuj sumy i statystyki cesji po każdej operacji

### Dane wyjściowe

- Zaktualizowana lista umów kredytowych
- Zaktualizowane sumy i statystyki cesji
