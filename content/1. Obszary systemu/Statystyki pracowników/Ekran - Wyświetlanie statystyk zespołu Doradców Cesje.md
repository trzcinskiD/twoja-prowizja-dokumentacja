---
Estimation: 6
---

## Cel ekranu

- Wyświetlanie statystyk zespołu Doradców Cesje
- Uprawnienia:
  - Administrator, Szef działu może wyświetlać statystyki dla dowolnych zespołów
  - Kierownik zespołu może wyświetlać statystyki tylko dla swojego zespołu

## Struktura ekranu

### Sekcja ustawień raportu statystyk

- **{Skala statystyk}**: *select* - możliwość wyboru skali statystyk:
  - skala miesięczna statystyk
  - skala kwartalna statystyk
- **{Filtr zespołów}**: *multiselect* - filtrowanie pracowników po zespole:
  - dla kierownika zespołu: dostępny tylko jego zespół
  - dla administratora/szefa działu: możliwość wyboru dowolnej liczby zespołów
- **{Przycisk odświeżenia}** -> uruchamia funkcję wyświetlania statystyk zespołu Doradców Cesje w celu pobrania aktualnych danych

### Sekcja wyświetlania statystyk

- **{Tabela statystyk pracowników}**: tabela z danymi statystycznymi pracowników
  - Kolumny identyfikacyjne:
    - Imię i nazwisko (text)
    - Nazwa kierownika zespołu (text)
  - Kolumny statystyczne:
    - Plan podpisanych cesji (number)
    - Liczba podpisanych cesji (number)
    - Realizacja planu podpisanych cesji (percentage)
    - Liczba klientów do przelewów (number)
    - Liczba poleceń (number)
    - Rate poleceń (percentage)
    - Liczba rozmów OUT+IN (number)
    - Wypracowany etat (time)
    - Liczba dni roboczych (number)
    - Średnia liczba godzin dziennie (time)
    - Łączny czas rozmów (time)
    - Średni czas rozmowy (time)
    - Średni dzienny czas rozmowy (time)
    - Średnia liczba połączeń dziennie (number)
    - Czas efektywny rozmów (percentage)
  - **{Kolumna podsumowania}**: kolumna z podsumowaniem statystyk dla wybranych zespołów
    - Wyświetla wartości sumaryczne lub średnie dla wszystkich widocznych pracowników
  - Formatowanie warunkowe:
    - Kolory tła komórek zależne od wartości bazując na skali całego zespołu (zielony dla najlepszych wyników, czerwony dla najsłabszych)
    - Dotyczy kolumn: Realizacja planu podpisanych cesji, Rate poleceń, Średni dzienny czas rozmowy, Średnia liczba połączeń dziennie
    - Paski postępu w komórkach pokazujące wizualnie proporcje wartości
  - Akcje:
    - Sortowanie po dowolnym wierszu umożliwiające sortowanie pracowników wg statystyki, np. od pracownika z najwyższym planem cesji do pracownika z najniższym planem cesji
