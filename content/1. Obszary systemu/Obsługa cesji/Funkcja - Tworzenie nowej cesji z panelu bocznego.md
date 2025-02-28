---
Estimation: 2
---

## Cel

Funkcja umożliwia tworzenie nowej cesji poprzez panel boczny dostępny na ekranie listy cesji. Ułatwia szybkie dodawanie cesji bez konieczności przechodzenia do osobnej strony.

## Warunki początkowe

- Użytkownik musi mieć dostęp do ekranu listy cesji
- Użytkownik musi posiadać uprawnienia do tworzenia nowych cesji
  - Role: Administrator, Kierownik Zespołu, Doradca klienta Cesje

## Przebieg główny

### Dane wejściowe

- Lead
- Instytucja bankowa
- ID użytkownika tworzącego cesję

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak uprawnień → "Brak uprawnień do tworzenia nowej cesji"
   - Gdy ma uprawnienia → Kontynuuj

2. Waliduj wprowadzone dane:
   - Gdy nie wybrano leada → "Wybierz klienta"
   - Gdy nie wybrano instytucji bankowej → "Wybierz instytucję bankową"

3. Utwórz nową cesję:
   - Zapisz podstawowe dane cesji (lead, instytucja bankowa)
   - Ustaw status na "Nowa"
   - Zapisz datę utworzenia i ID użytkownika
   - Dodaj wpis w historii zmian

4. Zakończ operację:
   - Przekieruj do szczegółów utworzonej cesji
   - Wyświetl komunikat "Nowa cesja została pomyślnie utworzona"

### Dane wyjściowe

- Status operacji (sukces/błąd)
- Nowo utworzona cesja
- Komunikaty o błędach (jeśli wystąpiły)

## Powiązania

- Ekrany: [[Ekran - Lista cesji]]
