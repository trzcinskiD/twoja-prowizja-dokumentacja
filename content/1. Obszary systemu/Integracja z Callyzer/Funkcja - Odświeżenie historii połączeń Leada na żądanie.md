---
Estimation: 3
---

# Funkcja - Odświeżenie historii połączeń leada

## Cel

Natychmiastowe pobranie i wyświetlenie aktualnej historii połączeń dla konkretnego leada poprzez integrację z systemem Callyzer.

## Warunki początkowe

- System posiada skonfigurowane połączenie z API Callyzer
- Lead istnieje w systemie
- Użytkownik ma uprawnienia do przeglądania leada:
  - Administrator
  - Szef działu
  - Kierownik zespołu
  - Doradca klienta BIK przypisany do leada

## Przebieg główny

### Dane wejściowe

- Dane leada w tym numer telefonu oraz identyfikator z [[Ekran - Szczegóły leada]], sekcja historii połączeń.

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak uprawnień → wyświetl "Brak uprawnień do przeglądania historii połączeń"
   - Gdy ma uprawnienia → przejdź dalej

2. Waliduj dane wejściowe:
   - Sprawdź czy lead istnieje w systemie
   - Sprawdź poprawność formatu numeru telefonu
   - Gdy walidacja niepoprawna → wyświetl odpowiedni komunikat błędu

3. Wykonaj zapytanie do API Callyzer:
   - Parametry:
     - phone_number: numer_telefonu_leada
     - start_date: data_sprzed_6_miesięcy
     - end_date: aktualna_data
   - Obsługa błędów:
     - Gdy błąd autoryzacji → wyświetl "Błąd autoryzacji API Callyzer"
     - Gdy timeout → wyświetl "Przekroczono czas oczekiwania. Spróbuj ponownie."
     - Gdy sukces → przejdź do przetwarzania danych

4. Przetwórz pobrane dane:
   - Usuń istniejące połączenia dla tego numeru z ostatnich 6 miesięcy
   - Dla każdego połączenia z API:
     - Mapuj statusy według schematu z dokumentu [[Funkcja - Cykliczne pobieranie danych o rozmowach pracowników]]
     - Zapisz/zaktualizuj rekordy połączeń w bazie danych

### Dane wyjściowe

- Zaktualizowana lista połączeń
- Data ostatniej synchronizacji
- Status operacji:
  - "Historia połączeń została zaktualizowana"
  - "Wystąpił błąd podczas aktualizacji historii połączeń"

## Powiązania

- Ekrany: [[Ekran - Szczegóły leada]]
- Funkcje: [[Funkcja - Cykliczne pobieranie danych o rozmowach pracowników]]
