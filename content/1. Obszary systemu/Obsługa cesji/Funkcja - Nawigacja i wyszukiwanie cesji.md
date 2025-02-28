---
Estimation: 2
---

## Cel

Umożliwienie szybkiej nawigacji między cesjami oraz wyszukiwania cesji według różnych kryteriów.

## Warunki początkowe

- Użytkownik ma uprawnienia do przeglądania cesji zgodnie z rolą:
  - Administrator, Kierownik zespołu - dostęp do wszystkich cesji
  - Szef działu - dostęp do podglądu wszystkich cesji
  - Doradca klienta Cesji - dostęp tylko do przypisanych cesji
- Użytkownik znajduje się w [[Ekran - Szczegóły Cesji]]

## Przebieg główny

### Dane wejściowe

- Aktualne filtry z listy cesji
- Fraza wyszukiwania
- Aktualna cesja

### Kroki

1. Przy wyszukiwaniu cesji:
   - Przyjmij frazę wyszukiwania
   - Szukaj po:
     - Numerze cesji
     - Imieniu klienta
     - Nazwisku klienta
     - Numerze telefonu
     - PESEL
   - Wyświetl podpowiedzi podczas wpisywania (min. 3 znaki)
   - Uwzględnij uprawnienia użytkownika przy wynikach wyszukiwania:
     - Dla Doradcy klienta Cesji pokaż tylko przypisane cesje
     - Dla pozostałych ról pokaż wszystkie pasujące cesje
   - Po wybraniu cesji → przejdź do jej szczegółów

2. Przy nawigacji do poprzedniej cesji:
   - Pobierz poprzednią cesję według:
     - Aktualnych filtrów z listy
     - Sortowania
     - Uprawnień użytkownika
   - Gdy znaleziono → załaduj szczegóły cesji
   - Gdy nie znaleziono → wyświetl "Brak poprzedniej cesji"

3. Przy nawigacji do następnej cesji:
   - Pobierz następną cesję według tych samych kryteriów
   - Gdy znaleziono → załaduj szczegóły cesji
   - Gdy nie znaleziono → wyświetl "Brak następnej cesji"

4. Przy przejściu do szczegółów cesji:
   - Załaduj wszystkie sekcje zdefiniowane w [[Ekran - Szczegóły Cesji]]

### Dane wyjściowe

- Załadowane szczegóły wybranej cesji
- Lista podpowiedzi przy wyszukiwaniu
- Komunikaty o braku wyników

## Powiązania

- Ekrany:
  - [[Ekran - Szczegóły Cesji]]
  - [[Ekran - Lista cesji]]
