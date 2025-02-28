---
Estimation: 4
---

## Cel

Umożliwienie tworzenia, edycji i usuwania zespołów w systemie poprzez [[Element - Modal zarządzania zespołami]]

## Warunki początkowe

- Użytkownik zalogowany w systemie
- Użytkownik posiada rolę Administrator

## Przebieg główny

### Dane wejściowe

Dane z [[Element - Modal zarządzania zespołami]]:

- Tryb operacji (dodawanie/edycja/usuwanie)
- Dla dodawania/edycji:
  - Nazwa zespołu (text)
  - Opis zespołu (textarea, opcjonalne)
- Dla usuwania:
  - ID zespołu

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak roli Administrator → "Brak uprawnień do zarządzania zespołami"
   - Gdy ma uprawnienia → Przejdź dalej

2. W trybie dodawania zespołu:
   - Sprawdź walidacje nazwy zespołu:
     - Gdy nazwa pusta → "Pole jest wymagane"
     - Gdy nazwa krótsza niż 3 znaki → "Nazwa musi mieć minimum 3 znaki"
     - Gdy nazwa już istnieje → "Zespół o takiej nazwie już istnieje"
   - Gdy walidacja pozytywna:
     - Utwórz nowy zespół
     - Zapisz informacje audytowe (data utworzenia, utworzone przez)
     - Zwróć → "Zespół został utworzony"

3. W trybie edycji zespołu:
   - Sprawdź czy zespół istnieje:
     - Gdy nie istnieje → "Zespół nie istnieje"
   - Sprawdź walidacje nazwy zespołu (jak w kroku 2)
   - Gdy walidacja pozytywna:
     - Zaktualizuj dane zespołu
     - Zapisz informacje audytowe (data modyfikacji, zmodyfikowane przez)
     - Zwróć → "Zespół został zaktualizowany"

4. W trybie usuwania zespołu:
   - Sprawdź czy zespół istnieje:
     - Gdy nie istnieje → "Zespół nie istnieje"
   - Sprawdź czy zespół ma przypisanych użytkowników:
     - Gdy ma przypisanych użytkowników → "Nie można usunąć zespołu z przypisanymi użytkownikami"
     - Gdy nie ma przypisanych użytkowników:
       - Usuń zespół
       - Zapisz informacje audytowe
       - Zwróć → "Zespół został usunięty"

### Dane wyjściowe

- Status operacji (sukces/błąd)
- Komunikat potwierdzający lub informujący o błędzie
- W przypadku sukcesu:
  - ID zespołu (dla dodawania)
  - Zaktualizowane dane zespołu (dla edycji)

## Powiązania

- Elementy: [[Element - Modal zarządzania zespołami]]
- Funkcje: [[Funkcja - Wyświetlanie szczegółów użytkownika]]
