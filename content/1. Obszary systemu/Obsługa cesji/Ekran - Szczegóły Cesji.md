---
Estimation: 12
---

## Cel ekranu

- Ekran służy do zarządzania pojedynczą cesją
- Umożliwia podgląd i edycję danych cesji oraz powiązanych umów kredytowych
- Prezentuje dane klienta z leada
- Dostępny dla użytkowników z rolą Doradca klienta Cesje, Kierownik Zespołu, Szef Działu i Administrator
- Doradca klienta Cesje widzi tylko cesje przypisane do niego

## Struktura ekranu

### Sekcja przycisków akcji

- Sekcja zawiera elementy ułatwiające pracę z wieloma cesjami oraz główne do wykonania akcji na cesji
- Z czego składa się sekcja:
  - {Zapisz zmiany} -> zapisuje wszystkie wprowadzone zmiany
    - Przycisk aktywny tylko gdy wprowadzono jakieś zmiany
    - Po zapisie wyświetla komunikat "Zmiany zostały zapisane"
  - {Anuluj zmiany} -> przywraca stan sprzed edycji
    - Przycisk aktywny tylko gdy wprowadzono jakieś zmiany
    - Przed anulowaniem wyświetla potwierdzenie "Czy na pewno chcesz anulować wprowadzone zmiany?"
  - {Powrót do listy} -> powrót do [[Ekran - Lista cesji]]
  - {Data utworzenia} i {Utworzone przez}
  - {Data modyfikacji} i {Zmodyfikowane przez}
  - {Wyszukiwarka cesji}: *search* -> wyszukuje cesje po numerze cesji oraz kliencie (imieniu, nazwisku, numerze telefonu, pesel)
  - {Poprzednia cesja} -> przejście do poprzedniej cesji
  - {Następna cesja} -> przejście do następnej cesji
  - {Dodaj cesję} -> Uruchamia panel boczny do tworzenia nowej cesji %%wykorzystaj panel boczny z listy cesji%%
  - {Usuń cesję} -> usuwa cesję (dostępne tylko dla statusu Nowa)
    - Wymagane potwierdzenie: "Czy na pewno chcesz usunąć tę cesję? Tej operacji nie można cofnąć."
  - {Generuj dokument cesji} -> generuje dokument cesji z szablonu

### Sekcja podstawowych informacji

- Sekcja zawiera kluczowe informacje o cesji i możliwość zmiany jego statusu
- Z czego składa się sekcja:
  - {Status cesji}: *enum* - aktualny status cesji
  - {Instytucja bankowa}: nazwa przypisanej instytucji
  - {Przypisany doradca}: *select* - lista aktywnych doradców
    - Walidacje:
      - wymagane: "Doradca musi być przypisany do cesji
  - {Przypisany analityk}: *select* - lista aktywnych analityków
    - Walidacje:
      - wymagane: "Analityk musi być przypisany do cesji
  
### Sekcja danych klienta (z Lead)

- Dane tylko do odczytu - wszystkie zmiany muszą być wykonywane w module obsługi leadów
- Sekcja możliwa do zwinięcia i rozwinięcia poprzez kliknięcie w nagłówek sekcji
- Co zawiera sekcja:
  - {Imię i nazwisko}
  - {PESEL}
  - {Telefon}
  - {Email}
  - {Adres}: województwo, kod pocztowy, miejscowość, ulica, nr budynku, nr mieszkania
  - {Numer konta klienta}
  - {Status leada}
  - {Status umów SKD}
  - {Data następnego kontaktu}

### Sekcja danych finansowych otrzymanych w odpowiedzi z banku

