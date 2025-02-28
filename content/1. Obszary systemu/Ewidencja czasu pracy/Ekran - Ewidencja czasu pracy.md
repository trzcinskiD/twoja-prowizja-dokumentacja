---
Estimation: 5
---

## Cel ekranu

- Ekran służy do wprowadzania dziennego czasu pracy przez doradców BIK i Cesji
- Dane są wykorzystywane do obliczania statystyk pracownika

## Uprawnienia

- Doradca klienta BIK i Doradca klienta Cesje:
  - Może edytować własny czas pracy
  - Może przeglądać historię własnego czasu pracy
- Kierownik zespołu:
  - Może przeglądać czas pracy podległych doradców
- Szef działu:
  - Może przeglądać czas pracy wszystkich doradców
- Administrator:
  - Pełen dostęp do wszystkich funkcji i danych

## Struktura ekranu

### Sekcja nagłówkowa

- Sekcja zawiera główne informacje i kontrolki nawigacji
- Z czego składa się sekcja:
  - {Wybór miesiąca}: *datepicker* -> pozwala wybrać miesiąc do edycji (domyślnie aktualny)
  - {Wybór doradcy}: *select* -> pozwala wybrać doradcę do wyświetlenia jego czasu pracy. Widoczne tylko dla Kierownika zespołu, Szefa działu i Administratora
  - {Nazwa użytkownika}: wyświetla imię i nazwisko zalogowanego doradcy
  - {Zespół}: wyświetla nazwę zespołu doradcy
  - {Status wypełnienia}: pokazuje status wypełnienia czasu pracy za wybrany miesiąc
    - "Wypełniono wszystkie dni robocze"
    - "Brakuje wypełnienia X dni"

### Sekcja kalendarza

- Sekcja wyświetla dni miesiąca w formie kalendarza
- Z czego składa się sekcja:
  - Kalendarz miesięczny pokazujący:
    - Dni robocze (aktywne do edycji)
    - Weekendy (nieaktywne, wyszarzone)
    - Święta (nieaktywne, oznaczone kolorem)
  - Dla każdego dnia roboczego:
    - Data
    - {Czas pracy}: *time* -> format HH:MM
    - {Czas szkoleń/przerw}: *time* -> format HH:MM
    - {Komentarz}: *text* -> opcjonalny komentarz do dnia (np. "Szkolenie produktowe")

### Sekcja podsumowania

- Sekcja zawiera podsumowanie miesięczne
- Z czego składa się sekcja:
  - {Suma czasu pracy}: całkowity czas pracy w miesiącu
  - {Suma czasu szkoleń/przerw}: całkowity czas szkoleń i przerw
  - {Efektywny czas pracy}: różnica między czasem pracy a czasem szkoleń/przerw

### Akcje

- {Zapisz zmiany}: zapisuje wprowadzone czasy pracy
  - Walidacje:
    - Czas pracy nie może przekraczać 24h dziennie
    - Czas szkoleń nie może być większy niż czas pracy
    - Można edytować tylko dni z bieżącego miesiąca i poprzedniego

## Formatowanie warunkowe

- Dni z niewypełnionym czasem pracy są oznaczone na czerwono
- Dni z wypełnionym czasem pracy są oznaczone na zielono
- Dni przyszłe są nieaktywne
- Dni z poprzednich miesięcy (poza poprzednim) są zablokowane do edycji
