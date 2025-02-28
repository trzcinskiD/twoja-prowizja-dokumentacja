---
Estimation: 10
---

## Cel

Generowanie dokumentu przekazu pocztowego zgodnie ze wzorem Poczty Polskiej dla wybranych cesji.

## Warunki początkowe

- Użytkownik posiada uprawnienia do eksportu dokumentów:
  - Użytkownik ma rolę administratora, kierownika zespołu lub szefa działu
- Wybrano przynajmniej jedną cesję lub aneks cesji z oznaczeniem "Przekaz pocztowy"
- Każda wybrana cesja/aneks ma uzupełnioną kwotę przelewu
- Każda wybrana cesja ma uzupełniony numer cesji

## Przebieg główny

### Dane wejściowe

- Lista ID wybranych cesji i aneksów do cesji
- Szablon dokumentu przekazu pocztowego dostarczony przez klienta

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak uprawnień → "Brak uprawnień do generowania przekazów pocztowych"
   - Gdy ma uprawnienia → Kontynuuj

2. Waliduj dane wejściowe dla każdej cesji/aneksu:
   - Sprawdź czy jest oznaczenie "Przekaz pocztowy"
   - Sprawdź czy jest uzupełniona kwota przelewu
   - Sprawdź czy jest uzupełniony numer cesji (dla cesji)
   - Gdy brak wymaganych danych → Dodaj do listy błędów

3. Grupuj przelewy:
   - Dla przelewów cesji:
     - Grupuj maksymalnie po 3 cesje
     - Tytuł = połączone numery cesji
   - Dla przelewów aneksów:
     - Nie grupuj (każdy aneks osobno)
     - Tytuł = numer aneksu

4. Generuj dokument przekazu:
   - Dla każdej grupy/pojedynczego przelewu:
     - Wypełnij szablon danymi
     - Dodaj wiersz do finalnego dokumentu

5. Sprawdź status operacji:
   - Gdy sukces → "Wygenerowano dokument przekazu pocztowego"
   - Gdy błędy → "Wystąpiły błędy podczas generowania: {lista_błędów}"

### Dane wyjściowe

- Status operacji (sukces/błąd)
- Wygenerowany dokument przekazu pocztowego w formacie zgodnym z wymaganiami Poczty Polskiej
- Lista błędów (jeśli wystąpiły)

## Powiązania

- Ekrany: [[Ekran - Lista Cesji]]
- Szablon dokumentu przekazu pocztowego: %%Do dostarczenia przez klienta%%