- Sekcja możliwa do zwinięcia i rozwinięcia poprzez kliknięcie w nagłówek sekcji
- Sekcja niedostępna dla doradcy klienta Cesje
- Informacje podstawowe:
  - {Data otrzymania odpowiedzi z banku}: *date* - data powiązania odpowiedzi z banku
  - {Numer reklamacji/zgłoszenia}: *text* - numer reklamacji/zgłoszenia, jeśli istnieje
  - {Wynik reklamacji}: *select* - wynik reklamacji, jeśli istnieje (zasadna/niezasadna)
  - {Informacje o ubezpieczeniu}: *textarea* - informacja o decyzji dot. ubezpieczenia
  - {Podsumowanie informacji uzyskanych z odpowiedzi z banku}: *textarea* - podsumowanie informacji uzyskanych z odpowiedzi z banku
  - {Czy bank podał kwoty łączne?}: *checkbox*
    - Jeśli bank podał kwoty łączne, to w polu {Łączna kwota prowizji i odsetek z odpowiedzi} zostanie wyświetlona kwota prowizji i odsetek z odpowiedzi
    - Jeśli bank nie podał kwot łącznych i checkbo nie jest zaznaczony, to pola {Łączna kwota prowizji i odsetek z odpowiedzi} nie są wyświetlane
    - {Łączna kwota prowizji i odsetek z odpowiedzi}: *decimal*
    - {Łączna kwota razem z odpowiedzi}: *decimal*

### Sekcja obsługi cesji umowy kredytowej

- Sekcja możliwa do zwinięcia i rozwinięcia poprzez kliknięcie w nagłówek sekcji
- Co zawiera sekcja:
  - {Numer cesji}: *text* - Informacja o numerze cesji. Nie jest widoczny dla doradcy klienta.
    - Przykładowy numer cesji: UW22/07/2024
    - Każda cesja dla każdej instytucji ma inny numer - tzn. że dla różnych banków numery cesji mogą się powtarzać
  - {Data wysłania cesji do klienta}: *date* - data wysłania cesji do klienta
  - {Data otrzymania dokumentu cesji od klienta}: *date* - data otrzymania dokumentu cesji od klienta
  - {Data podpisania cesji przez klienta}: *date* - data podpisania cesji przez klienta, informacja znajduje się na dokumencie cesji. Zmiana tej daty automatycznie zmienia datę wysłania cesji do banku/instytucji na + 7 dni od ustalonej daty podpisania cesji przez klienta.
  - {Data wysłania cesji do banku/instytucji}: *date* - data wysłania cesji do banku/instytucji
  - {Cesja notarialna?}: *checkbox* - informacja czy cesja jest związana z cesją notarialną
  - {Data ostatniego wygenerowania dokumentu cesji}: *date* - data ostatniego wygenerowania dokumentu cesji

### Sekcja obsługi przelewu za cesję dla klienta

- Sekcja możliwa do zwinięcia i rozwinięcia poprzez kliknięcie w nagłówek sekcji
- Co zawiera sekcja:
  - {Czy można wysłać przelew do klienta?}: *checkbox* - informacja dla pracowników Twoja Prowizja czy przelew może już zostać wysłany do klienta
  - {Czy przelew wysłany do klienta?}: *checkbox* - informacja, czy Twoja Prowizja wysłała przelew do klienta. Możliwość zmiany pola tylko przez rolę administratora, kierownika zespołu.
  - {Kwota przelewu}: *decimal* - kwota przelewu w walucie PLN
  - {Numer konta}: *text* - numer konta klienta, na który wysłać przelew
    - Numer konta domyślnie wyświetla numer konta klienta z sekcji danych klienta (z Lead)
  - {Przekaz pocztowy}: *boolean* - informacja czy czy dla tego przelewu powinien zostać przygotowany przekaza pocztowy zamiast przelewu masowego ING

### Sekcja obsługi aneksu cesji

- Sekcja możliwa do zwinięcia i rozwinięcia poprzez kliknięcie w nagłówek sekcji
- Co zawiera sekcja:
  - {Czy jest aneks cesji}: *boolean* - informacja czy jest aneks cesji
  - {Data wysłania aneksu cesji do klienta}: *date* - data wysłania aneksu cesji do klienta
  - {Kwota aneksu cesji}: *decimal* - kwota aneksu cesji
  - {Numer konta}: *text* - numer konta klienta, na który wysłać aneks cesji
    - Numer konta domyślnie wyświetla numer konta klienta z sekcji danych klienta (z Lead)
  - {Tytuł przelewu}: *text* - tytuł przelewu
  - {Czy przelew do aneksu wysłany do klienta?}: *checkbox* - informacja, czy Twoja Prowizja wysłała przelew do klienta.
    - Możliwość zmiany pola tylko przez rolę administratora, kierownika zespołu.
  - {Przekaz pocztowy}: *boolean* - informacja czy czy dla tego przelewu powinien zostać przygotowany przekaza pocztowy zamiast przelewu masowego ING

