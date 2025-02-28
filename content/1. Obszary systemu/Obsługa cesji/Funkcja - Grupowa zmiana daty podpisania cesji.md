---
Estimation: 2
---

## Cel

Funkcja umożliwia ustawienie daty podpisania cesji przez klienta dla wielu wybranych cesji jednocześnie. Automatycznie ustawia również datę wysłania cesji do banku (+7 dni od daty podpisania).

## Warunki początkowe

- Użytkownik musi mieć dostęp do ekranu listy cesji
- Użytkownik musi mieć uprawnienia do modyfikacji daty podpisania cesji
  - Role: Administrator, Kierownik Zespołu, Doradca klienta Cesje
- Musi być wybrana przynajmniej jedna cesja

## Przebieg główny

### Dane wejściowe

- Lista ID wybranych cesji
- Nowa data podpisania cesji
- ID użytkownika wykonującego zmianę

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak uprawnień → "Brak uprawnień do zmiany daty podpisania cesji"
   - Gdy ma uprawnienia → Kontynuuj

2. Sprawdź czy wybrano cesje:
   - Gdy nie wybrano żadnej cesji → "Wybierz przynajmniej jedną cesję"
   - Gdy wybrano cesje → Kontynuuj

3. Waliduj wprowadzoną datę:
   - Gdy data jest z przyszłości → "Data podpisania cesji nie może być z przyszłości"
   - Gdy data jest wcześniejsza niż data otrzymania dokumentów → "Data podpisania cesji nie może być wcześniejsza niż data otrzymania dokumentów"
   - Gdy data jest poprawna → Kontynuuj

4. Dla każdej wybranej cesji:
   - Sprawdź czy zmiana daty jest dozwolona:
     - Gdy cesja jest zamknięta → Dodaj do listy błędów "Nie można zmienić daty dla zamkniętej cesji {numer cesji}"
     - Gdy data jest dozwolona:
       - Zaktualizuj datę podpisania cesji
       - Oblicz datę wysłania do banku (data podpisania + 7 dni)
       - Jeśli poprzednio nie było daty podpisania:
         - Zmień status cesji na "Klient podpisał cesję"
       - Zapisz datę wysłania do banku
       - Zapisz datę modyfikacji
       - Zapisz ID użytkownika modyfikującego
       - Dodaj wpis w historii zmian cesji

5. Sprawdź wynik operacji:
   - Gdy wszystkie cesje zaktualizowane → "Zaktualizowano datę podpisania cesji dla {liczba} cesji"
   - Gdy część cesji z błędami → "Zaktualizowano datę podpisania cesji dla {liczba_sukces} cesji. Nie udało się zaktualizować {liczba_błędów} cesji: {lista_błędów}"
   - Gdy wszystkie cesje z błędami → "Nie udało się zaktualizować daty podpisania cesji dla żadnej cesji: {lista_błędów}"

### Dane wyjściowe

- Status operacji (sukces/błąd)
- Lista zaktualizowanych cesji
- Lista błędów (jeśli wystąpiły)

## Powiązania

- Ekrany: [[Ekran - Lista cesji]]
