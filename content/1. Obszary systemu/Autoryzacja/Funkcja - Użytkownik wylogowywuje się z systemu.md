---
Estimation: 1
---

## Cel

Bezpieczne zakończenie sesji użytkownika w systemie

## Warunki początkowe

- Użytkownik jest zalogowany
- Istnieje aktywna sesja użytkownika

## Przebieg główny

### Dane wejściowe

- ID aktywnej sesji użytkownika

### Kroki

1. System weryfikuje istnienie aktywnej sesji:
   - Gdy sesja nie istnieje → komunikat "Brak aktywnej sesji"
   - Gdy sesja istnieje → przejście do kroku 2
2. System kończy sesję:
   - Usuwa token sesji
   - Aktualizuje last_login w tabeli Użytkownik
   - Zapisuje czas wylogowania w logach systemu
3. System wyświetla komunikat "Wylogowano pomyślnie"
4. System przekierowuje użytkownika do [[Ekran - Strona logowania]]

### Dane wyjściowe

- Zaktualizowany last_login użytkownika
- Zapis w logach systemu
- Usunięta sesja użytkownika

## Powiązania

- Ekrany: [[Ekran - Strona logowania]], [[Ekran - Menu nawigacyjne aplikacji]]
