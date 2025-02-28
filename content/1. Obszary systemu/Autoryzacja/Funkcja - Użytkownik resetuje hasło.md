---
Estimation: 3
---

## Cel

Bezpieczna zmiana hasła użytkownika poprzez proces weryfikacji email

## Warunki początkowe

- Użytkownik nie jest zalogowany
- Użytkownik posiada aktywne konto w systemie

### Dane wejściowe

- {Email}: string - adres email użytkownika
- {Token}: string - token resetujący z linku (w drugim kroku)
- {Nowe hasło}: string - nowe hasło użytkownika (w drugim kroku)

### Kroki

1. Etap wysyłania linku resetującego:
   - System weryfikuje czy email istnieje w bazie
   - System generuje unikalny token resetujący (ważny 1h)
   - System zapisuje token w bazie z timestampem
   - System wysyła email z linkiem zawierającym token
   - System wyświetla komunikat "Link resetujący został wysłany"

2. Etap zmiany hasła:
   - System weryfikuje token:
     - Gdy nieważny → komunikat "Link wygasł"
     - Gdy ważny → przejście dalej
   - System weryfikuje nowe hasło:
     - Sprawdza wymagania bezpieczeństwa
     - Sprawdza czy hasło nie jest takie samo jak poprzednie
   - System aktualizuje hasło w bazie
   - System usuwa wykorzystany token
   - System aktualizuje pola audytowe (modified_at, modified_by)

### Dane wyjściowe

- Zaktualizowane hasło użytkownika
- Zaktualizowane pola audytowe

## Powiązania

- Ekrany: [[Twoja Prowizja/1. Obszary systemu/Autoryzacja/Ekran - Reset hasła|Ekran - Reset hasła]]
