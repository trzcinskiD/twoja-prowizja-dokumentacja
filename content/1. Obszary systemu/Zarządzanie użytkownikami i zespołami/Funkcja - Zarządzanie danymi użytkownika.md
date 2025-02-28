---
Estimation: 8
---

## Cel

Utworzenie nowego lub aktualizacja istniejącego użytkownika w systemie zgodnie z danymi wprowadzonymi w [[Ekran - Szczegóły użytkownika]]

## Warunki początkowe

- Użytkownik zalogowany w systemie
- Użytkownik posiada rolę Administrator
- W przypadku edycji: użytkownik istnieje w systemie

## Przebieg główny

### Dane wejściowe

- Tryb operacji (tworzenie/edycja)
- ID użytkownika (w przypadku edycji)
- Dane użytkownika zgodne ze strukturą formularza z [[Ekran - Szczegóły użytkownika]]:
  - Dane podstawowe
  - Role systemowe
  - Przypisanie do zespołów

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak roli Administrator → "Brak uprawnień do zarządzania użytkownikami"
   - Gdy ma uprawnienia → Przejdź dalej

2. Walidacja danych:
   - Wykonaj walidacje zgodnie z regułami zdefiniowanymi w [[Ekran - Szczegóły użytkownika]]
   - Gdy walidacja negatywna → Zwróć listę błędów
   - Gdy walidacja pozytywna → Przejdź dalej

3. Sprawdź unikalność adresu email:
   - Gdy email już istnieje → "Użytkownik o podanym adresie email już istnieje"
   - Gdy email unikalny → Przejdź dalej

4. W trybie tworzenia:
   - Wygeneruj tymczasowe hasło
   - Utwórz nowego użytkownika z przekazanymi danymi
   - Wyślij email powitalny z danymi dostępowymi
   - Gdy błąd wysyłki emaila → "Nie udało się wysłać emaila powitalnego. Użytkownik został utworzony."

5. W trybie edycji:
   - Gdy użytkownik nie istnieje → "Użytkownik o podanym ID nie istnieje"
   - Zaktualizuj dane użytkownika
   - Gdy zmieniono role lub zespoły → Zaktualizuj uprawnienia

6. Zapisz informacje audytowe:
   - Data modyfikacji
   - Użytkownik modyfikujący
   - Zakres zmian

### Dane wyjściowe

- Status operacji (sukces/błąd)
- W przypadku sukcesu:
  - ID użytkownika
  - Potwierdzenie wykonanej operacji
- W przypadku błędu:
  - Lista błędów walidacji
  - Komunikat błędu

## Powiązania

- Ekrany: [[Ekran - Szczegóły użytkownika]]
- Funkcje: [[Funkcja - Wyświetlanie szczegółów użytkownika]]
