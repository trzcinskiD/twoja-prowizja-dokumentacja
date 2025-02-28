---
Estimation: 1
---

## Cel

Umożliwienie usunięcia cesji w statusie "Nowa" wraz z powiązanymi danymi.

## Warunki początkowe

- Użytkownik ma uprawnienia administratora lub kierownika zespołu
- Cesja istnieje w systemie

## Przebieg główny

### Dane wejściowe

- ID cesji do usunięcia

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak uprawnień → wyświetl "Brak uprawnień do usuwania cesji"
   - Gdy ma uprawnienia → kontynuuj

2. Wyświetl potwierdzenie:
   "Czy na pewno chcesz usunąć tę cesję? Tej operacji nie można cofnąć."
   - Gdy anulowano → przerwij operację
   - Gdy potwierdzono → kontynuuj

3. Usuń powiązane dane w kolejności:
   - Komentarze
   - Umowy kredytowe
   - Dane finansowe
   - Podstawowe dane cesji

4. Zapisz w logu systemowym informację o usunięciu:
   - ID cesji
   - Data usunięcia
   - Użytkownik usuwający

### Dane wyjściowe

- Komunikat potwierdzający usunięcie
- Przekierowanie do [[Ekran - Lista cesji]]
