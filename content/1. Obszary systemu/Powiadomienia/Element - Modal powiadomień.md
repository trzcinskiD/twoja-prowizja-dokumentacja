---
Estimation: 4
---

# Element - Modal powiadomień

## Przeznaczenie

- Służy do wyświetlania i zarządzania powiadomieniami użytkownika w formie wyskakującego okna
- Umożliwia szybki podgląd najnowszych powiadomień oraz wykonywanie akcji na nich

## Struktura elementu

### Nagłówek modalu

- **Tytuł**: "Powiadomienia"
- **Przycisk zamknięcia**: Ikona (X) do zamykania modalu

### Lista powiadomień

- **Kontener powiadomień**: Wyświetla maksymalnie 5 najnowszych powiadomień
- **Element powiadomienia**:
  - Tytuł powiadomienia
  - Treść powiadomienia
  - Relatywny czas powiadomienia (np. "2 godziny temu")
  - Data i godzina w formacie "DD.MM.YYYY HH:mm"
  - Ikona statusu (dla nieprzeczytanych)
  - Przyciski akcji: "Oznacz jako przeczytane", "Usuń"

### Sekcja akcji grupowych

- **Przycisk "Oznacz wszystkie jako przeczytane"**: Zmienia status wszystkich widocznych powiadomień
- **Przycisk "Usuń wszystkie"**: Usuwa wszystkie widoczne powiadomienia

## Stany

- **Domyślny**: Lista załadowanych powiadomień posortowana według statusu i daty
- **Ładowanie**: Wskaźnik ładowania podczas pobierania powiadomień
- **Puste**: Informacja gdy brak powiadomień do wyświetlenia
- **Akcja w toku**: Stan podczas wykonywania akcji na powiadomieniach (oznaczanie/usuwanie)
