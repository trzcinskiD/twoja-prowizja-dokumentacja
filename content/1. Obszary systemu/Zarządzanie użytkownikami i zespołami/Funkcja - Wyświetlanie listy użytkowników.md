---
Estimation: 3
---

## Cel

Pobranie i wyświetlenie przefiltrowanej listy użytkowników z uwzględnieniem uprawnień i filtrów zdefiniowanych w [[Ekran - Lista użytkowników]]

## Warunki początkowe

- Użytkownik zalogowany w systemie
- Użytkownik posiada rolę Administrator

## Przebieg główny

### Dane wejściowe

Parametry filtrowania pobierane z [[Ekran - Lista użytkowników]]:

- Wszystkie aktywne filtry zdefiniowane w sekcji filtrów ekranu
- Parametry paginacji (numer strony, liczba rekordów na stronę)
- Parametry sortowania (kolumna, kierunek)

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy brak roli Administrator → "Brak uprawnień do przeglądania listy użytkowników"
   - Gdy ma uprawnienia → Przejdź dalej

2. Zastosuj filtry zgodnie z sekcją filtrów zdefiniowaną w [[Ekran - Lista użytkowników]]:
   - Zastosuj wszystkie aktywne filtry wybrane przez użytkownika

3. Zastosuj sortowanie:
   - Sortuj według wybranej kolumny i kierunku zgodnie z dostępnymi opcjami sortowania zdefiniowanymi w ekranie
   - Domyślnie sortuj po dacie utworzenia konta malejąco

4. Zastosuj paginację:
   - Oblicz całkowitą liczbę rekordów
   - Pobierz odpowiednią stronę wyników zgodnie z wybraną liczbą rekordów na stronę (20/50/100)

5. Dla każdego użytkownika przygotuj dane zgodnie z kolumnami zdefiniowanymi w tabeli użytkowników w [[Ekran - Lista użytkowników]]

### Dane wyjściowe

- Lista użytkowników zawierająca:
  - Dane użytkowników zgodnie z kolumnami zdefiniowanymi w tabeli użytkowników
  - Liczniki:
    - Całkowita liczba użytkowników
    - Liczba aktywnych użytkowników
  - Informacje o paginacji:
    - Całkowita liczba rekordów
    - Liczba stron
    - Aktualna strona

## Powiązania

- Ekrany: [[Ekran - Lista użytkowników]]
