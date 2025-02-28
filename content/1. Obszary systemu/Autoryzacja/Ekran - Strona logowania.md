---
Estimation: 2
---

## Cel ekranu

- Umożliwienie użytkownikom bezpiecznego logowania do systemu
- Weryfikacja uprawnień dostępu

## Struktura ekranu

### Sekcja formularza logowania

- {Email}: *email* - adres email użytkownika
  - Zawiera placeholder sugerujący format
  - Walidacje:
    - Format email: "Nieprawidłowy format adresu email"
    - Wymagane: "Pole jest wymagane"
- {Hasło}: *password* - hasło użytkownika, maskowanie znaków
  - Walidacje:
    - Wymagane: "Pole jest wymagane"
- {Zaloguj się} -> uruchomienie funkcji logowania użytkownika
- {Zapomniałeś hasła?} -> przekierowanie do [[Ekran - Reset hasła]]

### Sekcja informacyjna

- Wyświetlanie komunikatów o błędach logowania
