---
Estimation: 6
---

## Cel

Generowanie paczek informacyjnych dla jednego lub wielu leadów w formie spakowanych plików. Doradca może wygenerować paczkę informacyjną maksymalnie 2 razy dla jednego Leada.

## Warunki początkowe

- Użytkownik jest przypisanym Doradcą BIK lub Kierownikem zespołu, Administrator, Szef działu
- Wybrane leady istnieją w systemie

## Przebieg główny

### Dane wejściowe

- Lista ID leadów
- ID użytkownika generującego (opiekuna)

### Kroki

1. Sprawdź uprawnienia użytkownika dla każdego leada:
   - Gdy Kierownik zespołu, Administrator, Szef działu → Kontynuuj
   - Gdy przypisany Doradca BIK→ Sprawdź czy lead jest przypisany oraz, czy Doradca BIK nie generował już paczki dla tego Leada 2 razy
   - W przeciwnym razie → Pomiń leada i dodaj do listy błędów

2. Pobierz dane do paczki informacyjnej dla każdego leada:
   - Dane opiekuna:
     - Imię i nazwisko
     - Numer telefonu
     - adres (ulica, nr domu, nr mieszkania, kod pocztowy, miasto)

3. Generuj paczkę:
   - Utwórz folder/y "Imię i nazwisko doradcy BIK przypisanego do leada"
   - Dla każdego leada:
     - Wygeneruj spersonalizowaną etykietę adresową w formacie Word z nazwą "{Imię Klienta}_{Nazwisko Klienta}" do naklejenia na kopertę wraz z:
       - danymi doradcy klienta
       - baza źródłowa
       - komentarzem Word, który jest przypisany do leada
     - Zmień status leada na "Wysłano paczkę informacyjną" tylko ze statusu "Zainteresowany"
     - Zapisz dane audytowe

4. Spakuj wszystkie foldery do archiwum ZIP:
   - Nazwa pliku: "paczki_informacyjne_{timestamp}.zip"

5. Uruchom pobieranie pliku ZIP przez przeglądarkę

6. Sprawdź status operacji:
   - Gdy sukces → "Wygenerowano paczki informacyjne. Pobieranie rozpoczęte."
   - Gdy częściowy sukces → "Wygenerowano paczki informacyjne z błędami: {lista_błędów}"
   - Gdy błąd → "Wystąpił błąd podczas generowania paczek informacyjnych: {błąd}"

### Dane wyjściowe

- Status operacji (sukces/częściowy sukces/błąd)
- Plik ZIP z folderami zawierającymi dokumenty

## Powiązania

- Ekrany:
  - [[Ekran - Szczegóły leada]]
  - [[Ekran - Lista leadów]]
- Pliki:
  - przykładowy plik z etykietą adresową: [Link do folderu](https://drive.google.com/drive/folders/1B4BVk4RH29i1hD0Y1RHwqlp_XIueES3o?usp=drive_link)
