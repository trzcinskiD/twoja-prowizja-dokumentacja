---
Estimation: 4
---

## Cel

Pobranie i wyświetlenie przefiltrowanej listy  instytucji bankowych z możliwością filtrowania i sortowania.

## Warunki początkowe

- Użytkownik posiada rolę Administrator

## Przebieg główny

### Dane wejściowe

Parametry filtrowania pobierane z [[Ekran - Lista Instytucji Bankowych]]:

- Fraza wyszukiwania (wyszukiwanie po nazwie, NIP, KRS) (opcjonalne)
- Parametry paginacji (numer strony, liczba rekordów na stronę)
- Parametry sortowania (kolumna, kierunek)

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy Administrator → Kontynuuj
   - W przeciwnym razie → "Brak uprawnień do przeglądania instytucji bankowych"
2. System przygotowuje zapytanie do bazy danych:
   - Dodaje warunki filtrowania jeśli są ustawione
   - Dodaje parametry sortowania (domyślnie po dacie modyfikacji malejąco)
   - Dodaje parametry stronicowania
3. Dla każdej instytucji przygotuj dane:
   - Podstawowe informacje (nazwa, NIP, REGON, KRS, adres)
   - Status aktywności
   - Dane audytowe:
     - Data utworzenia i użytkownik tworzący
     - Data modyfikacji i użytkownik modyfikujący

### Dane wyjściowe

- Lista instytucji bankowych zawierająca:
  - Nazwa instytucji
  - NIP (format XXX-XXX-XX-XX)
  - REGON
  - KRS
  - Adres
  - Status aktywności
  - Data utworzenia
  - Utworzył (imię i nazwisko)
  - Data modyfikacji
  - Zmodyfikował (imię i nazwisko)
  - Przypisany szablon
  - Całkowita liczba rekordów
  - Numer aktualnej strony
  - Liczba stron

## Powiązania

- Ekrany: [[Ekran - Lista Instytucji Bankowych]]
