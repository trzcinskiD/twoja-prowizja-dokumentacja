---
Estimation: 4
---

## Cel

Zmiana statusu (zablokowanie/odblokowanie) dla wybranych użytkowników systemu

## Warunki początkowe

- Użytkownik zalogowany w systemie
- Użytkownik posiada rolę Administrator
- Zaznaczono przynajmniej jednego użytkownika na liście

## Przebieg główny

### Dane wejściowe

Dane pobierane z [[Ekran - Lista użytkowników]]:

- Lista ID zaznaczonych użytkowników
- Akcja do wykonania (zablokuj/odblokuj)

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak roli Administrator → "Brak uprawnień do zarządzania statusem użytkowników"
   - Gdy ma uprawnienia → Przejdź dalej

2. Waliduj możliwość wykonania operacji:
   - Sprawdź czy nie próbujemy zablokować ostatniego administratora:
     - Gdy tak → "Nie można zablokować ostatniego administratora systemu"
     - Gdy nie → Przejdź dalej
   - Sprawdź czy nie blokujemy własnego konta:
     - Gdy tak → "Nie można zablokować własnego konta"
     - Gdy nie → Przejdź dalej

3. Wykonaj zmianę statusu dla każdego użytkownika:
   - Aktualizuj status użytkownika
   - Zapisz datę modyfikacji i modyfikującego
   - W przypadku blokowania:
     - Zakończ aktywne sesje użytkownika
     - Zapisz datę zablokowania

4. Przygotuj podsumowanie operacji:
   - Gdy blokowanie → "Zablokowano [X] użytkowników"
   - Gdy odblokowanie → "Odblokowano [X] użytkowników"
   - Gdy wystąpiły błędy → "Operacja zakończona częściowym sukcesem. Zmieniono status [X] z [Y] użytkowników"

### Dane wyjściowe

- Status operacji (sukces/błąd)
- Liczba użytkowników, których status został zmieniony
- Lista błędów (jeśli wystąpiły)

## Powiązania

- Ekrany: [[Ekran - Lista użytkowników]]
