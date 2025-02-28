---
Estimation: 4
---

## Cel

Automatyczne uzupełnienie numerów cesji oraz kwot przelewów do klienta dla nowo utworzonych cesji.

## Warunki początkowe

- Istnieje utworzona cesja sprzedaży
- Cesja sprzedaży ma przypisaną aktywną instytucję bankową
- Cesja sprzedaży ma przynajmniej jedną umowę kredytową
- Funkcja jest uruchamiana po uruchomieniu funkcji: [[Funkcja - Tworzenie cesji]]

## Przebieg główny

### Dane wejściowe

- ID cesji
- Dane umów kredytowych przypisanych do cesji

### Kroki

1. Pobierz dane cesji i powiązanej instytucji bankowej
2. Oblicz sumę kwot kredytów dla cesji:
   - Zsumuj kwotaKredytu ze wszystkich powiązanych umów kredytowych
   - Zapisz wartość w polu kwotaŁączna cesji
3. Wygeneruj numer cesji:
   - Pobierz ostatniNumerCesji z instytucji bankowej
   - Zwiększ licznik o 1
   - Zapisz nową wartość w instytucji bankowej
   - Wygeneruj numer w formacie: "UWXX/MM/YYYY" gdzie:
     - XX - nowy numer cesji (uzupełniony zerami do 2 cyfr)
     - MM - aktualny miesiąc
     - YYYY - aktualny rok
   - Zapisz wygenerowany numer w polu numerCesji cesji
4. Oblicz kwotę przelewu na podstawie kwoty łącznej i okresu kredytowania:
   - Zasady obliczania:
     - Wszystkie kredyty przeliczamy do wspólnego mianownika 6 miesięcy
     - Dla kredytów z datą zamknięcia po 2020 roku:
       - Takie kredyty nie są brane pod uwagę w obliczeniach kwoty przelewu (są już rozliczone przy spłacie kredytu)
       - Jeśli cesja zawiera wyłącznie kredyty zamknięte po 2020 roku, kwota przelewu wynosi zawsze 50 zł
     - Dla pozostałych kredytów:
       - Łączymy kwoty kredytów (sumujemy wartości)
       - Kredyty powyżej 255 tysięcy złotych są uwzględniane w cesji, ale nie są wyceniane w kwocie przelewu
       - Kwotę przelewu ustalamy na podstawie tabeli:

         | Kwota łączna (w tys. zł) | Kwota przelewu (PLN) |
         |--------------------------|----------------------|
         | 4 - 8                    | 50                   |
         | 8 - 10                   | 75                   |
         | 10 - 22                  | 125                  |
         | 22 - 30                  | 175                  |
         | 30 - 40                  | 225                  |
         | 40 - 56                  | 275                  |
         | 56 - 80                  | 325                  |
         | 80 - 100                 | 375                  |
         | 100 - 140                | 425                  |
         | 140 i więcej            | 475                  |

     - Przykłady:
       - Kredyt 25 tys. zł na 8 miesięcy = przeliczamy na 6 miesięcy (25 tys. zł * 6/8 = 18,75 tys. zł) → kwota przelewu 125 zł
       - Kredyt 25 tys. zł na 16 miesięcy = przeliczamy na 6 miesięcy (25 tys. zł * 6/16 = 9,375 tys. zł) → kwota przelewu 75 zł
       - Dwa kredyty po 12,5 tys. zł na 8 miesięcy każdy = łączymy kwoty (25 tys. zł) i przeliczamy na 6 miesięcy (25 tys. zł * 6/8 = 18,75 tys. zł) → kwota przelewu 125 zł
       - Dwa kredyty po 25 tys. zł: jeden na 8 miesięcy, drugi na 16 miesięcy = przeliczamy każdy na 6 miesięcy i sumujemy (25 tys. zł ** 6/8 + 25 tys. zł * 6/16 = 18,75 tys. zł + 9,375 tys. zł = 28,125 tys. zł) → kwota przelewu 175 zł
   - Zapisz obliczoną wartość w polu kwotaPrzelewu cesji

### Dane wyjściowe

- Zaktualizowana cesja z:
  - Numerem cesji
  - Kwotą łączną
  - Kwotą przelewu
- Zaktualizowana instytucja bankowa z nowym licznikiem cesji

## Powiązania

- Schemat wyliczania kwoty przelewu (stosujemy tabelę po prawej stronie dokumentu z oznaczeniami DLA 6 M): [Link do pliku](https://docs.google.com/spreadsheets/d/1SE-UbEmL53J0khsyj4EANym9-ODMiVLv/edit?usp=sharing&ouid=112953634265814180095&rtpof=true&sd=true)
