---
Estimation: 2
---

## Cel

Funkcja umożliwia oznaczenie statusu przelewu (wysłany/niewysłany) dla wielu wybranych cesji jednocześnie. Dotyczy przelewu za cesję (Nie przelewu za aneks cesji)!

## Warunki początkowe

- Użytkownik musi mieć dostęp do ekranu listy cesji
- Użytkownik musi mieć uprawnienia do modyfikacji statusu przelewu
  - Role: Administrator, Kierownik Zespołu, Doradca klienta Cesje
- Musi być wybrana przynajmniej jedna cesja

## Przebieg główny

### Dane wejściowe

- Lista ID wybranych cesji
- Nowy status przelewu (wysłany/niewysłany)
- ID użytkownika wykonującego zmianę

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak uprawnień → "Brak uprawnień do zmiany statusu przelewu"
   - Gdy ma uprawnienia → Kontynuuj

2. Sprawdź czy wybrano cesje:
   - Gdy nie wybrano żadnej cesji → "Wybierz przynajmniej jedną cesję"
   - Gdy wybrano cesje → Kontynuuj

3. Dla każdej wybranej cesji:
   - Sprawdź czy zmiana statusu przelewu jest dozwolona:
     - Gdy cesja jest zamknięta → Dodaj do listy błędów "Nie można zmienić statusu przelewu dla zamkniętej cesji {numer cesji}"
     - Gdy nowy status to "wysłany":
       - Sprawdź czy jest kwota przelewu → jeśli nie, dodaj do listy błędów "Brak kwoty przelewu dla cesji {numer cesji}"
       - Sprawdź czy jest numer konta → jeśli nie, dodaj do listy błędów "Brak numeru konta dla cesji {numer cesji}"
     - Gdy status jest dozwolony:
       - Zaktualizuj status przelewu
       - Jeśli status zmieniony na "wysłany":
         - Zapisz datę wysłania przelewu
         - Zmień status cesji na "Przelew wysłany"
       - Zapisz datę modyfikacji
       - Zapisz ID użytkownika modyfikującego
       - Dodaj wpis w historii zmian cesji

4. Sprawdź wynik operacji:
   - Gdy wszystkie cesje zaktualizowane → "Zaktualizowano status przelewu dla {liczba} cesji"
   - Gdy część cesji z błędami → "Zaktualizowano status przelewu dla {liczba_sukces} cesji. Nie udało się zaktualizować {liczba_błędów} cesji: {lista_błędów}"
   - Gdy wszystkie cesje z błędami → "Nie udało się zaktualizować statusu przelewu dla żadnej cesji: {lista_błędów}"

### Dane wyjściowe

- Status operacji (sukces/błąd)
- Lista zaktualizowanych cesji
- Lista błędów (jeśli wystąpiły)

## Powiązania

- Ekrany: [[Ekran - Lista cesji]]
