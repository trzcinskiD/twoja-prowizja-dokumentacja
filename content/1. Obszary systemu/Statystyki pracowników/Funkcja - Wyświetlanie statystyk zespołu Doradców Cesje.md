---
Estimation: 10
---
## Cel

Obliczanie i dostarczanie statystyk dla zespołu Doradców Cesje do wyświetlenia na ekranie statystyk.

## Warunki początkowe

- Użytkownik musi mieć uprawnienia do przeglądania statystyk (Administrator, Szef działu lub Kierownik zespołu)
- Kierownik zespołu może przeglądać statystyki tylko dla swojego zespołu
- Administrator i Szef działu mogą przeglądać statystyki dla dowolnych zespołów

## Przebieg główny

### Dane wejściowe

- Wybrana skala statystyk (miesięczna/kwartalna)
- Wybrane zespoły do wyświetlenia

### Kroki

1. Pobierz listę pracowników z wybranych zespołów
2. Dla każdego pracownika oblicz następujące statystyki:
   - Plan podpisanych cesji:
     - Pobierz ustalony plan podpisanych cesji leadów danego doradcy klienta na wybrany okres
   - Liczba podpisanych cesji:
     - Pobierz listę zmian pola status cesji dla leadów danego doradcy klienta
     - Oblicz liczbę unikalnych cesji, w których nastąpiła zmiana statusu na "Klient podpisał cesję"
     - Uwzględnij zasady przypisywania cesji do odpowiedniego miesiąca:
       - Doradca ma czas do końca kolejnego miesiąca na załatwienie podpisania cesji przez klienta
       - W przypadku przeniesienia cesji na innego doradcę:
         - Data przepięcia cesji na drugiego doradcę zmienia się na dzień przepięcia
         - Dla nowego doradcy liczy się analogicznie jakby "powstała" i została przypięta do niego tego dnia
         - Statystyka u starego doradcy, który miał pierwotnie przypisaną daną cesję, nie zmienia się
   - Realizacja planu podpisanych cesji:
     - Oblicz: Liczba podpisanych cesji / Plan podpisanych cesji * 100%
   - Liczba klientów do przelewów:
     - Pobierz listę zmian pola czy można wysłać przelew do klienta dla leadów danego doradcy klienta
     - Oblicz liczbę unikalnych cesji, w których nastąpiła zmiana statusu na "Tak"
   - Liczba poleceń:
     - Pobierz wartość wpisaną ręcznie przez kierownika zespołu
   - Rate poleceń:
     - Oblicz: liczba poleceń / liczba klientów do przelewów * 100%
   - Liczba rozmów OUT+IN:
     - Pobierz liczbę rozmów dla leadów danego doradcy klienta w wybranym okresie z aplikacji Callyzer
   - Wypracowany etat (hh:mm:ss) minus szkolenia etc:
     - Pobierz wypracowany etat doradcy klienta w wybranym okresie minus szkolenia etc. z ewidencji czasu pracy
   - Liczba dni roboczych:
     - Pobierz liczbę przepracowanych dni roboczych w wybranym okresie przez pracownika z ewidencji czasu pracy
   - Średnia liczba godzin dziennie:
     - Oblicz: wypracowany etat (hh:mm:ss) minus szkolenia etc / liczba dni roboczych
   - Łączny czas rozmów:
     - Pobierz czas rozmów dla leadów danego doradcy klienta w wybranym okresie z aplikacji Callyzer
   - Średni czas rozmowy:
     - Oblicz: Łączny czas rozmów / Liczba rozmów OUT+IN
   - Średni dzienny czas rozmowy:
     - Oblicz: Łączny czas rozmów / Liczba dni roboczych
   - Średnia liczba połączeń dziennie:
     - Oblicz: Liczba rozmów OUT+IN / Liczba dni roboczych
   - Czas efektywny rozmów:
     - Oblicz: Łączny czas rozmów / wypracowany etat (hh:mm:ss) minus szkolenia etc * 100%

3. Oblicz statystyki podsumowujące dla zespołu:
   - Statystyki sumowane dla zespołu:
     - Plan podpisanych cesji
     - Liczba podpisanych cesji
     - Liczba klientów do przelewów
     - Liczba poleceń
     - Liczba rozmów OUT+IN
     - Liczba dni roboczych
     - Łączny czas rozmów
   - Statystyki wyliczane jako średnia ważona dla zespołu:
     - Realizacja planu podpisanych cesji = (Suma podpisanych cesji / Suma planu podpisanych cesji) * 100%
     - Rate poleceń = (Suma poleceń / Suma klientów do przelewów) * 100%
   - Statystyki wyliczane jako średnia arytmetyczna dla zespołu:
     - Wypracowany etat
     - Średnia liczba godzin dziennie
     - Średni czas rozmowy
     - Średni dzienny czas rozmowy
     - Średnia liczba połączeń dziennie
     - Czas efektywny rozmów

4. Przygotuj dane do formatowania warunkowego:
   - Dla kolumn z wartościami liczbowymi (Realizacja planu podpisanych cesji, Rate poleceń, Średni dzienny czas rozmowy, Średnia liczba połączeń dziennie):
     - Oblicz wartości minimalne i maksymalne w zespole
     - Przygotuj skalę kolorów od czerwonego (najsłabsze) do zielonego (najlepsze)

5. Uwzględnij dodatkowe zasady:
   - Wszystkie wskaźniki procentowe (rate) liczone są na podstawie sum zespołowych, a nie jako średnia wskaźników indywidualnych
   - Przy obliczaniu średnich uwzględnij tylko aktywnych pracowników w danym okresie
   - Statystyki czasowe (wypracowany etat, czasy rozmów) sumuj w sekundach, a dopiero końcowy wynik formatuj do formatu hh:mm:ss

### Dane wyjściowe

- Do [[Ekran - Wyświetlanie statystyk zespołu Doradców Cesje]]:
  - Tabela z danymi statystycznymi dla każdego pracownika
  - Wiersz podsumowania z danymi statystycznymi dla całego zespołu/zespołów
  - Dane do formatowania warunkowego

## Powiązania

- Ekrany: [[Ekran - Wyświetlanie statystyk zespołu Doradców Cesje]]
- Dokumenty: [Plik Google Sheet wyjaśniający jak obliczać statystykę liczby cesji](https://docs.google.com/spreadsheets/d/16WxItXvID-yxwI4NFMPDpypjBrBKje8a/edit?usp=drive_link&ouid=112953634265814180095&rtpof=true&sd=true)
