---
Estimation: 2
---

## Cel

Weryfikacja czy numer telefonu użytkownika jest poprawnie połączony z systemem Callyzer poprzez odpytanie API Callyzer.

## Warunki początkowe

- System posiada skonfigurowane połączenie z API Callyzer
- Użytkownik ma wprowadzony numer telefonu w systemie
- Użytkownik ma rolę Administratora

## Przebieg główny

### Dane wejściowe

- Numer telefonu użytkownika pobrany z ekranu szczegółów użytkownika
- Parametry zapytania do API Callyzer:
  - emp_numbers: [numer_telefonu] - tablica zawierająca numer telefonu użytkownika
  - page_size: 1 - ograniczenie wyników do jednego rekordu

### Kroki

1. Sprawdź czy użytkownik ma rolę wymagającą integracji z Callyzer:
   - Gdy nie ma roli Administratora → Nie wykonuj weryfikacji
   - Gdy ma odpowiednią rolę → Przejdź dalej

2. Sprawdź czy użytkownik ma wprowadzony numer telefonu:
   - Gdy brak numeru → Wyświetl status "Brak numeru telefonu"
   - Gdy jest numer → Przejdź dalej

3. Wykonaj zapytanie do API Callyzer (/employee/get):
   - Gdy status 401 → "Błąd autoryzacji Callyzer" (nieprawidłowe dane dostępowe)
   - Gdy status 403 → "Błąd autoryzacji Callyzer" (subskrypcja wygasła)
   - Gdy status 400 i wiadomość zawiera "doesn't exist" → "Numer nie jest zarejestrowany w Callyzer"
   - Gdy status 200 → Sprawdź szczegóły pracownika:
     - Gdy is_app_uninstalled=true → "Aplikacja Callyzer nie jest zainstalowana"
     - Gdy is_lead_active=false → "Funkcja leadów nie jest aktywna w Callyzer"
     - W przeciwnym razie → "Połączono z Callyzer"

4. Zaktualizuj informację o statusie połączenia na ekranie:
   - Wyświetl odpowiedni status z ikoną:
     - ✅ dla statusu "Połączono z Callyzer"
     - ❌ dla pozostałych statusów
   - Wyświetl tooltip z pełną informacją o błędzie przy statusach błędów

### Dane wyjściowe

- Status połączenia z Callyzer:
  - "Połączono z Callyzer"
  - "Numer nie jest zarejestrowany w Callyzer"
  - "Błąd autoryzacji Callyzer"
  - "Aplikacja Callyzer nie jest zainstalowana"

## Powiązania

- Ekrany: [[Ekran - Szczegóły użytkownika]]
- Narzędzia: [[Callyzer]]
