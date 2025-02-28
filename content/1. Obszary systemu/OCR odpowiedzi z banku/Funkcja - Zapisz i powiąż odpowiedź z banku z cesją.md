---
Estimation: 7
---

## Cel

Zapisanie przetworzonych danych z odpowiedzi banku i powiązanie ich z wybraną cesją.

## Warunki początkowe

- Dokument został przetworzony przez OCR
- Użytkownik zweryfikował i ewentualnie skorygował odczytane dane
- Wybrano cesję do powiązania
- Użytkownik ma uprawnienia do modyfikacji cesji

## Przebieg główny

### Dane wejściowe

- ID dokumentu OCR
- ID wybranej cesji
- Zweryfikowane dane z odpowiedzi banku przedstawione na ekranie [[Ekran - OCR odpowiedzi z banku]]

### Kroki

1. Walidacja danych wejściowych:
   - Sprawdź czy wszystkie wymagane pola są wypełnione
   - Gdy brak wymaganych danych → zwróć błąd walidacji

2. Aktualizacja rekordu DokumentOCR:
   - Ustaw status na "PrzetworzonyPoprawnie"
   - Zapisz ostateczną wersję odczytanych danych

3. Zapisz podstawowe informacje do cesji:
   - Numer zgłoszenia/reklamacji
   - Data otrzymania odpowiedzi
   - Status otrzymania odpowiedzi
   - Informacja o ubezpieczeniu

4. Jeśli są kwoty łączne w odpowiedzi:
   - Zapisz w sekcji danych finansowych cesji:
     - Łączna kwota prowizji i odsetek z odpowiedzi
     - Łączna kwota razem z odpowiedzi
     - Dodaj informację w komentarzu o kwotach łącznych

5. Jeśli są informacje o konkretnych kredytach:
   - Dla każdej znalezionej umowy kredytowej:
     - Znajdź odpowiadającą umowę w cesji
     - Gdy znaleziono:
       - Zaktualizuj kwotę prowizji i odsetek
       - Ustaw datę odpowiedzi banku
       - Dodaj informację w komentarzu o aktualizacji
     - Gdy nie znaleziono:
       - Dodaj informację w komentarzu o braku dopasowania

6. Dodaj komentarz podsumowujący:
   - Jakie informacje zawierała odpowiedź (łączne/szczegółowe/obie)
   - Które kredyty zostały zaktualizowane
   - Jakie kwoty łączne zapisano
   - Wynik reklamacji

7. Utwórz powiązanie Cesji z dokumentami

### Dane wyjściowe

- Status operacji (sukces/błąd)
- W przypadku sukcesu przenieś użytkownika do zaktualizowanej cesji
- W przypadku błędu wyświetl szczegółowy opis błędu

## Powiązania

- Ekrany:
  - [[Ekran - OCR odpowiedzi z banku]]
  - [[Ekran - Szczegóły Cesji]]
