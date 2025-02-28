---
Estimation: 3
---

## Cel

Umożliwienie dodawania i zarządzania komentarzami w ramach cesji.

## Warunki początkowe

- Użytkownik ma uprawnienia do przeglądania cesji: Administrator, Kierownik zespołu, Szef działu, Doradca klienta Cesji (dla swoich cesji)
- Cesja istnieje w systemie

## Przebieg główny

### Dane wejściowe

- Z [[Ekran - Szczegóły Cesji]], sekcja komentarzy:
  - {Nowy komentarz}

### Kroki

1. Przy dodawaniu komentarza:
   - Sprawdź czy pole komentarza nie jest puste
   - Gdy puste → wyświetl komunikat "Treść komentarza nie może być pusta"
   - Gdy niepuste → dodaj komentarz z:
     - Treść = wprowadzony tekst
     - Autor = aktualny użytkownik
     - Data utworzenia = aktualna data

2. Przy wyświetlaniu komentarzy:
   - Pobierz wszystkie komentarze dla cesji
   - Sortuj malejąco po dacie utworzenia
   - Wyświetl dla każdego:
     - Treść
     - Autor
     - Data utworzenia

3. Przy edycji komentarza:
   - Sprawdź czy użytkownik jest autorem
   - Gdy nie jest autorem → wyświetl "Możesz edytować tylko własne komentarze"
   - Gdy jest autorem:
     - Zapisz zmiany
     - Oznacz komentarz jako edytowany
     - Zachowaj oryginalną datę utworzenia

4. Przy usuwaniu komentarza:
   - Sprawdź czy użytkownik jest autorem
   - Gdy nie jest autorem → wyświetl "Możesz usuwać tylko własne komentarze"
   - Gdy jest autorem:
     - Wyświetl komunikat potwierdzenia "Czy na pewno chcesz usunąć ten komentarz?"
     - Po potwierdzeniu usuń komentarz z systemu

### Dane wyjściowe

- Zaktualizowana lista komentarzy
- Komunikaty o statusie operacji

## Powiązania

- Ekrany: [[Ekran - Szczegóły Cesji]]
