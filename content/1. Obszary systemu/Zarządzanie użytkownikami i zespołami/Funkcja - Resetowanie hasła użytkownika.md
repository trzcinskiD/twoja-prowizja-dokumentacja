---
Estimation: 3
---

## Cel

Umożliwienie administratorowi zresetowania hasła użytkownika i wysłanie nowego hasła tymczasowego na adres email użytkownika

## Warunki początkowe

- Użytkownik zalogowany w systemie
- Użytkownik posiada rolę Administrator
- Użytkownik, którego hasło jest resetowane, istnieje w systemie i jest aktywny

## Przebieg główny

### Dane wejściowe

- ID użytkownika, którego hasło ma zostać zresetowane
- Dane z [[Ekran - Szczegóły użytkownika]]:
  - Email użytkownika
  - Status konta

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak roli Administrator → "Brak uprawnień do resetowania hasła użytkownika"
   - Gdy ma uprawnienia → Przejdź dalej

2. Sprawdź status użytkownika:
   - Gdy użytkownik nie istnieje → "Użytkownik o podanym ID nie istnieje"
   - Gdy użytkownik zablokowany → "Nie można zresetować hasła dla zablokowanego użytkownika"
   - Gdy użytkownik aktywny → Przejdź dalej

3. Wygeneruj nowe hasło tymczasowe:
   - Generuj hasło zgodne z polityką bezpieczeństwa
   - Ustaw flagę wymuszającą zmianę hasła przy następnym logowaniu

4. Zaktualizuj dane użytkownika:
   - Zapisz zahaszowane hasło tymczasowe
   - Zapisz datę resetu hasła
   - Zapisz informację o administratorze wykonującym reset

5. Wyślij email z hasłem tymczasowym:
   - Gdy wysyłka się powiedzie → "Hasło zostało zresetowane. Email z nowym hasłem został wysłany"
   - Gdy błąd wysyłki → "Hasło zostało zresetowane, ale wystąpił błąd podczas wysyłania emaila"

### Dane wyjściowe

- Status operacji (sukces/błąd)
- Komunikat potwierdzający lub informujący o błędzie
- Data resetu hasła
- Informacja o administratorze wykonującym reset

## Powiązania

- Ekrany: [[Ekran - Szczegóły użytkownika]]
- Funkcje: [[Funkcja - Zarządzanie danymi użytkownika]]
