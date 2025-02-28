---
Estimation: 2
---

## Cel

Zmiana statusu wybranych powiadomień na "przeczytane" w systemie, zarówno dla pojedynczego powiadomienia jak i grupowo.

## Warunki początkowe

- Użytkownik jest zalogowany w systemie
- Istnieje przynajmniej jedno nieprzeczytane powiadomienie
- Użytkownik ma dostęp do [[Element - Modal powiadomień]]

## Przebieg główny

### Dane wejściowe

Dane z [[Element - Modal powiadomień]]:

- {Lista ID powiadomień}: lista identyfikatorów powiadomień do oznaczenia
- {Tryb operacji}: pojedyncze/wszystkie

### Kroki

1. Sprawdź tryb operacji:
   - Gdy pojedyncze → użyj przekazanej listy ID powiadomień
   - Gdy wszystkie → pobierz ID wszystkich nieprzeczytanych powiadomień użytkownika

2. Dla każdego powiadomienia z listy:
   - Sprawdź status powiadomienia:
     - Gdy już przeczytane → pomiń
     - Gdy nieprzeczytane → oznacz jako przeczytane
   - Zaktualizuj datę modyfikacji
   - Zapisz zmiany w bazie danych

3. Przygotuj podsumowanie:
   - Gdy sukces → "Oznaczono [X] powiadomień jako przeczytane"
   - Gdy brak zmian → "Wszystkie powiadomienia są już przeczytane"

### Dane wyjściowe

- Status operacji (sukces/brak zmian)
- Liczba zmodyfikowanych powiadomień
- Zaktualizowana lista powiadomień w modalu
