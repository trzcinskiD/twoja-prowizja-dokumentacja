---
Estimation: 3
---

# Element - Modal modyfikacji instytucji bankowej

## Przeznaczenie

- Służy do wprowadzania i edycji danych instytucji bankowej w systemie
- Wykorzystywany zarówno przy dodawaniu nowej instytucji jak i edycji istniejącej

## Struktura elementu

- {Nazwa instytucji}: *text* - nazwa instytucji bankowej
  - wymagane: "Nazwa jest wymagana"
  - min 3 znaki: "Nazwa musi mieć minimum 3 znaki"
- {NIP}: *text* - numer NIP
  - wymagane: "NIP jest wymagany"
  - format XXX-XXX-XX-XX: "Nieprawidłowy format NIP"
- {REGON}: *text* - numer REGON
  - wymagane: "REGON jest wymagany"
  - format XXXXXXXXX: "Nieprawidłowy format REGON"
- {KRS}: *text* - numer KRS
  - wymagane: "KRS jest wymagany"
  - format XXXXXXXXXX: "Nieprawidłowy format KRS"
- {Adres}: *textarea* - adres siedziby instytucji
  - wymagane: "Adres jest wymagany"
- {Status}: *checkbox* - określa czy instytucja jest aktywna
- {Przypisz szablon}: *select* - wybór szablonu do generowania umów cesji
- {Anuluj} -> zamyka modal bez zapisywania zmian
- {Zapisz} -> uruchamia zapisywanie zmian i zamyka modal
  - nieaktywny gdy występują błędy walidacji

## Stany

- **Domyślny**: wszystkie pola puste lub wypełnione danymi w trybie edycji
- **Błędy walidacji**: wyświetlane pod polami komunikaty błędów
- **Loading**: spinner na przycisku Zapisz, formularz zablokowany
