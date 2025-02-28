---
Estimation: 12
---

## Cel ekranu

- Ekran służy do wyświetlania i edycji szczegółowych informacji o leadzie
- Umożliwia szybką nawigację między leadami oraz aktualizację ich statusu
- Uprawnienia:
  - Administrator, Kierownik zespołu - pełny dostęp do edycji wszystkich leadów
  - Szef działu - pełny dostęp do podglądu wszystkich leadów bez możliwości edycji
  - Doradca klienta BIK - dostęp do przeglądania i edycji tylko przypisanych leadów
  - Doradca klienta Cesje - brak dostępu

## Struktura ekranu

### Sekcja nawigacji i przycisków akcji

- Sekcja zawiera elementy ułatwiające pracę z wieloma leadami oraz główne do wykonania akcji na leadzie
- Z czego składa się sekcja:
  - {Wyszukiwarka leadów}: *search* -> wyszukuje leady po imieniu, nazwisku, numerze telefonu, pesel
  - {Poprzedni lead} -> przejście do poprzedniego leada z listy
  - {Następny lead} -> przejście do następnego leada z listy
  - {ID rekordu}: pokazuje identyfikator leada w bazie
  - {Dodaj leada} -> otwiera [[Ekran - Szczegóły leada]] w trybie tworzenia nowego leada
  - {Usuń leada} -> usuwa leada po potwierdzeniu
  - {Generuj paczkę informacyjną} -> uruchamia funkcję generowania paczki informacyjnej dla bieżącego leada
  - {Zapisz zmiany} -> zapisuje wszystkie wprowadzone zmiany
    - Przycisk aktywny tylko gdy wprowadzono jakieś zmiany
    - Po zapisie wyświetla komunikat "Zmiany zostały zapisane"
  - {Anuluj zmiany} -> przywraca stan sprzed edycji
    - Przycisk aktywny tylko gdy wprowadzono jakieś zmiany
    - Przed anulowaniem wyświetla potwierdzenie "Czy na pewno chcesz anulować wprowadzone zmiany?"
  - {Powrót do listy} -> powrót do [[Ekran - Lista leadów]]

### Sekcja podstawowych informacji

- Sekcja zawiera kluczowe informacje o leadzie i możliwość zmiany jego statusu
- Z czego składa się sekcja:
  - {Status leada}: *select* -> zmiana statusu leada
    - Po zmianie statusu leada na "Otrzymano numer nadania" lub "Wysłano Paczkę Informacyjną" aplikacja wymusza edycję daty następnego kontaktu na użytkowniku w celu jej weryfikacji
  - {Przypisany doradca}: *select* -> wybór doradcy (tylko dla managerów)
  - {Alert o braku kontaktu}: wyświetlany gdy:
    - Status leada nie jest "BrakZainteresowania" ani "WspółpracaZakończona"
    - Data następnego kontaktu jest pusta lub jest datą z przeszłości
    - Ostatnia modyfikacja lub komentarz były ponad 14 dni temu
    - Treść alertu: "Lead wymaga kontaktu! Ostatnia aktywność: [data_ostatniej_modyfikacji]"
    - Alert znika po:
      - Zmianie statusu na "BrakZainteresowania" lub "WspółpracaZakończona"
      - Ustawieniu przyszłej daty następnego kontaktu
      - Jakiejkolwiek modyfikacji leada
      - Dodaniu komentarza
    - {Lead dodany przez}: wyświetla nazwę użytkownika, który dodał lead
    - {Lead dodany dnia}: wyświetla datę i godzinę dodania leada

### Sekcja danych klienta

- Sekcja zawiera dane osobowe i kontaktowe klienta
- Sekcja możliwa do zwinięcia i rozwinięcia poprzez kliknięcie w nagłówek sekcji
  - Domyślnie rozwinięta
- Z czego składa się sekcja:
  - {Imię}: *text* - imię klienta
    - Walidacje:
      - pole wymagane: "Wprowadź imię"
  - {Nazwisko}: *text* - nazwisko klienta
    - Walidacje:
      - pole wymagane: "Wprowadź nazwisko"
  - {Numer telefonu}: *text* - numer kontaktowy
    - Walidacje:
      - pole wymagane: "Wprowadź numer telefonu"
      - format: "Nieprawidłowy format numeru telefonu"
  - {PESEL}: *text* - numer PESEL klienta
  - {Email}: *email* - adres email klienta
  - Adres:
    - {Województwo}: *select* - wybór województwa
    - {Kod pocztowy}: *text* - kod pocztowy
      - walidacja formatu kodu pocztowego: "00-001"
      - przy wpisywaniu liczb pole automatycznie wstawia separator "-" po dwóch cyfrach
    - {Poczta}: *text* - nazwa poczty (do przekazu pocztowego)
    - {Miejscowość}: *text* - nazwa miejscowości
    - {Ulica}: *text* - nazwa ulicy
    - {Nr budynku}: *text* - numer budynku
    - {Nr mieszkania}: *text* - numer mieszkania
  - {Numer konta klienta}: *text* - numer konta klienta

### Sekcja informacji o paczce leadów

- Sekcja zawiera informacje o źródle leada tylko do odczytu
- Sekcja możliwa do zwinięcia i rozwinięcia poprzez kliknięcie w nagłówek sekcji
- Z czego składa się sekcja:
  - {Paczka leadów}: identyfikator paczki
  - {Pochodzenie bazy}:- źródło danych
    - Pole posiada tooltip pokazujący użytkownikowi komunikat RODO wymagany przez danego dostawcę. Treść komunikatu ustawiona na sztywno w zależności od pochodzenia bazy i dostarczona przez Twoja Prowizja
  - {Data przekazania}:- data otrzymania leada
  - {Data przedawnienia leada}: termin przedawnienia leada
  - {Spółka}: nazwa spółki
  - {Uwagi o paczce leadów}: dodatkowe informacje o paczce

