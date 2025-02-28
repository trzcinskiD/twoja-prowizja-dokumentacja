---
Estimation: 8
---

## Cel

Automatyczne pobieranie i przetwarzanie danych o rozmowach pracowników z systemu Callyzer w celu aktualizacji statystyk i rejestrów rozmów w systemie.

## Warunki początkowe

- System posiada skonfigurowane połączenie z API Callyzer
- System ma zdefiniowany interwał czasowy pobierania danych (domyślnie 15 minut)
- W systemie są zarejestrowani aktywni doradcy z przypisanymi numerami telefonów

## Przebieg główny

### Dane wejściowe

- Lista aktywnych doradców z ich numerami telefonów
- Data ostatniej synchronizacji dla każdego doradcy
- Parametry konfiguracyjne:
  - Interwał czasowy (domyślnie 15 minut)

### Kroki

1. Pobierz listę aktywnych doradców z ich numerami telefonów:
   - Zbierz wszystkie numery telefonów doradców
   - Znajdź najstarszą datę ostatniej synchronizacji

2. Wykonaj zbiorcze zapytanie do API Callyzer:
   - Parametry:
     - emp_numbers: lista_wszystkich_numerów_doradców
     - start_date: najstarsza_data_synchronizacji
     - end_date: aktualna_data
   - Obsługa błędów:
     - Gdy błąd autoryzacji → zapisz log błędu i zakończ proces
     - Gdy timeout → zapisz log błędu i spróbuj ponownie (max 3 próby)
     - Gdy sukces → przetwórz dane

3. Dla każdej pobranej rozmowy:
   - Mapuj statusy:
     - "Incoming" → "Przychodzące"
     - "Outgoing" → "Wychodzące"
     - "Missed" → "Nieodebrane"
     - "Rejected" → "Odrzucone"

   - Spróbuj przypisać do leada:
     - Wyszukaj leada po numerze telefonu
     - Gdy znaleziono → zapisz w rejestrze rozmów leada
     - Gdy nie znaleziono → zapisz w tabeli nieprzetworzonych rozmów:
       - Numer telefonu
       - Data i czas rozmowy
       - Status
       - ID doradcy
       - Liczba prób przypisania
       - Data ostatniej próby

4. Pobierz zbiorcze statystyki doradców z API Callyzer:
   - Parametry:
     - emp_numbers: lista_wszystkich_numerów_doradców
     - start_date: najstarsza_data_synchronizacji
     - end_date: aktualna_data
   - Zapisz gotowe statystyki:
     - Liczba połączeń (przychodzące/wychodzące)
     - Łączny czas rozmów
   - Zaktualizuj datę ostatniej synchronizacji dla wszystkich doradców

5. Uruchom proces weryfikacji nieprzetworzonych rozmów:
   - Pobierz rozmowy z liczbą prób mniejszą od maksymalnej
   - Dla każdej rozmowy:
     - Spróbuj ponownie przypisać do leada
     - Zwiększ licznik prób
     - Aktualizuj datę ostatniej próby

### Dane wyjściowe

- Zaktualizowane statystyki doradców
- Zaktualizowane rejestry rozmów leadów
- Lista nieprzetworzonych rozmów do ponownej weryfikacji
- Logi z przebiegu synchronizacji

## Powiązania

- Ekrany: [[Ekran - Szczegóły leada]], [[Ekran - Wyświetlanie statystyk zespołu Doradców BIK]], [[Ekran - Wyświetlanie statystyk zespołu Doradców Cesje]]
- Dokumentacja API systemu Callyzer: [Link do dokumentacji API](https://developers.callyzer.co/)
