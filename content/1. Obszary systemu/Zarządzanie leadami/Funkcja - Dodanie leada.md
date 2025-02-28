---
Estimation: 4
---

## Cel

Ręczne dodanie nowego leada do systemu. Funkcja uruchamiana po kliknięciu przycisku "Zapisz zmiany" przy tworzeniu nowego leada.

## Warunki początkowe

- Użytkownik posiada uprawnienia Administratora lub Kierownika zespołu

## Przebieg główny

### Dane wejściowe

Dane pobierane z [[Ekran - Szczegóły leada]]:

- Dane podstawowe (imię, nazwisko, PESEL)
- Dane kontaktowe (telefon, email)
- Dane adresowe
- Przypisany doradca (opcjonalnie)
- Status leada
- Dane przesyłki (opcjonalnie)

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak uprawnień → "Brak uprawnień do dodawania leadów"
   - Gdy ma uprawnienia → Przejdź dalej

2. Waliduj dane:
   - Sprawdź wszystkie walidacje zdefiniowane dla pól na [[Ekran - Szczegóły leada]]
   - Gdy którakolwiek walidacja nie powiedzie się:
     - Wyświetl komunikaty błędów przy odpowiednich polach
     - Nie zapisuj żadnych zmian
     - Pozostań w trybie edycji
   - Gdy wszystkie walidacje poprawne → Przejdź dalej

3. Utwórz nowego leada:
   - Zapisz dane podstawowe
   - Zapisz dane kontaktowe
   - Zapisz dane adresowe
   - Ustaw status
   - Przypisz doradcę (jeśli wybrano)
   - Ustaw daty audytowe
   - Jeśli wprowadzono dane przesyłki, utwórz powiązaną przesyłkę

4. Wyświetl komunikat potwierdzający dodanie leada:
   - Gdy sukces → "Lead został pomyślnie dodany"
   - Gdy błąd → "Wystąpił błąd podczas dodawania leada"

5. Odśwież dane na ekranie

### Dane wyjściowe

- ID utworzonego leada
- Status operacji (sukces/błąd)

## Powiązania

- Ekrany: [[Ekran - Szczegóły leada]]
