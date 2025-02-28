---
Estimation: 10
---

## Cel

Import paczki leadów do systemu wraz z walidacją danych z uwzględnieniem specyfiki dużych zbiorów danych (do 30 000 rekordów)

## Warunki początkowe

- Użytkownik posiada uprawnienia Administratora, Szefa działu lub Kierownika zespołu
- Plik CSV nie przekracza 10MB
- Format pliku CSV zawiera kolumny:
  - imię (wymagane)
  - nazwisko (wymagane)
  - numer telefonu (wymagane, format: "+48XXXXXXXXX" lub "XXXXXXXXX")
  - województwo
  - kod pocztowy
  - miejscowość
  - ulica
  - nr budynku
  - nr mieszkania

## Przebieg główny

### Dane wejściowe

Dane pobierane z [[Element - Modal Importu paczki leadów]]:

- Plik CSV
- Pochodzenie bazy
- Spółka
- Data przekazania
- Data przedawnienia
- Uwagi (opcjonalne)

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak uprawnień → "Brak uprawnień do importu leadów"
   - Gdy ma uprawnienia → Przejdź dalej
2. Sprawdź format pliku CSV i dane z formularza (tylko wymagane kolumny pliku CSV):
   - Gdy niepoprawny format → "Niepoprawny format pliku. Wymagany plik CSV z określonymi kolumnami"
   - Gdy plik za duży → "Plik przekracza maksymalny dozwolony rozmiar 10MB"
   - Gdy poprawny → Przejdź dalej

3. Rozpocznij przetwarzanie w paczkach po 1000 rekordów:
   - Dla każdego rekordu sprawdź:
     - Gdy brak wymaganych pól → Zapisz błąd do logów
     - Gdy niepoprawny format telefonu → Zapisz błąd do logów
     - Gdy poprawne dane → Zapisz do bazy

4. Sprawdź duplikaty numerów telefonu:
   - Gdy znaleziono duplikat → Oznacz jako potencjalny duplikat
   - W pozostałych przypadkach → Kontynuuj
5. Utwórz metadane paczki:
   - Zapisz nazwę pliku
   - Zapisz rozmiar pliku
   - Zapisz ilość zaimportowanych leadów
   - Zapisz ilość błędów
   - Zapisz parametry z formularza
   - Gdy wystąpiły błędy → Wygeneruj plik CSV z błędnymi rekordami zawierający:
     - Oryginalne dane z wiersza
     - Kolumnę "Powód błędu"
     - Kolumnę "Sugerowana poprawka" (jeśli możliwe do określenia)

6. Sprawdź status importu:
   - Gdy wystąpiły błędy →
     - Zapisz logi błędów
     - Udostępnij plik CSV z błędami do pobrania
     - "Wystąpił błąd podczas importu. Zaimportowano [X] z [Y] rekordów. Wykryto [Z] błędnych rekordów. Możesz pobrać plik z listą błędów i sugerowanymi poprawkami"
   - Gdy import zakończony sukcesem →
     - Gdy są duplikaty → "Import zakończony. Zaimportowano [X] leadów. Znaleziono [Y] potencjalnych duplikatów"
     - W pozostałych przypadkach → "Zaimportowano pomyślnie [X] leadów. Utworzono paczkę o ID: [ID]"

### Dane wyjściowe

- ID utworzonej paczki leadów
- Status importu (sukces/błąd)
- Liczba zaimportowanych rekordów
- Liczba błędów
- Plik CSV z błędnymi rekordami (jeśli wystąpiły błędy) zawierający:
  - Wszystkie kolumny z oryginalnego pliku
  - {Powód błędu} - opis problemu z rekordem
  - {Sugerowana poprawka} - propozycja korekty (opcjonalnie)

## Powiązania

- Ekrany: [[Ekran - Lista leadów]]
- Elementy: [[Element - Modal Importu paczki leadów]]
