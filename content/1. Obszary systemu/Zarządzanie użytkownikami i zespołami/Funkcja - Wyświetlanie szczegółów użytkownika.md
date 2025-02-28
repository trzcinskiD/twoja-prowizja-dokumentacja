---
Estimation: 3
---

## Cel

Pobranie i wyświetlenie szczegółowych danych użytkownika oraz listy dostępnych zespołów zgodnie z definicją w [[Ekran - Szczegóły użytkownika]]

## Warunki początkowe

- Użytkownik zalogowany w systemie
- Użytkownik posiada rolę Administrator
- Przekazano ID użytkownika (w przypadku edycji) lub tryb tworzenia nowego użytkownika

## Przebieg główny

### Dane wejściowe

- ID użytkownika (opcjonalne, tylko w trybie edycji)
- Tryb wyświetlania (edycja/tworzenie)

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak roli Administrator → "Brak uprawnień do przeglądania szczegółów użytkownika"
   - Gdy ma uprawnienia → Przejdź dalej

2. Pobierz listę wszystkich zespołów:
   - Pobierz dane zespołów:
     - ID zespołu
     - Nazwa zespołu
     - Opis zespołu
   - Sortuj zespoły alfabetycznie po nazwie

3. W trybie edycji:
   - Pobierz dane użytkownika zgodnie z sekcjami zdefiniowanymi w [[Ekran - Szczegóły użytkownika]]:
     - Dane podstawowe
     - Uprawnienia i role
     - Przypisanie do zespołów (z oznaczeniem aktualnie przypisanych zespołów)
     - Statystyki użytkownika
     - Dane audytowe
   - Gdy nie znaleziono użytkownika → "Użytkownik nie istnieje"

4. W trybie tworzenia:
   - Przygotuj pusty formularz zgodnie ze strukturą z [[Ekran - Szczegóły użytkownika]]
   - Ustaw domyślne wartości:
     - Status: Aktywny
     - Data utworzenia: aktualna data
     - Utworzone przez: aktualny użytkownik
   - Wyświetl listę dostępnych zespołów bez zaznaczonych przypisań

### Dane wyjściowe

- Lista wszystkich zespołów:
  - ID zespołu
  - Nazwa zespołu
  - Opis zespołu
- Dane użytkownika zgodnie ze strukturą zdefiniowaną w [[Ekran - Szczegóły użytkownika]]
- W trybie edycji dodatkowo:
  - Statystyki użytkownika
  - Informacje audytowe
  - Status konta
  - Lista przypisanych zespołów

## Powiązania

- Ekrany: [[Ekran - Szczegóły użytkownika]]
- Elementy: [[Element - Modal zarządzania zespołami]]
- Funkcje: [[Funkcja - Zarządzanie zespołami]]
