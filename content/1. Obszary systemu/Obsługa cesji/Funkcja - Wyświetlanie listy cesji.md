---
Estimation: 2
---

## Cel

Pobranie i wyświetlenie przefiltrowanej listy cesji z uwzględnieniem uprawnień użytkownika i zastosowanych filtrów zdefiniowanych w [[Ekran - Lista cesji]]

## Warunki początkowe

- Użytkownik zalogowany w systemie
- Użytkownik posiada odpowiednie uprawnienia:
  - Administrator
  - Kierownik Zespołu
  - Szef Działu
  - Doradca klienta Cesje (tylko cesje przypisane do siebie)

## Przebieg główny

### Dane wejściowe

Parametry filtrowania pobierane z [[Ekran - Lista cesji]]:

- Wyszukiwarka (imię, nazwisko, PESEL, telefon, email, numer cesji)
- Aktywne filtry
- Parametry paginacji (numer strony, liczba rekordów na stronę)
- Parametry sortowania (kolumna, kierunek)

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy Administrator, Kierownik Zespołu, Szef Działu → Pobierz wszystkie cesje
   - Gdy Doradca klienta Cesje → Pobierz tylko przypisane cesje
   - W przeciwnym razie → "Brak uprawnień do przeglądania cesji"

2. Zastosuj filtry:
   - Zastosuj wszystkie aktywne filtry wybrane przez użytkownika
   - Dla filtra "Czy przelew może zostać wysłany" sprawdź warunki:
     - Istnieje numer cesji
     - Istnieje kwota przelewu
     - Istnieje numer konta klienta
     - Przelew nie został jeszcze wysłany

3. Zastosuj sortowanie:
   - Sortuj według wybranej kolumny i kierunku
   - Domyślnie sortuj po dacie utworzenia malejąco

4. Zastosuj paginację:
   - Oblicz całkowitą liczbę rekordów
   - Pobierz odpowiednią stronę wyników

5. Dla każdej cesji przygotuj dane:
   - Podstawowe informacje z cesji
   - Dane klienta z powiązanego leada
   - Oblicz ilość dni od wysłania cesji do klienta
   - Sprawdź warunki możliwości wysłania przelewu

### Dane wyjściowe

- Lista cesji:
- Całkowita liczba rekordów
- Numer aktualnej strony
- Liczba stron

## Powiązania

- Ekrany: [[Ekran - Lista cesji]]
