---
Estimation: 4
---

## Cel

Funkcja umożliwia wygenerowanie pliku Excel zawierającego dane cesji dla jednej lub wielu cesji. Plik ten służy jako źródło danych do późniejszego wygenerowania dokumentów Word poza systemem.

## Warunki początkowe

- Użytkownik musi mieć dostęp do ekranu szczegółów cesji lub listy cesji
- Dla każdej wybranej cesji musi być przypisana instytucja bankowa

## Przebieg główny

### Dane wejściowe

- Z ekranu szczegółów cesji:
  - Pojedyncza wybrana cesja
- Z ekranu listy cesji:
  - Lista zaznaczonych cesji do wygenerowania danych

### Kroki

1. System sprawdza czy wybrano przynajmniej jedną cesję:
   - Gdy nie wybrano żadnej cesji → wyświetl komunikat "Wybierz przynajmniej jedną cesję"
   - Gdy wybrano cesje → przejdź do generowania

2. Wygeneruj plik Excel na podstawie wspólnego szablonu

3. Zaktualizuj datę ostatniego wygenerowania dokumentu cesji dla każdej wybranej cesji

4. Udostępnij plik Excel do pobrania

### Dane wyjściowe

- Plik Excel zawierający dane wszystkich wybranych cesji
- Zaktualizowana data ostatniego wygenerowania dokumentu w danych cesji

## Powiązania

- Ekrany:
  - [[Ekran - Szczegóły Cesji]]
  - [[Ekran - Lista cesji]]
- Szablon Excel do generowania danych: [Szablon Excel do generowania danych](https://drive.google.com/drive/folders/1BSBUsiPYdSe4oOX3EvPqAUUSxMHHcxUL?usp=drive_link)