### Sekcja historii połączeń

- Sekcja wyświetla historię połączeń telefonicznych zintegrowaną z zewnętrznym systemem telefonicznym
- Sekcja możliwa do zwinięcia i rozwinięcia poprzez kliknięcie w nagłówek sekcji
- Z czego składa się sekcja:
  - {Odśwież historię} -> przycisk do manualnego odświeżenia historii połączeń
  - Lista połączeń (tylko do odczytu):
    - Sortowanie: od najnowszych
    - Kolumny:
      - Typ połączenia (ikona: strzałka przychodzącą/wychodzącą)
      - Status (Odebrane/Nieodebrane/Zajęty/Poczta głosowa)
      - Data i godzina połączenia
      - Czas trwania (format: MM:SS)
      - Doradca klienta
      - Numer telefonu
    - Paginacja: 10 połączeń na stronę
  - {Ostatnia synchronizacja}: informacja o dacie i godzinie ostatniej aktualizacji danych

### Sekcja obsługi leada

- Sekcja zawiera informacje o postępie pracy z leadem oraz o przesyłce wysłanej przez klienta do BIK i możliwość jej edycji
- Sekcja możliwa do zwinięcia i rozwinięcia poprzez kliknięcie w nagłówek sekcji
- Numery nadań są używane do rozliczania nowych doradców klienta, którzy przez pierwsze 2 miesiące nie mogą liczyć na to, że otrzymają raporty z BIK dla swoich leadów, ponieważ ta procedura trwa około dwóch miesięcy
- Z czego składa się sekcja:
  - {Następny kontakt}: *datetime* - data i godzina kolejnego kontaktu
  - {Umowy kredytowe SKD}: *radio* -> wybór opcji dotyczącej umów
    - Opcje: Nie posiada/Posiada - dosłał/Posiada - nie dosłał
  - {Numer nadania}: *text* - numer przesyłki
    - Walidacje:
      - unikalność: "Ten numer nadania jest już użyty w systemie"
  - {Weryfikuj numer nadania poczty polskiej} -> przycisk uruchamia funkcję weryfikacji numeru nadania poczty polskiej
  - {Data wysłania przesyłki informacyjnej do klienta}: *date* - data nadania przesyłki informacyjnej do klienta
    - Walidacje:
      - nie może być z przyszłości: "Data nie może być z przyszłości"
      - po zmianie daty wysyłki aplikacja wymusza edycję daty następnego kontaktu na użytkowniku w celu jej weryfikacji
  - {Status przesyłki}: *select* - status przesyłki
    - Opcje: Wysłana/W trakcie/Dostarczona/Nie odebrana/Zwrócona
  - {Komentarz do generowanego Worda}: *textarea* - komentarz do Worda
  - {Ponowna wysyłka paczki}: *checkbox* - checkbox do oznaczenia ponownej wysyłki paczki
  - {Data otrzymania raportu BIK od klienta}: *date* - data otrzymania raportu BIK od klienta

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

### Sekcja cesji

- Sekcja zawiera podsumowanie informacji o cesiach klienta (tylko do odczytu)
- Sekcja możliwa do zwinięcia i rozwinięcia poprzez kliknięcie w nagłówek sekcji
- Z czego składa się sekcja:
  - Lista cesji:
    - Sortowanie: od najnowszych
    - Kolumny:
      - Numer cesji
      - Status cesji
      - Instytucja bankowa
      - Data utworzenia
      - Przypisany doradca
      - Przypisany analityk
      - Status przelewu do klienta
      - Czy otrzymano odpowiedzi z banku
      - Liczba umów kredytowych
    - Akcje:
      - {Przejdź do szczegółów} -> przekierowanie do [[Ekran - Szczegóły Cesji]]
  - Podsumowanie:
    - {Liczba aktywnych cesji}: licznik wszystkich niezamkniętych cesji
    - {Łączna liczba umów kredytowych}: suma wszystkich umów ze wszystkich cesji
    - {Suma otrzymanych prowizji i odsetek}: łączna kwota ze wszystkich cesji
    - {Ostatnia aktualizacja}: data i godzina ostatniej synchronizacji danych

### Sekcja umów kredytowych

- Sekcja możliwa do zwinięcia i rozwinięcia poprzez kliknięcie w nagłówek sekcji
- Zawiera umowy kredytowe otwarte, które są przypisane bezpośrednio do leada oraz zawiera również umowy kredytowe z powiązanych cesji
- Możliwość dodawania i edycji umów poprzez dedykowane formularze
- {Lista umów kredytowych}: tabela z listą wszystkich umów dla tej cesji
  - Kolumny:
    - Status
    - Numer kredytu
    - Data rozpoczęcia kredytu
    - Data zamknięcia kredytu
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
    - {Edytuj umowę} -> otwarcie formularza edycji umowy poniżej tabeli. Tylko dla umów kredytowych przypisanych bezpośrednio do leada
    - {Usuń umowę} -> usuwanie umowy kredytowej. Tylko dla umów kredytowych przypisanych bezpośrednio do leada
- Formularz umowy kredytowej (widoczny po kliknięciu Dodaj/Edytuj):
  - Pola:
    - {Status}: *select* - wybór statusu umowy kredytu (otwarty/zamknięty)
    - {Numer kredytu}: *text*
    - {Data rozpoczęcia kredytu}: *date*
    - {Data zamknięcia kredytu}: *date*
      - Walidacje:
        - data późniejsza niż data rozpoczęcia: "Data zamknięcia musi być późniejsza niż data rozpoczęcia"
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
