---
Estimation: 3
---

# Ekran - Ustawienia użytkownika

## Cel ekranu

- Umożliwienie użytkownikowi kompleksowego zarządzania ustawieniami konta
- Zapewnienie dostępu do danych osobowych oraz zmiany
- Dostępny dla wszystkich zalogowanych użytkowników

## Struktura ekranu

### Sekcja "Mój profil"

- Dane kontaktowe:
  - {Imię i nazwisko}: dane osobowe użytkownika
  - {Email}: email użytkownika
  - {Zespół}: nazwa zespołu do którego należy użytkownik
  - {Rola}: aktualna rola użytkownika w systemie
  - {Ostatnie logowanie}: data i godzina ostatniego logowania

### Sekcja "Zmiana hasła"

- Pola:
  - {Aktualne hasło}: *password* - obecne hasło użytkownika
    - Walidacje:
      - wymagane: "Wprowadź aktualne hasło"
  - {Nowe hasło}: *password* - nowe hasło
    - Walidacje:
      - min. 8 znaków: "Hasło musi mieć minimum 8 znaków"
      - wielka litera: "Hasło musi zawierać wielką literę"
      - cyfra: "Hasło musi zawierać cyfrę"
      - znak specjalny: "Hasło musi zawierać znak specjalny"
  - {Powtórz hasło}: *password* - potwierdzenie nowego hasła
    - Walidacje:
      - zgodność: "Hasła muszą być identyczne"
- Przyciski/Linki:
  - {Zmień hasło} -> aktualizacja hasła użytkownika
