---
Estimation: 8
---

## Cel ekranu

- Wyświetlanie statystyk zespołu Doradców BIK
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
- **{Przycisk odświeżenia}** -> uruchamia funkcję wyświetlania statystyk zespołu Doradców BIK w celu pobrania aktualnych danych

### Sekcja wyświetlania statystyk

- **{Tabela statystyk pracowników}**: tabela z danymi statystycznymi pracowników
  - Kolumny identyfikacyjne:
    - Imię i nazwisko (text)
    - Nazwa kierownika zespołu (text)
  - Wiersze statystyczne:
    - Otrzymana baza (number)
    - Plan wordowy (number)
    - Liczba wysłanych wordów (number)
    - Word rate (percentage)
    - Średnio wordów na dzień (number)
    - Numery nadań (number)
    - Plan raportów BIK (number)
    - Liczba otrzymanych raportów BIK (number)
    - Realizacja planu BIK (percentage)
    - Liczba poleceń (number)
    - Rate poleceń (percentage)
    - SKD- Ilość pozyskanych klientów (number)
    - SKD rate (percentage)
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
    - Dotyczy kolumn: Word rate, Realizacja planu BIK, Rate poleceń, SKD rate, Średni dzienny czas rozmowy, Średnia liczba połączeń dziennie
    - Paski postępu w komórkach pokazujące wizualnie proporcje wartości
  - Akcje:
    - Sortowanie po dowolnym wierszu umożliwiające sortowanie pracowników wg statystyki, np. od pracownika z najwyższym planem BIK do pracownika z najniższym planem BIK
