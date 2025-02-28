---
Estimation: 4
---

## Cel

Aktualizacja danych istniejącego leada. Funkcja uruchamiana po kliknięciu przycisku "Zapisz zmiany" na ekranie szczegółów leada.

## Warunki początkowe

- Użytkownik posiada uprawnienia do edycji leada:
  - Administrator
  - Kierownik zespołu
  - Doradca klienta BIK przypisany do leada
- Lead istnieje w systemie

## Przebieg główny

### Dane wejściowe

Dane pobierane z [[Ekran - Szczegóły leada]]:

- ID leada
- Zmodyfikowane dane leada
- Zmodyfikowane dane przesyłki (jeśli istnieją)

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy Kierownik zespołu → Pełny dostęp do edycji
   - Gdy przypisany Doradca → Ograniczony dostęp do edycji
   - W przeciwnym razie → "Brak uprawnień do edycji leada"

2. Waliduj zmodyfikowane dane:
   - Sprawdź walidacje zdefiniowane dla zmodyfikowanych pól na [[Ekran - Szczegóły leada]]
   - Gdy którakolwiek walidacja nie powiedzie się:
     - Wyświetl komunikaty błędów przy odpowiednich polach
     - Nie zapisuj żadnych zmian
     - Pozostań w trybie edycji
   - Gdy wszystkie walidacje poprawne → Przejdź dalej

3. Przygotuj zakres zmian:
   - Porównaj nowe dane ze starymi
   - Zmień status z "Nowy - zaimportowana baza leadów" na "Przydzielony - BIK". Działa tylko gdy status leada to "Nowy - zaimportowana baza leadów"
   - Przygotuj listę modyfikowanych pól

4. Zapisz zmiany:
   - Aktualizuj zmienione dane leada i przesyłki
   - Zaktualizuj dane audytowe (modified_at, modified_by)

5. Wyświetl komunikat potwierdzający zapisanie zmian:
   - Gdy sukces → "Lead został pomyślnie zaktualizowany"
   - Gdy błąd → "Wystąpił błąd podczas aktualizacji leada"

6. Odśwież dane na ekranie

### Dane wyjściowe

- Status operacji (sukces/błąd)
- Lista zmodyfikowanych pól

## Powiązania

- Ekrany: [[Ekran - Szczegóły leada]]
