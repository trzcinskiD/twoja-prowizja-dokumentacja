---
Estimation: 2
---

## Cel

Usunięcie wybranych powiadomień z systemu, zarówno pojedynczo jak i grupowo.

## Warunki początkowe

- Użytkownik jest zalogowany w systemie
- Istnieje przynajmniej jedno powiadomienie
- Użytkownik ma dostęp do [[Element - Modal powiadomień]]

## Przebieg główny

### Dane wejściowe

Dane z [[Element - Modal powiadomień]]:

- {Lista ID powiadomień}: lista identyfikatorów powiadomień do usunięcia
- {Tryb operacji}: pojedyncze/wszystkie

### Kroki

1. Sprawdź tryb operacji:
   - Gdy pojedyncze → użyj przekazanej listy ID powiadomień
   - Gdy wszystkie → pobierz ID wszystkich powiadomień użytkownika

2. Wyświetl potwierdzenie:
   - Gdy pojedyncze → "Czy na pewno chcesz usunąć to powiadomienie?"
   - Gdy wszystkie → "Czy na pewno chcesz usunąć wszystkie powiadomienia?"

3. Po potwierdzeniu:
   - Usuń wskazane powiadomienia z bazy danych
   - Zaktualizuj licznik powiadomień użytkownika

4. Przygotuj podsumowanie:
   - Gdy sukces → "Usunięto [X] powiadomień"
   - Gdy brak powiadomień → "Brak powiadomień do usunięcia"

### Dane wyjściowe

- Status operacji (sukces/anulowano/brak zmian)
- Liczba usuniętych powiadomień
- Zaktualizowana lista powiadomień w modalu
