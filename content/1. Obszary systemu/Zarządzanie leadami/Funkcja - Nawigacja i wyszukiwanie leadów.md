---
Estimation: 3
---

## Cel

Umożliwienie szybkiej nawigacji między leadami oraz wyszukiwania leadów według różnych kryteriów.

## Warunki początkowe

- Użytkownik ma uprawnienia do przeglądania leadów zgodnie z rolą:
  - Administrator, Kierownik zespołu - dostęp do wszystkich leadów
  - Szef działu - dostęp do podglądu wszystkich leadów
  - Doradca klienta BIK - dostęp tylko do przypisanych leadów
- Użytkownik znajduje się w [[Ekran - Szczegóły leada]]

## Przebieg główny

### Dane wejściowe

- Aktualne filtry z listy leadów
- Fraza wyszukiwania
- Aktualny lead

### Kroki

1. Przy wyszukiwaniu leadów:
   - Przyjmij frazę wyszukiwania
   - Szukaj po:
     - Imieniu klienta
     - Nazwisku klienta
     - Numerze telefonu
     - PESEL
   - Wyświetl podpowiedzi podczas wpisywania (min. 3 znaki)
   - Uwzględnij uprawnienia użytkownika przy wynikach wyszukiwania:
     - Dla Doradcy klienta BIK pokaż tylko przypisane leady
     - Dla pozostałych ról pokaż wszystkie pasujące leady
   - Po wybraniu leada → przejdź do jego szczegółów

2. Przy nawigacji do poprzedniego leada:
   - Pobierz poprzedniego leada według:
     - Aktualnych filtrów z listy
     - Sortowania (domyślnie po dacie ostatniej modyfikacji malejąco)
     - Uprawnień użytkownika
   - Gdy znaleziono → załaduj szczegóły leada
   - Gdy nie znaleziono → wyświetl "Brak poprzedniego leada"

3. Przy nawigacji do następnego leada:
   - Pobierz następnego leada według tych samych kryteriów
   - Gdy znaleziono → załaduj szczegóły leada
   - Gdy nie znaleziono → wyświetl "Brak następnego leada"

4. Przy przejściu do szczegółów leada:
   - Załaduj wszystkie sekcje zdefiniowane w [[Ekran - Szczegóły leada]]

### Dane wyjściowe

- Załadowane szczegóły wybranego leada
- Lista podpowiedzi przy wyszukiwaniu
- Komunikaty o braku wyników

## Powiązania

- Ekrany:
  - [[Ekran - Szczegóły leada]]
  - [[Ekran - Lista leadów]]
