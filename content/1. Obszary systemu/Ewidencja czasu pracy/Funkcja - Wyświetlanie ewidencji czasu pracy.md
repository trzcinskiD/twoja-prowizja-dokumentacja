---
Estimation: 3
---

## Cel

Pobranie i wyświetlenie ewidencji czasu pracy dla zalogowanego doradcy, podległych doradców (w przypadku kierownika) lub wszystkich doradców za wybrany miesiąc.

## Warunki początkowe

- Użytkownik ma uprawnienia do przeglądania ewidencji czasu pracy zgodnie z rolą:
  - Doradca klienta BIK i Doradca klienta Cesje - dostęp tylko do własnej ewidencji
  - Kierownik zespołu - dostęp do ewidencji podległych doradców
  - Szef działu - dostęp do ewidencji wszystkich doradców
  - Administrator - pełen dostęp do wszystkich funkcji i danych
- Użytkownik znajduje się w [[Ekran - Ewidencja czasu pracy]]

## Przebieg główny

### Dane wejściowe

- Wybrany miesiąc (domyślnie aktualny)
- ID użytkownika, którego ewidencję chcemy wyświetlić (opcjonalne, tylko dla uprawnionych ról)

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Dla Doradcy:
     - Zezwól tylko na przeglądanie własnej ewidencji
     - Ignoruj parametr ID użytkownika
   - Dla Kierownika zespołu:
     - Sprawdź czy wybrany użytkownik należy do jego zespołu
     - Gdy nie należy → wyświetl "Brak uprawnień do przeglądania ewidencji tego użytkownika"
   - Dla Szefa działu i Administratora:
     - Zezwól na przeglądanie ewidencji wszystkich użytkowników

2. Pobierz dane nagłówkowe:
   - Imię i nazwisko doradcy
   - Nazwa zespołu
   - Status wypełnienia za wybrany miesiąc:
     - Oblicz liczbę niewypełnionych dni roboczych
     - Gdy wszystkie dni wypełnione → "Wypełniono wszystkie dni robocze"
     - Gdy brakuje dni → "Brakuje wypełnienia X dni"

3. Przygotuj dane kalendarza:
   - Pobierz wszystkie dni miesiąca
   - Dla każdego dnia określ:
     - Czy jest dniem roboczym
     - Czy jest weekendem (oznacz jako nieaktywny)
     - Czy jest świętem (oznacz jako nieaktywny)
   - Dla dni roboczych pobierz:
     - Czas pracy (format HH:MM)
     - Czas szkoleń/przerw (format HH:MM)
     - Komentarz do dnia

4. Oblicz podsumowanie miesięczne:
   - Suma czasu pracy
   - Suma czasu szkoleń/przerw
   - Efektywny czas pracy (różnica)

5. Zastosuj formatowanie warunkowe:
   - Oznacz na czerwono dni z niewypełnionym czasem pracy
   - Oznacz na zielono dni z wypełnionym czasem pracy
   - Dezaktywuj dni przyszłe
   - Zablokuj edycję dni z poprzednich miesięcy (poza poprzednim)

### Dane wyjściowe

- Dane nagłówkowe użytkownika
- Kalendarz z wypełnionymi czasami pracy
- Podsumowanie miesięczne
- Status wypełnienia miesiąca
- Informacje o formatowaniu poszczególnych dni

## Powiązania

- Ekrany: [[Ekran - Ewidencja czasu pracy]]
