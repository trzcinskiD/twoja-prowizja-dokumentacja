---
Estimation: 12
---

## Cel ekranu

- Ekran służy do wczytywania i przetwarzania raportów BIK dla pojedynczego leada
- Umożliwia dodanie wielu plików do przetwarzania jednocześnie
- Pozwala na weryfikację i korektę odczytanych danych

## Struktura ekranu

### Sekcja nagłówka strony

- {Tytuł strony}: "OCR dokumentów z BIK"
- {Opis do czego służy strona}: "Strona służy do przetwarzania raportów BIK dla pojedynczego leada"

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

- {Rozpocznij przetwarzanie} -> uruchomienie funkcji OCR dla wczytanych plików
- {Ponów przetwarzanie} -> ponowne uruchomienie OCR plików, pojawia się po zakończeniu przetwarzania
- {Wyślij prośbę o nowe zdjęcie} -> wysłanie maila z prośbą o lepszej jakości dokument, pojawia się po zakończeniu przetwarzania, jeśli scoring jakości jest niższy niż 70%
- {Zapisz i utwórz cesje} -> zapisanie danych i utworzenie cesji, pojawia się po zakończeniu przetwarzania oraz wybraniu leada

### Sekcja odczytanych danych

- Sekcja pojawia się po wczytaniu plików i po przetwarzaniu wszystkich plików przez OCR
- {Liczba prób}: liczba prób przetworzenia plików
- {Scoring jakości}: wskaźnik jakości odczytu w procentach dla wszystkich plików łącznie
- {Odczytane dane osobowe}: Odczytane przez OCR dane osobowe
  - {Imię}: *text* - imię klienta
  - {Nazwisko}: *text* - nazwisko klienta
  - {PESEL}: *text* - numer PESEL
  - {Adres}: *text* - pełny adres
- {Lista pasujących leadów}: tabela wyświetlana gdy znaleziono pasujące rekordy
  - Kolumny: Imię, Nazwisko, PESEL, Adres, Zgodność danych
  - Akcje: {Wybierz} -> wybranie leada, dla którego będą tworzone cesje

### Sekcja kredytów

- Sekcja pojawia się po wczytaniu plików i po przetwarzaniu wszystkich plików przez OCR
- {Lista kredytów}: tabela z odczytanymi przez OCR kredytami
  - Kolumny:
    - Bank (nazwa instytucji bankowej, NIP)
    - Status kredytu (otwarty/zamknięty)
    - Data rozpoczęcia
    - Data zakończenia
    - Numer kredytu
    - Kwota kredytu
    - Cesja notarialna? - Tak/Nie, pole uzupełniane ręcznie
    - Scoring jakości odczytu
    - Kredyt obsługiwany notarialnie? (do uzupełnienia ręcznie)
    - Ile miesięcy spłacany kredyt? (obliczony z daty rozpoczęcia kredytu i daty zamknięcia kredytu)
  - Akcje:
    - {Edytuj} -> możliwość korekty danych
    - {Usuń} -> usunięcie błędnie odczytanego kredytu
    - {Dodaj kredyt} -> dodanie nowego kredytu ręcznie
  - Inne:
    - Jeżeli nie znaleziono banku dla kredytu - rekord jest oznaczony do weryfikacji i przypisania instytucji bankowej
- {Modal dodawania/edycji kredytu}:
  - {Wybór banku}: *select* - lista istniejących instytucji bankowych z możliwością wyszukiwania po nazwie/NIP
    - Zawiera opcję "Dodaj nową instytucję bankową", która otwiera modal dodawania nowej instytucji
  - {Status kredytu}: *select* - (otwarty/zamknięty)
  - {Data rozpoczęcia}: *date*
  - {Data zakończenia}: *date* - tylko dla zamkniętych kredytów
  - {Numer kredytu}: *text*
  - {Kwota kredytu}: *decimal* - kwota kredytu w PLN
  - {Cesja notarialna?}: *checkbox* - czy obsługa w ramach cesji notarialnej
  - {Kredyt obsługiwany notarialnie?}: *checkbox* - czy obsługa w ramach cesji notarialnej
- {Modal dodawania nowej instytucji bankowej}:
  - {Nazwa instytucji}: *text* - pełna nazwa instytucji bankowej
  - {NIP}: *text* - numer NIP instytucji bankowej z walidacją formatu
  - {REGON}: *text* - numer REGON instytucji bankowej (opcjonalnie)
  - {Adres}: *text* - adres siedziby instytucji
  - {Kod pocztowy}: *text* - kod pocztowy z walidacją formatu
  - {Miasto}: *text* - miasto siedziby instytucji
  - {Przyciski akcji}:
    - {Anuluj} -> zamknięcie modalu bez zapisywania
    - {Zapisz} -> zapisanie nowej instytucji bankowej i dodanie jej do listy wyboru w modalu dodawania/edycji kredytu
