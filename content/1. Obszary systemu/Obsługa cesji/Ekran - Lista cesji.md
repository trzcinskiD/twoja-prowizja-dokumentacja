---
Estimation: 10
---

## Cel ekranu

- Ekran służy do zarządzania cesjami
- Dostępny dla użytkowników z rolą Doradca klienta Cesje, Kierownik Zespołu, Szef Działu i Administrator
- Doradca klienta Cesje widzi tylko cesje przypisane do niego

## Struktura ekranu

### Sekcja nagłówkowa

- Przyciski:
  - {Dodaj cesję} -> otwiera formularz nowej cesji na prawym pasku bocznym (sliding panel)
- Wskaźniki:
  - {Łączna kwota cesji}: suma kwot wszystkich wyświetlanych cesji
  - {Ilość cesji}: liczba wszystkich wyświetlanych cesji
  - {Eksportuj przefiltrowane cesje do Excel} -> generuje plik Excel z danymi cesji dla cesji, które spełniając warunki ustalonych filtrów. Pobieramy cesje ze wszystkich stron tabeli. Przycisk widoczny tylko dla administratora i szefa działu.
  - {Importuj cesje z Excel} -> otwiera modal z formularzem importu cesji z pliku Excel. Widoczny tylko dla administratora.

### Sekcja prawego paska bocznego (sliding panel, widoczna w obu widokach)

- Formularz nowej cesji:
  - Pola:
    - {Lead}: *select* -> wybór leada z listy (wyszukiwanie po imieniu, nazwisku, PESEL, telefon)
    - {Instytucja bankowa}: *select* -> wybór instytucji bankowej
  - Przyciski:
    - {Utwórz} -> tworzy nową cesję i przekierowuje do jej szczegółów
    - {Anuluj} -> zamyka panel boczny

### Sekcja filtrów i wyszukiwania

- Pozwala na zawężenie wyświetlanych cesji:
  - {Wyszukiwarka}: *imię, nazwisko, PESEL, telefon, email, numer cesji* -> wyszukuje po danych klienta z leada oraz numerze cesji
  - {Status}: *multiselect* -> filtruje po statusie cesji
  - {Instytucja bankowa}: *multiselect* -> filtruje po przypisanej instytucji bankowej
  - {Doradca}: *multiselect* -> filtruje po przypisanym doradcy (dostępne tylko dla Kierownika Zespołu)
  - {Data wykonania przelewu}: *daterange* -> filtruje cesje po dacie wykonania przelewu
  - {Data wysłania cesji do klienta}: *daterange* -> filtruje cesje po dacie wysłania cesji do klienta
  - {Data otrzymania dokumentu cesji od klienta}: *daterange* -> filtruje cesje po dacie otrzymania dokumentu cesji od klienta
  - {Data podpisania cesji}: *daterange* -> filtruje cesje po dacie podpisania cesji przez klienta
  - {Data wysłania cesji do banku/instytucji}: *daterange* -> filtruje cesje po dacie wysłania cesji do banku/instytucji
  - {Czy przelew wysłany do klienta?}: *switch* -> filtruje cesje po statusie wysłania przelewu do klienta
  - {Czy przelew może zostać wysłany?}: *switch* -> filtruje cesje, które spełniają warunki wysłania przelewu (posiadają numer cesji, kwotę przelewu i numer konta klienta oraz czy przelew nie został już wysłany)
  - {Kwota przelewu}: *number* -> filtruje cesje po kwocie przelewu
  - {Cesja notarialna?}: *switch* -> filtruje cesje po statusie cesji notarialnej

### Sekcja modyfikowania kolumn

- Sekcja zawiera zestaw przycisków do modyfikowania kolumn w tabeli cesji
- Z czego składa się sekcja:
  - {Pokaż kolumny}: *switch* -> pokazuje/ukrywa kolumny w tabeli

### Sekcja tabeli

