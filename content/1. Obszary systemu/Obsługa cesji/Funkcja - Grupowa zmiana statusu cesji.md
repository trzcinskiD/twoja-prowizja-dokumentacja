---
Estimation: 2
---

## Cel

Funkcja umożliwia zmianę statusu dla wielu wybranych cesji jednocześnie.

## Warunki początkowe

- Użytkownik musi mieć dostęp do ekranu listy cesji
- Użytkownik musi mieć uprawnienia do modyfikacji statusu cesji
  - Role: Administrator, Kierownik Zespołu, Doradca klienta Cesje
- Musi być wybrana przynajmniej jedna cesja

## Przebieg główny

### Dane wejściowe

- Lista ID wybranych cesji
- Nowy status do ustawienia
- ID użytkownika wykonującego zmianę

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak uprawnień → "Brak uprawnień do zmiany statusu cesji"
   - Gdy ma uprawnienia → Kontynuuj

2. Sprawdź czy wybrano cesje:
   - Gdy nie wybrano żadnej cesji → "Wybierz przynajmniej jedną cesję"
   - Gdy wybrano cesje → Kontynuuj

3. Dla każdej wybranej cesji:
   - Sprawdź czy zmiana statusu jest dozwolona:
     - Gdy obecny status jest "Zamknięta" → Dodaj do listy błędów "Nie można zmienić statusu zamkniętej cesji {numer cesji}"
     - Gdy nowy status jest "Klient podpisał cesję" a brak daty podpisania → Dodaj do listy błędów "Brak daty podpisania dla cesji {numer cesji}"
     - Gdy nowy status jest "Wysłano do banku" a brak daty wysłania → Dodaj do listy błędów "Brak daty wysłania do banku dla cesji {numer cesji}"
     - Gdy nowy status jest "Otrzymano odpowiedź z banku" a brak daty otrzymania odpowiedzi → Dodaj do listy błędów "Brak daty otrzymania odpowiedzi z banku dla cesji {numer cesji}"
     - Gdy nowy status jest "Przelew wysłany" a brak kwoty przelewu lub numeru konta → Dodaj do listy błędów "Brak danych do przelewu dla cesji {numer cesji}"
     - Gdy status jest dozwolony:
       - Zaktualizuj status cesji
       - Zapisz datę modyfikacji
       - Zapisz ID użytkownika modyfikującego
       - Dodaj wpis w historii zmian cesji

4. Sprawdź wynik operacji:
   - Gdy wszystkie cesje zaktualizowane → "Zaktualizowano status {liczba} cesji"
   - Gdy część cesji z błędami → "Zaktualizowano status {liczba_sukces} cesji. Nie udało się zaktualizować {liczba_błędów} cesji: {lista_błędów}"
   - Gdy wszystkie cesje z błędami → "Nie udało się zaktualizować statusu żadnej cesji: {lista_błędów}"

### Dane wyjściowe

- Status operacji (sukces/błąd)
- Lista zaktualizowanych cesji
- Lista błędów (jeśli wystąpiły)

## Powiązania

- Ekrany: [[Ekran - Lista cesji]]
