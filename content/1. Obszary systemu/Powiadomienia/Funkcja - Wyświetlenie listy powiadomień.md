---
Estimation: 2
---

## Cel

Wyświetlenie listy powiadomień dla zalogowanego użytkownika z uwzględnieniem filtrów i sortowania.

## Warunki początkowe

- Użytkownik jest zalogowany
- Użytkownik ma dostęp do modułu powiadomień

## Przebieg główny

### Dane wejściowe

- ID zalogowanego użytkownika
- Parametry filtrowania:
  - {Status}: status powiadomień (Wszystkie/Nieprzeczytane/Przeczytane)
  - {Typ}: typ powiadomień (Wszystkie/System/Lead/Cesja)
  - {Data od}: opcjonalna data początkowa
  - {Data do}: opcjonalna data końcowa

### Kroki

1. Pobierz powiadomienia użytkownika zgodnie z wybranymi filtrami
2. Posortuj powiadomienia od najnowszych do najstarszych
3. Zastosuj paginację wyników
4. Przygotuj podsumowanie:
   - Całkowita liczba powiadomień
   - Liczba nieprzeczytanych powiadomień

### Dane wyjściowe

- Lista powiadomień
- Metadane (liczniki, informacje o paginacji)

## Powiązania

- Ekrany: [[Element - Modal powiadomień]]
- Funkcje:
  - [[Funkcja - Oznacz powiadomienia jako przeczytane]]
  - [[Funkcja - Usuń powiadomienia]]
