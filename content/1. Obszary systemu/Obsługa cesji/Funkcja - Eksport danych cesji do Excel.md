---
Estimation: 10
---

## Cel

Funkcja umożliwia eksport danych wielu cesji wraz z powiązanymi leadami do pliku Excel według określonego szablonu.

## Warunki początkowe

- Użytkownik musi mieć dostęp do ekranu listy cesji
- Funkcja dostępna tylko dla administratora i szefa działu

## Przebieg główny

### Dane wejściowe

- Dane z ekranu listy cesji według ustawionych filtrów
- Szablon Excel do eksportu danych

### Kroki

1. System eksportuje dane do szablonu Excel zgodnie ze wzorem i z poniższymi modyfikacjami:
   - Dodanie kolumny z numerem telefonu klienta
   - kolumna "O" z szablonu: Odpowiedź z banku TAK / NIE
   - kolumny "P" i "Q" z szaablonu: nie są potrzebne, nie generujemy ich
   - Rozszerzenie kolumny opiekuna na dwie osobne kolumny: Opiekun leada i Opiekun cesji zgodnie z przypisanymi na dany moment doradcami
   - Kolumna "S": przy eksporcie do tej kolumny powinny wstawić się otwarte kredyty leada. W przypadku generowania więcej niż jednej cesji dla danego leada otwarte kredyty należy wstawić do pierwszej cesji. Należy dopisać również kwotę tego otwartego kredytu w tej kolumnie.
   - Kolumna "T": Należy wstawić kwoty zamkniętych kredytów z cesji
   - Kolumna "U": Należy wstawić datę ostatniego generowania dokumentu umowy cesji
   - kolumna "V": Należy wstawić datę ostatniej modyfikacji obiektu Cesji
   - kolumna "W": Należy wstawić źródło bazy leadów, z której pochodzi lead do którego należy cesja
   - kolumna "X": Nie eksportujemy tej kolumny
   - Nowa kolumna: status cesji
   - Nowa kolumna: status leada
   - Nowa kolumna: komentarze do cesji
   - Nowa kolumna: komentarze do leada
   - Nowa kolumna: Data otrzymania dokumentu cesji od klienta

### Dane wyjściowe

- Plik Excel zawierający wyeksportowane dane cesji według zmodyfikowanego szablonu

## Powiązania

- [[Ekran - Lista cesji]]
- Szablon Excel do generowania danych: [Szablon Excel do eksportu danych cesji](https://docs.google.com/spreadsheets/d/1BJwEwv-tcCWIIVP3iKRJCjCUFhtMzRkj/edit?usp=drive_link&ouid=112953634265814180095&rtpof=true&sd=true)
