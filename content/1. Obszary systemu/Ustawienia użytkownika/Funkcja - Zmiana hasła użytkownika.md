---
Estimation: 2
---

## Cel

Umożliwienie użytkownikowi zmiany własnego hasła do konta po podaniu aktualnego hasła oraz spełnieniu wymagań polityki bezpieczeństwa dla nowego hasła

## Warunki początkowe

- Użytkownik jest zalogowany w systemie
- Konto użytkownika jest aktywne

## Przebieg główny

### Dane wejściowe

- Dane z [[Ekran - Ustawienia użytkownika]]:
  - Aktualne hasło użytkownika
  - Nowe hasło
  - Potwierdzenie nowego hasła

### Kroki

1. Sprawdź status użytkownika:
   - Gdy użytkownik nie jest zalogowany → "Zaloguj się, aby zmienić hasło"
   - Gdy konto zablokowane → "Nie można zmienić hasła dla zablokowanego konta"
   - Gdy konto aktywne → Przejdź dalej

2. Zweryfikuj aktualne hasło:
   - Gdy hasło niepoprawne → "Wprowadzone aktualne hasło jest nieprawidłowe"
   - Gdy hasło poprawne → Przejdź dalej

3. Sprawdź wymagania dla nowego hasła:
   - Minimum 8 znaków
   - Przynajmniej jedna wielka litera
   - Przynajmniej jedna cyfra
   - Przynajmniej jeden znak specjalny
   - Gdy wymagania niespełnione → "Nowe hasło nie spełnia wymagań bezpieczeństwa"
   - Gdy wymagania spełnione → Przejdź dalej

4. Porównaj nowe hasło z potwierdzeniem:
   - Gdy hasła różne → "Wprowadzone hasła nie są identyczne"
   - Gdy hasła zgodne → Przejdź dalej

5. Zaktualizuj dane użytkownika:
   - Zapisz zahaszowane nowe hasło
   - Zapisz datę zmiany hasła
   - Usuń flagę wymuszającą zmianę hasła (jeśli istniała)

6. Wyślij powiadomienie email:
   - Wyślij informację o zmianie hasła na adres email użytkownika
   - Gdy wysyłka się powiedzie → "Hasło zostało zmienione. Email potwierdzający został wysłany"
   - Gdy błąd wysyłki → "Hasło zostało zmienione, ale wystąpił błąd podczas wysyłania potwierdzenia"

### Dane wyjściowe

- Status operacji (sukces/błąd)
- Komunikat potwierdzający lub informujący o błędzie
- Data zmiany hasła

## Powiązania

- Ekrany: [[Ekran - Ustawienia użytkownika]]
