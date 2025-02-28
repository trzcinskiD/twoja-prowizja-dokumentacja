---
Estimation: 2
---

## Cel

Funkcja umożliwia ustawienie daty otrzymania dokumentów cesji od klienta dla wielu wybranych cesji jednocześnie.

## Warunki początkowe

- Użytkownik musi mieć dostęp do ekranu listy cesji
- Użytkownik musi mieć uprawnienia do modyfikacji daty otrzymania dokumentów
  - Role: Administrator, Kierownik Zespołu, Doradca klienta Cesje
- Musi być wybrana przynajmniej jedna cesja

## Przebieg główny

### Dane wejściowe

- Lista ID wybranych cesji
- Nowa data otrzymania dokumentów
- ID użytkownika wykonującego zmianę

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak uprawnień → "Brak uprawnień do zmiany daty otrzymania dokumentów"
   - Gdy ma uprawnienia → Kontynuuj

2. Sprawdź czy wybrano cesje:
   - Gdy nie wybrano żadnej cesji → "Wybierz przynajmniej jedną cesję"
   - Gdy wybrano cesje → Kontynuuj

3. Waliduj wprowadzoną datę:
   - Gdy data jest z przyszłości → "Data otrzymania dokumentów nie może być z przyszłości"
   - Gdy data jest wcześniejsza niż data utworzenia cesji → "Data otrzymania dokumentów nie może być wcześniejsza niż data utworzenia cesji"
   - Gdy data jest poprawna → Kontynuuj

4. Dla każdej wybranej cesji:
   - Sprawdź czy zmiana daty jest dozwolona:
     - Gdy cesja jest zamknięta → Dodaj do listy błędów "Nie można zmienić daty dla zamkniętej cesji {numer cesji}"
     - Gdy data jest dozwolona:
       - Zaktualizuj datę otrzymania dokumentów
       - Jeśli poprzednio nie było daty otrzymania dokumentów:
         - Zmień status cesji na "Dokumenty otrzymane"
       - Zapisz datę modyfikacji
       - Zapisz ID użytkownika modyfikującego
       - Dodaj wpis w historii zmian cesji

5. Sprawdź wynik operacji:
   - Gdy wszystkie cesje zaktualizowane → "Zaktualizowano datę otrzymania dokumentów dla {liczba} cesji"
   - Gdy część cesji z błędami → "Zaktualizowano datę otrzymania dokumentów dla {liczba_sukces} cesji. Nie udało się zaktualizować {liczba_błędów} cesji: {lista_błędów}"
   - Gdy wszystkie cesje z błędami → "Nie udało się zaktualizować daty otrzymania dokumentów dla żadnej cesji: {lista_błędów}"

### Dane wyjściowe

- Status operacji (sukces/błąd)
- Lista zaktualizowanych cesji
- Lista błędów (jeśli wystąpiły)

## Powiązania

- Ekrany: [[Ekran - Lista cesji]]
