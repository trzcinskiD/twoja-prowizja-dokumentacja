---
Estimation: 2
---

## Cel

Przypisanie wskazanej grupy leadów do wybranego doradcy wraz z walidacją uprawnień i aktualnego stanu leadów

## Warunki początkowe

- Użytkownik posiada uprawnienia Administratora lub Kierownika zespołu
- Wybrano przynajmniej jednego leada

## Przebieg główny

### Dane wejściowe

Dane pobierane z [[Element - Modal Przypisania Doradców]]:

- Lista ID wybranych leadów
- ID wybranego doradcy

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak uprawnień → "Brak uprawnień do przypisywania leadów"
   - Gdy ma uprawnienia → Przejdź dalej

2. Wykonaj przypisanie dla dostępnych leadów:
   - Aktualizuj przypisanego doradcę
   - Aktualizuj datę modyfikacji
   - Zmień status z "Nowy - zaimportowana baza leadów" na "Przydzielony - BIK". Działa tylko gdy status leada to "Nowy - zaimportowana baza leadów"
   - Zapisz zmiany w bazie

3. Przygotuj podsumowanie operacji:
   - Gdy wszystkie przypisane → "Przypisano [X] leadów do doradcy [Imię Nazwisko]"

### Dane wyjściowe

- Status operacji (sukces/błąd)
- Liczba przypisanych leadów

## Powiązania

- Ekrany: [[Ekran - Lista leadów]]
- Elementy: [[Element - Modal Przypisania Doradców]]
