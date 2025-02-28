---
Estimation: 1
---

## Cel

Usunięcie leada z systemu

## Warunki początkowe

- Użytkownik posiada uprawnienia Administratora
- Lead istnieje w systemie

## Przebieg główny

### Dane wejściowe

- ID leada do usunięcia

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak uprawnień → "Brak uprawnień do usuwania leadów"
   - Gdy ma uprawnienia → Przejdź dalej

2. Sprawdź czy lead istnieje:
   - Gdy nie istnieje → "Lead o podanym ID nie istnieje"
   - Gdy istnieje → Przejdź dalej

3. Wykonaj usunięcie:
   - Oznacz lead jako usunięty (soft delete)
   - Zachowaj dane audytowe
   - Zachowaj historię komentarzy

4. Sprawdź status operacji:
   - Gdy sukces → "Lead został pomyślnie usunięty"
   - Gdy błąd → "Wystąpił błąd podczas usuwania leada"

### Dane wyjściowe

- Status operacji (sukces/błąd)

## Powiązania

- Ekrany: [[Ekran - Zarządzanie leadami]]
