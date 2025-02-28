---
Estimation: 2
---

## Cel

Uwierzytelnienie użytkownika i utworzenie sesji w systemie

## Warunki początkowe

- Użytkownik nie jest zalogowany
- Użytkownik posiada aktywne konto w systemie

## Przebieg główny

### Dane wejściowe

- {Email}: string - adres email użytkownika
- {Hasło}: string - hasło użytkownika

### Kroki

1. System weryfikuje format adresu email
2. System sprawdza czy użytkownik istnieje w bazie:
   - Gdy nie istnieje → komunikat "Nieprawidłowe dane logowania"
   - Gdy istnieje → przejście do kroku 3
3. System weryfikuje hasło:
   - Gdy nieprawidłowe → komunikat "Nieprawidłowe dane logowania"
   - Gdy poprawne → przejście do kroku 4
4. System tworzy sesję:
   - Zapisuje czas utworzenia (created_at)
   - Ustawia czas wygaśnięcia na 8h
5. System aktualizuje last_login w tabeli Użytkownik

### Dane wyjściowe

- Utworzona sesja użytkownika
- Zaktualizowany last_login