### Sekcja komentarzy

- Sekcja zawiera możliwość dodawania nowych komentarzy oraz przeglądania historii komentarzy
- Sekcja możliwa do zwinięcia i rozwinięcia poprzez kliknięcie w nagłówek sekcji
- Z czego składa się sekcja:
  - {Dodaj komentarz} -> przycisk służący do dodawania nowych komentarzy
  - {Komentarz}: *textarea* - notatki dotyczące leada
    - Walidacje:
      - pole wymagane: "Wprowadź komentarz"
  - {Edytuj komentarz} -> przycisk służący do edycji komentarzy. Tylko dla komentarzy dodanych przez aktualnie zalogowanego użytkownika
  - {Usuń komentarz} -> przycisk służący do usuwania komentarzy. Tylko dla komentarzy dodanych przez aktualnie zalogowanego użytkownika
  - Historia komentarzy:
    - {Komentarz 1}:
      - Treść: "Pierwszy kontakt z klientem, zainteresowany ofertą."
      - Autor: "Jan Kowalski"
      - Data: "2025-01-25 10:00"
    - {Komentarz 2}:
      - Treść: "Klient prosi o przesłanie dodatkowych informacji."
      - Autor: "Anna Nowak"
      - Data: "2025-01-26 14:30"

### Sekcja umów kredytowych

- Sekcja możliwa do zwinięcia i rozwinięcia poprzez kliknięcie w nagłówek sekcji
- Możliwość dodawania i edycji umów poprzez dedykowane formularze
- {Lista umów kredytowych}: tabela z listą wszystkich umów dla tej cesji
  - Kolumny:
    - Status
    - Numer kredytu
    - Data rozpoczęcia kredytu
    - Data zamknięcia kredytu
    - Kwota kredytu
    - Numer konta
    - Informacje z odpowiedzi banku (jeśli podano dla tego kredytu):
      - Data odpowiedzi banku (jeśli jest)
      - Kwota prowizji i odsetek
    - Czy otrzymano pieniądze z banku za umowę kredytową?
    - Kredyt obsługiwany notarialnie?
    - Ile miesięcy spłacany kredyt? (obliczony z daty rozpoczęcia kredytu i daty zamknięcia kredytu)
    - Kwota kredytu
  - Akcje:
    - {Dodaj umowę} -> otwarcie formularza dodawania umowy poniżej tabeli
    - {Edytuj umowę} -> otwarcie formularza edycji umowy poniżej tabeli.
    - {Usuń umowę} -> usuwanie umowy kredytowej.
- Formularz umowy kredytowej (widoczny po kliknięciu Dodaj/Edytuj):
  - Pola:
    - {Status}: *select* - wybór statusu umowy kredytu (otwarty/zamknięty)
    - {Numer kredytu}: *text*
    - {Data rozpoczęcia kredytu}: *date*
    - {Data zamknięcia kredytu}: *date*
      - Walidacje:
        - data późniejsza niż data rozpoczęcia: "Data zamknięcia musi być późniejsza niż data rozpoczęcia"
    - {Kwota kredytu}: *decimal*
    - {Numer konta}: *text*
      - Walidacje:
        - format numeru konta: "Nieprawidłowy format numeru konta"
    - {Kwota prowizji i odsetek}: *decimal*
    - {Data odpowiedzi banku}: *date*
    - {Czy otrzymano pieniądze z banku za umowę kredytową?} *boolean*
    - {Kredyt obsługiwany notarialnie?} *boolean*
    - {Kwota kredytu}: *decimal*
  - Przyciski:
    - {Zapisz} -> zapisuje zmiany
    - {Anuluj} -> zamyka formularz bez zapisywania
