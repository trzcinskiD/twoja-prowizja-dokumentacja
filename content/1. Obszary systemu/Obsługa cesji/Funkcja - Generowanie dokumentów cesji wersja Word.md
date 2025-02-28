---
Estimation: 12
---

## Cel

Funkcja umożliwia wygenerowanie dokumentów cesji w formacie Word dla jednej lub wielu cesji na podstawie szablonu przypisanego do danej instytucji bankowej.

## Warunki początkowe

- Użytkownik musi mieć dostęp do ekranu szczegółów cesji lub listy cesji
- Dla każdej wybranej cesji musi być przypisana instytucja bankowa
- Każda instytucja bankowa musi mieć przypisany szablon dokumentu cesji

## Przebieg główny

### Dane wejściowe

- Z ekranu szczegółów cesji:
  - Pojedyncza wybrana cesja
- Z ekranu listy cesji:
  - Lista zaznaczonych cesji do wygenerowania dokumentów

### Kroki

1. System sprawdza czy dla wszystkich wybranych cesji istnieją szablony dokumentów:
   - Gdy brak szablonu dla którejkolwiek cesji → wyświetl komunikat "Brak szablonu dokumentu dla instytucji [nazwa instytucji]"
   - Gdy wszystkie szablony istnieją → przejdź do generowania

2. Dla każdej wybranej cesji:
   - Pobierz szablon dokumentu przypisany do instytucji bankowej
   - Wygeneruj dokument Word na podstawie szablonu
   - Zaktualizuj datę ostatniego wygenerowania dokumentu cesji

3. Przygotuj strukturę folderów:
   - Utwórz folder bądź foldery główne z nazwą: "[Imię i nazwisko klienta] [PESEL]"
   - W folderach nazwij pliki według wzoru: "[Imię i nazwisko klienta] [skrócona nazwa banku]"
     - Skrócona nazwa banku to pełna nazwa do pierwszego przecinka

4. Spakuj wszystkie wygenerowane dokumenty do archiwum ZIP

5. Udostępnij archiwum ZIP do pobrania

### Dane wyjściowe

- Plik ZIP zawierający:
  - Struktura folderów z dokumentami cesji w formacie Word
- Zaktualizowana data ostatniego wygenerowania dokumentu w danych cesji

## Powiązania

- Ekrany:
  - [[Ekran - Szczegóły Cesji]]
  - [[Ekran - Lista cesji]]
- Szablony word umów cesji: [Folder z szablonami umów cesji](https://drive.google.com/drive/folders/1BR07SF9RjMccdv-THArMAuf3dL3VoQbJ?usp=drive_link)
