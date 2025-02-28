---
Estimation: 3
---

## Cel

Zapisanie wszystkich wprowadzonych zmian w szczegółach cesji z zachowaniem integralności danych i historii zmian.

## Warunki początkowe

- Użytkownik ma uprawnienia do edycji cesji: Administrator, Kierownik zespołu, Szef działu, Doradca klienta Cesji (dla swoich cesji)
- Cesja istnieje w systemie
- Wprowadzono zmiany w co najmniej jednym polu

## Przebieg główny

### Dane wejściowe

- Dane z [[Ekran - Szczegóły Cesji]]:
  - {Status cesji}
  - {Przypisany doradca}
  - {Przypisany analityk}
  - Dane finansowe z banku
  - Dane obsługi cesji
  - Dane przelewu
  - Dane aneksu

### Kroki

1. Sprawdź uprawnienia użytkownika do edycji cesji
   - Gdy brak uprawnień → wyświetl komunikat "Brak uprawnień do edycji cesji"
   - Gdy ma uprawnienia → kontynuuj

2. Waliduj wprowadzone dane:
   - Gdy brak wymaganego doradcy → "Doradca musi być przypisany do cesji"
   - Gdy brak wymaganego analityka → "Analityk musi być przypisany do cesji"
   - Gdy nieprawidłowy format numeru konta → "Nieprawidłowy format numeru konta"
   - Gdy dane poprawne → kontynuuj

3. Sprawdź status cesji:
   - Gdy status "Zamknięta" → wyświetl komunikat "Nie można edytować zamkniętej cesji"
   - Gdy inny status → kontynuuj

4. Zapisz zmiany w bazie danych:
   - Aktualizuj dane podstawowe cesji
   - Aktualizuj dane finansowe
   - Aktualizuj dane obsługi cesji
   - Aktualizuj dane przelewu
   - Aktualizuj dane aneksu

5. Zapisz informację o modyfikacji:
   - Data modyfikacji = aktualna data
   - Zmodyfikowane przez = aktualny użytkownik

6. Wyświetl komunikat "Zmiany zostały zapisane"

### Dane wyjściowe

- Zaktualizowana cesja
- Data i autor modyfikacji
- Komunikat potwierdzający zapisanie zmian
