---
Estimation: 7
---

## Cel ekranu

- Ekran służy do przeglądania, filtrowania i zarządzania listą leadów oraz przypisywania ich do doradców
- Uprawnienia:
  - Administrator, Szef działu, Kierownik zespołu - pełny dostęp do wszystkich leadów
  - Doradca klienta BIK - dostęp tylko do przypisanych leadów
  - Doradca klienta Cesje - brak dostępu

## Struktura ekranu

### Górna część ekranu

- Sekcja zawiera główne informacje i akcje dostępne dla użytkownika
- Z czego składa się sekcja:
  - {Licznik wszystkich leadów}: pokazuje całkowitą liczbę leadów w systemie
  - {Licznik nieprzypisanych leadów}: pokazuje liczbę leadów bez przypisanego doradcy
  - {Licznik przeterminowanych leadów}: w nagłówku tabeli wyświetla liczbę podświetlonych leadów wymagających kontaktu
  - {Importuj paczkę leadów} -> otwiera [[Element - Modal Importu paczki leadów]]
  - {Utwórz leada} -> otwiera [[Ekran - Szczegóły leada]] w trybie tworzenia nowego leada

### Sekcja filtrów

- Sekcja zawiera zestaw filtrów do zawężania widoku danych w tabeli leadów
- Z czego składa się sekcja:
  - Filtry:
    - {Wyszukiwarka}: *imię, nazwisko, PESEL, telefon, email* -> wyszukuje leada po danych klienta
    - {Status leada}: *multiselect* -> filtruje leady po statusie
    - {Doradcy}: *multiselect* -> filtruje leady po przypisanych doradcach
    - {Paczki leadów}: *multiselect* -> filtruje leady po źródłowych paczkach
    - {Status umów SKD}: *multiselect* -> filtruje leady po statusie umowy SKD
    - {Data następnego kontaktu}: *daterange* -> filtruje leady po zakresie dat następnego kontaktu
    - {Data ostatniej modyfikacji leada}: *daterange* -> filtruje leady po zakresie dat ostatniej modyfikacji danych bądź statusu leada
    - {Data importu paczki leadów}: *daterange* -> filtruje leady po dacie importu paczki
    - {Pochodzenie leada z bazy źródłowej}: *multiselect* -> filtruje leady po źródłowej bazie
    - {Data przekazania paczki leadów}: *daterange* -> filtruje leady po dacie przekazania paczki
    - {Pokaż leady nieprzypisane do doradcy}: *switch* -> pokazuje tylko leady bez przypisanego doradcy
    - {Pokaż leady z numerami nadania przesyłki do BIK}: *switch* -> pokazuje tylko leady z numerami nadania pozyskanych od klientów
    - {Pokaż leady wymagające kontaktu}: *switch* -> pokazuje tylko leady wymagające kontaktu

### Sekcja modyfikowania kolumn

- Sekcja zawiera zestaw przycisków do modyfikowania kolumn w tabeli leadów
- Z czego składa się sekcja:
  - {Pokaż kolumny}: *switch* -> pokazuje/ukrywa kolumny w tabeli

### Sekcja główna - tabela leadów

- Sekcja wyświetla dane w formie tabeli z możliwością interakcji
- Z czego składa się sekcja:
  - {Tabela leadów}: tabela z listą wszystkich leadów
    - Kolumny:
      - Checkbox (boolean)
      - Imię i nazwisko klienta (text)
      - Telefon klienta (text)
      - Status leada (enum) - przypisane kolory do statusów
      - Data następnego kontaktu (date)
      - Data ostatniej modyfikacji (date)
      - Doradca klienta (text)
      - Data przedawnienia leada (date)
      - Pochodzenie leada z bazy źródłowej (text)
      - Data przekazania paczki leadów (date)
      - Status umów SKD (enum) - przypisane kolory do statusów
      - Łączna liczba umów kredytowych (number)
      - Liczba aktywnych cesji (number)
      - Paczka leadów (text)
    - Sortowanie w tabeli:
      - Domyślne sortowanie: po dacie ostatniej modyfikacji (malejąco)
      - Możliwość sortowania po kolumnach:
        - Imię i nazwisko klienta (alfabetycznie)
        - Status leada (według predefiniowanej kolejności statusów)
        - Data następnego kontaktu
        - Data ostatniej modyfikacji
        - Doradca klienta (alfabetycznie)
        - Paczka leadów (alfabetycznie)
        - Data przedawnienia leada
        - Pochodzenie leada z bazy źródłowej
        - Data przekazania paczki leadów
        - Liczba aktywnych cesji
        - Łączna liczba umów kredytowych
    - Formatowanie warunkowe wierszy:
      - Podświetlenie na czerwono (wymagany kontakt) gdy spełnione są wszystkie warunki:
        - Status leada nie jest "BrakZainteresowania" ani "WspółpracaZakończona"
        - Data następnego kontaktu jest pusta lub jest datą z przeszłości
        - Ostatnia modyfikacja w tym dodanie komentarza była ponad 14 dni temu
      - Podświetlenie znika po:
        - Zmianie statusu na "BrakZainteresowania" lub "WspółpracaZakończona"
        - Ustawieniu przyszłej daty następnego kontaktu
        - Jakiejkolwiek modyfikacji leada (resetuje licznik 14 dni)
        - Dodano komentarz do leada
    - Akcje:
      - Sortowanie po każdej kolumnie
      - Zaznaczanie pojedynczych i wszystkich rekordów
      - {Usuń leada} -> usunięcie leada po potwierdzeniu
      - {Szczegóły leada} -> otwiera [[Ekran - Szczegóły leada]]
      - {Generuj paczki informacyjne} -> uruchamia funkcję generowania paczek informacyjnych dla zaznaczonych leadów (aktywne tylko gdy zaznaczono przynajmniej jeden rekord)
      - {Przypisz doradcę} -> otwiera [[Element - Modal Przypisania Doradców]] (aktywne tylko gdy zaznaczono przynajmniej jeden rekord)
      - {Usuń leady} -> grupowe usuwanie leadów po potwierdzeniu (aktywne tylko gdy zaznaczono przynajmniej jeden rekord)
      - {Zmiana statusu leadów} -> grupowa zmiana statusu leadów po potwierdzeniu (aktywne tylko gdy zaznaczono przynajmniej jeden rekord)
    - Kontrolki paginacji:
      - {Wybór liczby rekordów}: *select* -> wybór 50/100/200 rekordów na stronę
      - {Nawigacja stron}: przyciski nawigacji (pierwsza/poprzednia/następna/ostatnia)
      - {Info o stronach}: text w formacie "Strona X z Y (łącznie N rekordów)"
