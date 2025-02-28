---
Estimation: 2
---

## Cel ekranu

- Umożliwienie użytkownikom zresetowania zapomnianego hasła
- Zapewnienie bezpiecznego procesu zmiany hasła

## Struktura ekranu

### Sekcja wprowadzania emaila

- Pole {Email}: *email* - adres email użytkownika
  - Walidacje:
    - Format email: "Nieprawidłowy format adresu email"
    - Wymagane: "Pole jest wymagane"
- Przycisk {Wyślij link resetujący} -> uruchomienie [[Funkcja - Użytkownik resetuje hasło]]
- Link {Powrót do logowania} -> przekierowanie do [[Ekran - Strona logowania]]

### Sekcja resetowania hasła (po kliknięciu w link)

- Pole {Nowe hasło}: *password* - nowe hasło użytkownika
  - Walidacje:
    - Wymagane: "Pole jest wymagane"
    - Minimum 8 znaków: "Hasło musi mieć minimum 8 znaków"
    - Wielka litera: "Hasło musi zawierać minimum jedną wielką literę"
    - Mała litera: "Hasło musi zawierać minimum jedną małą literę"
    - Cyfra: "Hasło musi zawierać minimum jedną cyfrę"
    - Znak specjalny: "Hasło musi zawierać minimum jeden znak specjalny"

- Pole {Powtórz hasło}: *password* - potwierdzenie nowego hasła
  - Walidacje:
    - Wymagane: "Pole jest wymagane"
    - Zgodność z polem Nowe hasło: "Hasła muszą być identyczne"

- Przycisk {Zmień hasło} -> uruchomienie funkcji resetowania hasła użytkownika
