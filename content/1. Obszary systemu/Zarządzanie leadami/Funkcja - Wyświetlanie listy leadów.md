---
Estimation: 5
---

## Cel

Pobranie i wyświetlenie przefiltrowanej listy leadów z uwzględnieniem uprawnień użytkownika i zastosowanych filtrów zdefiniowanych w [[Ekran - Lista leadów]]

## Warunki początkowe

- Użytkownik zalogowany w systemie
- Użytkownik posiada uprawnienia do przeglądania leadów:
  - Administrator
  - Kierownik zespołu
  - Szef działu
  - Doradca klienta BIK do przypisanych do sebie leadów

## Przebieg główny

### Dane wejściowe

Parametry filtrowania pobierane z [[Ekran - Lista leadów]]:

- Wszystkie aktywne filtry zdefiniowane w sekcji filtrów ekranu
- Parametry paginacji (numer strony, liczba rekordów na stronę)
- Parametry sortowania (kolumna, kierunek)

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy Kierownik zespołu, Administrator, Szef działu → Pobierz wszystkie leady
   - Gdy Doradca BIK → Pobierz tylko przypisane leady
   - W przeciwnym razie → "Brak uprawnień do przeglądania leadów"

2. Zastosuj filtry zgodnie z sekcją filtrów zdefiniowaną w [[Ekran - Lista leadów]]:
   - Zastosuj wszystkie aktywne filtry wybrane przez użytkownika
   - Uwzględnij formatowanie warunkowe dla leadów wymagających kontaktu zgodnie z regułami zdefiniowanymi w ekranie

3. Zastosuj sortowanie:
   - Sortuj według wybranej kolumny i kierunku zgodnie z dostępnymi opcjami sortowania zdefiniowanymi w ekranie
   - Domyślnie sortuj po dacie ostatniej modyfikacji malejąco

4. Zastosuj paginację:
   - Oblicz całkowitą liczbę rekordów
   - Pobierz odpowiednią stronę wyników zgodnie z wybraną liczbą rekordów na stronę (50/100/200)

5. Dla każdego leada przygotuj dane zgodnie z kolumnami zdefiniowanymi w tabeli leadów w [[Ekran - Lista leadów]]

### Dane wyjściowe

- Lista leadów zawierająca:
  - Dane leadów zgodnie z kolumnami zdefiniowanymi w tabeli leadów
  - Całkowita liczba rekordów
  - Numer aktualnej strony
  - Liczba stron
  - Informacje o formatowaniu warunkowym wierszy

## Powiązania

- Ekrany: [[Ekran - Lista leadów]]
