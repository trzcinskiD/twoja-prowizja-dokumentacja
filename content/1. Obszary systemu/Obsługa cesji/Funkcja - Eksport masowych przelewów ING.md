---
Estimation: 4
---

## Cel

Generowanie pliku z masowymi przelewami w formacie akceptowanym przez system ING dla wybranych cesji

## Warunki początkowe

- Użytkownik ma uprawnienia do eksportu przelewów
- Wybrane cesje spełniają warunki do wysłania przelewu:
  - Posiadają numer cesji
  - Posiadają kwotę przelewu
  - Posiadają numer konta klienta
  - Nie są oznaczone jako "Przekaz pocztowy"
- Przelew dla cesji nie został jeszcze wysłany
- Dla aneksów cesji:
  - Posiadają kwotę aneksu cesji
  - Posiadają numer konta
  - Posiadają tytuł przelewu
  - Przelew aneksu nie został jeszcze wysłany
  - Nie są oznaczone jako "Przekaz pocztowy"

## Przebieg główny

### Dane wejściowe

- Lista wybranych cesji (id[]): identyfikatory wybranych cesji
- {Numer konta Twoja Prowizja}: *string* - numer konta, z którego wysyłane są przelewy, stała ustalona wartość

### Kroki

1. Sprawdź uprawnienia użytkownika do eksportu przelewów
   - Gdy brak uprawnień → komunikat "Brak uprawnień do eksportu przelewów"

2. Zweryfikuj cesje:
   - Dla każdej cesji sprawdź czy:
     - Posiada numer cesji → jeśli nie, dodaj do listy błędów "Brak numeru cesji dla cesji {numer cesji}"
     - Posiada kwotę przelewu → jeśli nie, dodaj do listy błędów "Brak kwoty przelewu dla cesji {numer cesji}"
     - Posiada numer konta → jeśli nie, dodaj do listy błędów "Brak numeru konta dla cesji {numer cesji}"
     - Przelew nie został jeszcze wysłany → jeśli tak, dodaj do listy błędów "Przelew już został wysłany dla cesji {numer cesji}"
   - Dla każdej cesji sprawdź czy ma aneks do przelewu:
     - Jeśli jest aneks cesji:
       - Sprawdź czy posiada kwotę aneksu → jeśli nie, dodaj do listy błędów "Brak kwoty aneksu dla cesji {numer cesji}"
       - Sprawdź czy posiada numer konta → jeśli nie, dodaj do listy błędów "Brak numeru konta dla aneksu cesji {numer cesji}"
       - Sprawdź czy posiada tytuł przelewu → jeśli nie, dodaj do listy błędów "Brak tytułu przelewu dla aneksu cesji {numer cesji}"
       - Sprawdź czy przelew aneksu nie został wysłany → jeśli tak, dodaj do listy błędów "Przelew aneksu już został wysłany dla cesji {numer cesji}"
   - Gdy lista błędów niepusta → wyświetl komunikat z listą błędów i przerwij

3. Przygotuj dane do eksportu:
   - Przygotuj listę przelewów:
     1. Przelewy standardowe:
        - Pogrupuj cesje po kliencie (numer konta i nazwa)
        - Dla każdej grupy:
          - Podziel cesje na podgrupy po maksymalnie 3 cesje
          - Dla każdej podgrupy:
            - Zsumuj kwoty przelewów
            - Utwórz tytuł przelewu w formacie: "{numerCesji} - {kwota} | {numerCesji} - {kwota} | {numerCesji} - {kwota}"
     2. Przelewy aneksów:
        - Dla każdej cesji z aneksem utwórz osobny wiersz z:
          - Kwotą aneksu
          - Numerem konta z aneksu
          - Tytułem przelewu z aneksu

4. Wygeneruj plik CSV:
   - Kodowanie UTF-8
   - Format linii: pole1;pole2;pole3;pole4;pole5
   - Najpierw zapisz wszystkie zgrupowane przelewy standardowe
   - Następnie zapisz wszystkie przelewy aneksów

5. Zapisz plik z nazwą: "przelewy_ing_{timestamp}.csv"

### Dane wyjściowe

- Plik CSV z przelewami
  - Nazwa: przelewy_ing_{timestamp}.csv
  - Kodowanie: UTF-8
  - Format: pola rozdzielone średnikiem
  - Struktura wiersza:
    1. Kwota łączna przelewu
    2. Nazwa klienta
    3. Numer konta nadawcy
    4. Numer konta odbiorcy
    5. Tytuł przelewu (zawierający numery cesji i kwoty cząstkowe)
- Komunikat z błędami, w przypadku gdy lista błędów niepusta

## Powiązania

- Ekrany: [[Ekran - Lista Cesji]]
- Przykładowy format pliku CSV:

1050;"Trawnicki Wojciech";"93105010121000009032519911";"97109027500000000148014405";"UW398/09/2024 - 50 | UW399/09/2024 - 475 | UW400/09/2024 - 525"
525;"Trawnicki Wojciech";"93105010121000009032519911";"97109027500000000148014405";"UW401/09/2024 - 475 | UW402/09/2024 - 50"
100;"Kowalski Jan";"93105010121000009032519911";"12345678901234567890123456";"Aneks do cesji UW403/09/2024"
