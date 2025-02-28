---
Estimation: 4
---

## Cel

Modyfikacja danych istniejącej instytucji bankowej

## Warunki początkowe

- Użytkownik posiada rolę Administrator
- Instytucja bankowa istnieje w systemie

## Przebieg główny

### Dane wejściowe

- ID instytucji do edycji
- Dane pobierane z [[Element - Modal modyfikacji instytucji bankowej]]

### Kroki

1. System sprawdza uprawnienia użytkownika:
   - Gdy brak uprawnień → "Brak uprawnień do edycji instytucji bankowych"
   - Gdy ma uprawnienia → kontynuuj
2. System pobiera dane instytucji i wypełnia formularz
3. System waliduje wprowadzone zmiany:
   - Gdy są błędy walidacji → wyświetl odpowiednie komunikaty
   - Gdy dane poprawne → kontynuuj
4. System sprawdza unikalność NIP:
   - Gdy istnieje dla innej instytucji → wyświetl błąd "Instytucja o podanym NIP już istnieje"
   - Gdy nie istnieje lub należy do edytowanej instytucji → kontynuuj
5. System zapisuje zmiany w bazie danych z polami audytowymi
6. System wyświetla komunikat: "Dane instytucji zostały zaktualizowane"
7. System zamyka modal
8. System odświeża listę instytucji bankowych

### Dane wyjściowe

- Zaktualizowana lista instytucji bankowych

## Powiązania

- Ekrany: [[Ekran - Lista Instytucji Bankowych]]
- Elementy: [[Element - Modal modyfikacji instytucji bankowej]]
