---
Estimation: 4
---

## Cel ekranu

- Ekran służy do zarządzania listą instytucji bankowych w systemie, umożliwiając dodawanie, edycję i usuwanie banków
- Dostępny tylko dla użytkowników z rolą Administrator

## Struktura ekranu

### Sekcja wyszukiwania i filtrowania

- Służy do odnajdywania konkretnych instytucji bankowych
- Składa się z:
  - {Wyszukiwarka banków}: *nazwa, NIP, KRS* -> wyszukuje instytucje bankowe po nazwie, NIP lub KRS
    - minimum 3 znaki: "Wprowadź minimum 3 znaki aby rozpocząć wyszukiwanie"
  - {Filtr statusu}: *select* -> filtruje banki po statusie (Wszystkie/Aktywne/Nieaktywne)
  - {Filtr szablonu}: *select* -> filtruje banki po szablonie (Wszystkie/SKOK/Standard/Standard z pełnomocnictwem)

### Sekcja główna

- Służy do wyświetlania i zarządzania listą banków
- Składa się z:
  - {Dodaj bank} -> otwiera [[Element - Modal modyfikacji instytucji bankowej]] w trybie dodawania
  - {Tabela instytucji bankowych}: tabela z listą wszystkich aktywnych i nieaktywnych banków
    - Kolumny:
      - Nazwa (text, sortowalne)
      - Skrócona nazwa (text, sortowalne) - jest to nazwa instytucji bankowej do pierwszego przecinka
      - NIP (text, sortowalne)
      - REGON (text)
      - KRS (text)
      - Adres (text)
      - Status (boolean) - aktywna/nieaktywna
      - Data modyfikacji (datetime, sortowalne)
      - Zmodyfikował (text)
      - Przypisany szablon (text)
    - Akcje:
      - {Edytuj} -> otwiera [[Element - Modal modyfikacji instytucji bankowej]] w trybie edycji
      - {Usuń Instytucję bankową} -> usunięcie instytucji bankowej po potwierdzeniu
        - Aktywne tylko, jeśli instytucja nie ma aktywnych powiązań
    - Paginacja: 20 rekordów na stronę
