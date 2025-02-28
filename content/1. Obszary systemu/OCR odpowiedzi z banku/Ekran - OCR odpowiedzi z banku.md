---
Estimation: 10
---

## Cel ekranu

- Ekran służy do wczytywania i przetwarzania odpowiedzi z banków
- Umożliwia dodanie wielu plików do przetwarzania jednocześnie
- Pozwala na weryfikację i korektę odczytanych danych
- Umożliwia połączenie odpowiedzi z odpowiednią cesją

## Struktura ekranu

### Sekcja nagłówka strony

- {Tytuł strony}: "OCR odpowiedzi z banku"
- {Opis do czego służy strona}: "Strona służy do przetwarzania OCR odpowiedzy z banku dla cesji"

### Sekcja wczytywania plików

- Sekcja widoczna cały czas na stronie
- {Obszar drop & drop}: pozwala na przeciągnięcie plików lub wybranie ich z dysku
  - Walidacje:
    - maksymalny rozmiar pliku 25MB: "Plik przekracza dozwolony rozmiar 25MB"
    - format pliku (PDF, JPG, PNG, TIFF): "Niedozwolony format pliku"
    - maksymalna wielkość strony A3: "Strona przekracza dozwolony rozmiar A3"
- {Lista wczytanych plików}: Lista dodanych plików
  - Dane: Nazwa pliku, Rozmiar, Status przetwarzania, Scoring jakości
  - Akcje:
    - {Usuń} -> usunięcie pliku z listy
    - {Podgląd} -> pokazanie podglądu dokumentu
  - {Progres przetwarzania}: wskaźnik postępu przetwarzania plików

### Przyciski akcji

- {Rozpocznij przetwarzanie} -> uruchomienie funkcji OCR i analizy AI
- {Ponów przetwarzanie} -> ponowne uruchomienie przetwarzania, pojawia się po zakończeniu
- {Zapisz i powiąż z cesją} -> zapisanie danych i powiązanie z wybraną cesją

### Sekcja odczytanych danych

- Sekcja pojawia się po wczytaniu plików i po przetwarzaniu wszystkich plików przez OCR
- {Liczba prób}: liczba prób przetworzenia plików
- {Scoring jakości}: wskaźnik jakości odczytu w procentach
- Odczytane dane z możliwością ich edycji:
  - {Bank nadawca}: *text* - nazwa banku wysyłającego odpowiedź
  - {Numer zgłoszenia/reklamacji}: *text*
  - {Imię klienta}: *text*
  - {Nazwisko klienta}: *text*
  - {Wynik reklamacji}: *select* (zasadna/niezasadna)
  - {Czy bank podał informacje o konkretnych umowach?}: *checkbox*
  - {Czy bank podał kwotę łączną?}: *checkbox*
  - Sekcja kwot łącznych (widoczna gdy zaznaczono checkbox):
    - {Kwota łączna wypłaty}: *decimal*
    - {Prowizja i odsetki łącznie}: *decimal*
  - {Informacja o ubezpieczeniu}: *text* - krótka informacja czy odpowiedź zawiera odniesienie do ubezpieczenia

### Sekcja znalezionych umów kredytowych

- Sekcja pojawia się po wczytaniu plików i po przetwarzaniu wszystkich plików przez OCR
- Dane odczytane z umów kredytowych nadpiszą lub zaktualizują dane dotyczące umów kredytowych w cesji
- {Lista umów kredytowych}: tabela z odczytanymi szczegółami umów (widoczna gdy zaznaczono checkbox)
  - Kolumny:
    - Numer umowy/kredytu
    - Data zawarcia
    - Czy otrzymano pieniądze z banku za umowę kredytową?
    - Wypłacona prowizja i odsetki dla tego kredytu
  - Akcje:
    - {Edytuj} -> możliwość korekty danych
    - {Usuń} -> usunięcie błędnie odczytanych danych umowy kredytowej
    - {Dodaj umowę} -> dodanie nowej umowy ręcznie

### Sekcja pasujących cesji

- Sekcja pojawia się po wczytaniu plików i po przetwarzaniu wszystkich plików przez OCR
- {Lista pasujących cesji}: tabela wyświetlana gdy znaleziono potencjalnie pasujące cesje
  - Kolumny:
    - Dane klienta (imię, nazwisko)
    - Instytucja bankowa
    - Lista umów kredytowych:
      - Numer kredytu
      - Data rozpoczęcia
      - Status
      - Dopasowane informacje z odpowiedzi (jeśli znaleziono)
    - Stopień dopasowania
  - Akcje:
    - {Wybierz} -> wybranie cesji do powiązania z odpowiedzią

### Sekcja podsumowania

- Sekcja pojawia się po wczytaniu plików i po przetwarzaniu wszystkich plików przez OCR
- {Wygenerowane podsumowanie}: *text* - podsumowanie odpowiedzi wygenerowane przez AI
- {Status weryfikacji}: informacja czy dokument wymaga dodatkowej weryfikacji
