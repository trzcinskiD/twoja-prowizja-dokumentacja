---
Estimation: 5
---

# Funkcja - Zarządzanie umowami kredytowymi leada

## Cel

Umożliwienie dodawania, edycji i usuwania umów kredytowych przypisanych bezpośrednio do leada, z zachowaniem rozróżnienia między umowami z cesji a umowami dodanymi ręcznie.

## Warunki początkowe

- Użytkownik ma uprawnienia do zarządzania leadami: Administrator, Kierownik zespołu, Szef działu, Doradca klienta BIK (dla swoich leadów)
- Lead istnieje w systemie
- Użytkownik ma dostęp do danego leada zgodnie z uprawnieniami

## Przebieg główny

### Dane wejściowe

- Z [[Ekran - Szczegóły leada]], sekcja umów kredytowych

### Kroki

1. Przy dodawaniu nowej umowy:
   - Wyświetl pusty formularz umowy
   - Waliduj wprowadzone dane:
     - Gdy data zamknięcia wcześniejsza niż rozpoczęcia → "Data zamknięcia musi być późniejsza niż data rozpoczęcia"
     - Gdy nieprawidłowy format numeru konta → "Nieprawidłowy format numeru konta"
   - Zapisz nową umowę z flagą "umowa_leada = true"

2. Przy edycji umowy:
   - Sprawdź źródło umowy:
     - Gdy umowa pochodzi z cesji → wyświetl "Nie można edytować umów z powiązanych cesji"
     - Gdy umowa należy do leada → załaduj formularz edycji
   - Po wprowadzeniu zmian:
     - Gdy dane poprawne → zapisz zmiany
     - Gdy dane niepoprawne → wyświetl odpowiednie komunikaty walidacji

3. Przy usuwaniu umowy:
   - Sprawdź źródło umowy:
     - Gdy umowa pochodzi z cesji → wyświetl "Nie można usunąć umów z powiązanych cesji"
     - Gdy umowa należy do leada → wyświetl potwierdzenie usunięcia
   - Po potwierdzeniu:
     - Gdy zaakceptowano → usuń umowę
     - Gdy anulowano → zamknij potwierdzenie

4. Po każdej operacji:
   - Odśwież listę umów kredytowych
   - Zaktualizuj podsumowanie umów w sekcji

### Dane wyjściowe

- Na [[Ekran - Szczegóły leada]], sekcja umów kredytowych:
  - Zaktualizowana lista umów kredytowych
  - Zaktualizowane podsumowanie umów:
    - Łączna liczba umów
    - Suma prowizji i odsetek
    - Data ostatniej aktualizacji

## Powiązania

- Ekrany: [[Ekran - Szczegóły leada]]
