---
Estimation: 3
---

## Cel

Dodanie nowej instytucji bankowej do systemu

## Warunki początkowe

- Użytkownik posiada rolę Administrator

## Przebieg główny

### Dane wejściowe

Dane pobierane z [[Element - Modal modyfikacji instytucji bankowej]]

### Kroki

1. System sprawdza uprawnienia użytkownika:
   - Gdy brak uprawnień → "Brak uprawnień do dodawania instytucji bankowych"
   - Gdy ma uprawnienia → kontynuuj
2. System waliduje wprowadzone dane:
   - Gdy są błędy walidacji → wyświetl odpowiednie komunikaty
   - Gdy dane poprawne → kontynuuj
3. System sprawdza unikalność NIP:
   - Gdy istnieje → wyświetl błąd "Instytucja o podanym NIP już istnieje"
   - Gdy nie istnieje → kontynuuj
4. System zapisuje nową instytucję w bazie danych z polami audytowymi
5. System wyświetla komunikat: "Instytucja bankowa została dodana"
6. System zamyka modal
7. System odświeża listę instytucji bankowych

### Dane wyjściowe

- Zaktualizowana lista instytucji bankowych

## Powiązania

- Ekrany: [[Ekran - Lista Instytucji Bankowych]], [[Ekran - OCR dokumentów z BIK]]
- Elementy: [[Element - Modal modyfikacji instytucji bankowej]]