- {Tabela cesji}: tabela prezentująca listę wszystkich cesji
  - Kolumny:
    - Numer cesji (string)
    - Klient (dane z Lead: imię, nazwisko, PESEL)
    - Instytucja bankowa (nazwa)
    - Status (StatusCesji)
    - Czy przelew może zostać wysłany do klienta (boolean)
    - Kwota przelewu (decimal)
    - Data wykonania przelewu (date)
    - Data wysłania cesji do klienta (date)
    - Ile dni minęło od daty wysłania cesji do klienta (string)
    - Data otrzymania dokumentu cesji od klienta (date)
    - Data podpisania cesji (date)
    - Data wysłania cesji do banku/instytucji (date)
    - Czy otrzymano odpowiedź z banku (boolean)
    - Ilość umów kredytowych w ramach cesji (number) - wyświetlają się tylko umowy o wartości powyżej 15 tys. zł
    - Przypisany doradca (dane z Użytkownik: imię, nazwisko): bezpośrednio z cesji, nie z leada
  - Sortowanie w tabeli:
    - Domyślne sortowanie: po dacie utworzenia (malejąco)
    - Możliwość sortowania po kolumnach:
      - Numer cesji
      - Klient (alfabetycznie po nazwisku)
      - Instytucja bankowa (alfabetycznie)
      - Status (według predefiniowanej kolejności statusów)
      - Kwota przelewu
      - Data wykonania przelewu
      - Data wysłania cesji do klienta
      - Data otrzymania dokumentu cesji od klienta
      - Data podpisania cesji
      - Data wysłania cesji do banku/instytucji
      - Dni od wysłania cesji do klienta
      - Ilość umów kredytowych
      - Przypisany doradca (alfabetycznie po nazwisku)
  - Akcje rekordu:
    - {Szczegóły} -> przejście do [[Ekran - Szczegóły Cesji]]
  - Akcje grupowe:
    - {Zmień status cesji} -> pole {Status}: *select* -> z możliwością grupowej zmiany statusu cesji dla zaznaczonych pozycji, wyboru statusu oraz wpisania daty podpisania cesji przez klienta, która jest na dokumencie cesji. Zmiana statusu cesji na Otrzymana zmienia datę otrzymania cesji od klienta na dzisiejszą.
    - {Oznacz przelew jako wysłany} -> oznacza zaznaczone cesje jako posiadające wysłany przelew
    - {Oznacz przelew jako niewysłany} -> oznacza zaznaczone cesje jako nieposiadające wysłanego przelewu
    - {Eksportuj przelewy ING} -> generuje plik przelewów dla zaznaczonych cesji spełniających warunki wysłania przelewu
    - {Generuj dokument cesji} -> generuje dokument cesji z szablonu dla zaznaczonych cesji
      - System uniemożliwia generowanie dokumentów cesji, gdy wśród zaznaczonych pozycji znajduje się cesja z kwotą przelewu równą 0 złotych. W takiej sytuacji przycisk jest nieaktywny (disabled), a użytkownik otrzymuje stosowny komunikat informacyjny.
    - {Generuj przekaz pocztowy} -> generuje przekaz pocztowy dla zaznaczonych cesji
    - {Zmień datę otrzymania dokumentów} -> zmienia datę otrzymania dokumentów dla zaznaczonych cesji na wybraną z kalendarza. Po zastosowaniu akcji data wybrana z kalendarza jest zapamiętywana i może zostać użyta dodatkowym przyciskiem do zmiany daty dla kolejnych wybranych cesji.
    - {Zmień datę podpisania cesji} -> zmienia datę podpisania cesji przez klienta dla zaznaczonych cesji na wybraną z kalendarza. Po zastosowaniu akcji data wybrana z kalendarza jest zapamiętywana i może zostać użyta dodatkowym przyciskiem do zmiany daty dla kolejnych wybranych cesji. Dodatkowo zmiana daty podpisania cesji dla wybranych cesji ustala dla nich datę wysłania cesji do banku + 7 dni od wybranej daty podpisania cesji przez klienta
