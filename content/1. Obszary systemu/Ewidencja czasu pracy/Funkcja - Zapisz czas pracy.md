---
Estimation: 2
---
## Cel

Zapisanie dziennego czasu pracy i szkoleń/przerw dla doradcy BIK lub Cesji.

## Warunki początkowe

- Użytkownik jest zalogowany
- Użytkownik posiada rolę Doradca klienta BIK lub Doradca klienta Cesje
- Użytkownik posiada rolę Administrator
- Wybrany jest aktualny lub poprzedni miesiąc

## Przebieg główny

### Dane wejściowe

Dane wprowadzane na [[Ekran - Ewidencja czasu pracy]]:

- {Czas pracy}: format HH:MM
- {Czas szkoleń/przerw}: format HH:MM
- {Komentarz}: opcjonalny tekst
- {Data}: data z kalendarza

### Kroki

1. Sprawdź poprawność wprowadzonych danych:
   - Gdy czas pracy > 24h → "Czas pracy nie może przekraczać 24h dziennie"
   - Gdy czas szkoleń > czas pracy → "Czas szkoleń nie może być większy niż czas pracy"
   - Gdy data spoza dozwolonego zakresu → "Można edytować tylko dni z bieżącego miesiąca i poprzedniego"
2. Zapisz dane w systemie
3. Zaktualizuj status wypełnienia czasu pracy za wybrany miesiąc
4. Zaktualizuj formatowanie w kalendarzu:
   - Oznacz dzień na zielono
   - Przelicz sumy w sekcji podsumowania

### Dane wyjściowe

- Zaktualizowany status wypełnienia
- Zaktualizowane sumy w sekcji podsumowania:
  - {Suma czasu pracy}
  - {Suma czasu szkoleń/przerw}
  - {Efektywny czas pracy}

## Powiązania

- Ekrany: [[Ekran - Ewidencja czasu pracy]]
