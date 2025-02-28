---
Estimation: 2
---

## Cel

Pobranie i wyświetlenie szczegółowych informacji o pojedynczym leadzie

## Warunki początkowe

- Użytkownik zalogowany w systemie
- Użytkownik posiada uprawnienia do przeglądania leada:
  - Administrator
  - Szef działu
  - Kierownik zespołu
  - Doradca klienta BIK przypisany do leada

## Przebieg główny

### Dane wejściowe

- ID leada

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy Kierownik zespołu → Kontynuuj
   - Gdy Doradca → Sprawdź czy lead jest przypisany
   - W przeciwnym razie → "Brak uprawnień do przeglądania leada"

2. Pobierz dane leada:
   - Gdy lead nie istnieje → "Lead o podanym ID nie istnieje"
   - Gdy lead istnieje → Pobierz wszystkie informacje:
     - Dane podstawowe
     - Dane kontaktowe
     - Informacje o paczce
     - Informacje o obsłudze

3. Pobierz dane kontekstowe:
   - Lista dostępnych doradców (dla Kierowników)
   - Możliwe statusy leada
   - ID poprzedniego i następnego leada z aktualnego widoku

### Dane wyjściowe

- Komplet danych o leadzie do wyświetlenia na [[Ekran - Szczegóły leada]]

## Powiązania

- Ekrany: [[Ekran - Szczegóły leada]]
