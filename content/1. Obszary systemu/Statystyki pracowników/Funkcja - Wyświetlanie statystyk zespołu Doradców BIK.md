---
Estimation: 14
---

## Cel

Obliczanie i dostarczanie statystyk dla zespołu Doradców BIK do wyświetlenia na ekranie statystyk.

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
   - Otrzymana baza (ilość leadów) w tym miesiącu:
     - Pobierz liczbę leadów, które zostały przypisane do pracownika w wybranym okresie
     - Wykorzystaj tabelę historii zmian przypisania pracownika do leada
   - Plan wordowy:
     - Pobierz ustalony plan dla pracownika na dany miesiąc
   - Liczba wysłanych wordów:
     - Oblicz wszystkie leady danego doradcy klienta, których status zmienił się w wybranym okresie na "Wysłano paczkę informacyjną"
   - Word rate:
     - Oblicz: Liczba wysłanych wordów / plan wordowy * 100%
   - Średnio wordów na dzień:
     - Oblicz: Liczba wysłanych wordów / ilość dni roboczych, w których pracownik pracował
     - Zaokrąglij wynik do pełnej liczby
   - Numery nadań:
     - Pobierz listę zmian pola numer nadania przesyłki dla leadów danego doradcy klienta
     - Oblicz liczbę unikalnych leadów, w których nastąpiła zmiana numeru nadania
   - Plan raportów BIK:
     - Pobierz ustalony plan otrzymania raportów BIK dla pracownika na dany miesiąc
   - Liczba otrzymanych raportów BIK:
     - Oblicz ile w wybranym okresie leadów danego doradcy klienta zmieniło status z "Wysłano paczkę informacyjną" na "Otrzymano Raport BIK"
     - Uwzględnij tylko leady, które mają utworzoną co najmniej jedną cesję w tym okresie lub posiadają zmianę "Umowy kredytowe SKD" na "Posiada - dosłał"
   - Realizacja planu BIK:
     - Oblicz: liczba otrzymanych raportów BIK / Plan raportów BIK * 100%
   - Liczba poleceń:
     - Pobierz wartość wpisaną ręcznie przez kierownika zespołu
   - Rate poleceń:
     - Oblicz: liczba poleceń / liczba klientów do przelewów * 100%
   - SKD- Ilość pozyskanych klientów:
     - Pobierz listę zmian pola Umowy kredytowe SKD na wartość "Posiada - dosłał" dla leadów danego doradcy klienta
   - SKD rate:
     - Oblicz: SKD- Ilość pozyskanych klientów / Liczba otrzymanych raportów BIK * 100%
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
     - Suma otrzymanych leadów baza
     - Plan wordowy (suma planów indywidualnych)
     - Liczba wysłanych wordów
     - Numery nadań
     - Plan raportów BIK (suma planów indywidualnych)
     - Liczba otrzymanych raportów BIK
     - Liczba poleceń
     - SKD- Ilość pozyskanych klientów
     - Liczba rozmów OUT+IN
     - Liczba dni roboczych
     - Łączny czas rozmów
   - Statystyki wyliczane jako średnia ważona dla zespołu:
     - Word rate = (Suma wysłanych wordów zespołu / Suma planu wordowego zespołu) * 100%
     - Realizacja planu BIK = (Suma otrzymanych raportów BIK / Suma planu raportów BIK) * 100%
     - Rate poleceń = (Suma poleceń / Suma klientów do przelewów) * 100%
     - SKD rate = (Suma pozyskanych klientów SKD / Suma otrzymanych raportów BIK) * 100%
   - Statystyki wyliczane jako średnia arytmetyczna dla zespołu:
     - Średnio wordów na dzień
     - Wypracowany etat
     - Średnia liczba godzin dziennie
     - Średni czas rozmowy
     - Średni dzienny czas rozmowy
     - Średnia liczba połączeń dziennie
     - Czas efektywny rozmów

4. Przygotuj dane do formatowania warunkowego:
   - Dla kolumn z wartościami liczbowymi (Word rate, Realizacja planu BIK, Rate poleceń, SKD rate, Średni dzienny czas rozmowy, Średnia liczba połączeń dziennie):
     - Oblicz wartości minimalne i maksymalne w zespole
     - Przygotuj skalę kolorów od czerwonego (najsłabsze) do zielonego (najlepsze)

5. Uwzględnij dodatkowe zasady:
   - Wszystkie wskaźniki procentowe (rate) liczone są na podstawie sum zespołowych, a nie jako średnia wskaźników indywidualnych
   - Przy obliczaniu średnich uwzględnij tylko aktywnych pracowników w danym okresie
   - Statystyki czasowe (wypracowany etat, czasy rozmów) sumuj w sekundach, a dopiero końcowy wynik formatuj do formatu hh:mm:ss

### Dane wyjściowe

- Do [[Ekran - Wyświetlanie statystyk zespołu Doradców BIK]]:
  - Tabela z danymi statystycznymi dla każdego pracownika
  - Wiersz podsumowania z danymi statystycznymi dla całego zespołu/zespołów
  - Dane do formatowania warunkowego

## Powiązania

- Ekrany: [[Ekran - Wyświetlanie statystyk zespołu Doradców BIK]]
