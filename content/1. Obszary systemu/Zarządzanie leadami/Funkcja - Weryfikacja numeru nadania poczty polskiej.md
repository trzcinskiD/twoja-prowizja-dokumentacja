---
Estimation: 4
---

# Funkcja - Weryfikacja numeru nadania poczty polskiej

## Cel

Funkcja służy do weryfikacji istnienia przesyłki w systemie Poczty Polskiej oraz pobrania jej aktualnego statusu poprzez API Poczty Polskiej.

## Warunki początkowe

- System posiada skonfigurowane i działające połączenie z API Poczty Polskiej
- Użytkownik ma uprawnienia do wykonywania zapytań do API Poczty Polskiej:
  - Administrator
  - Kierownik zespołu
  - Doradca klienta BIK przypisany do leada
- Numer nadania jest w formacie akceptowanym przez Pocztę Polską

## Przebieg główny

### Dane wejściowe

- Z ekranu [[Ekran - Szczegóły leada]]:
  - {Numer nadania}: numer przesyłki do zweryfikowania
    - Walidacje:
      - Pole wymagane: "Wprowadź numer nadania"
      - Format numeru: "Nieprawidłowy format numeru nadania"

### Kroki

1. Waliduj format wprowadzonego numeru nadania:
   - Gdy format niepoprawny → wyświetl komunikat "Nieprawidłowy format numeru nadania" i przerwij
   - Gdy numer pusty → wyświetl komunikat "Wprowadź numer nadania" i przerwij

2. Wykonaj zapytanie do API Poczty Polskiej:
   - Gdy błąd połączenia → wyświetl komunikat "Nie można połączyć się z systemem Poczty Polskiej. Spróbuj ponownie później."
   - Gdy timeout → wyświetl komunikat "Przekroczono czas oczekiwania na odpowiedź. Spróbuj ponownie."
   - Gdy błąd autoryzacji → wyświetl komunikat "Błąd autoryzacji w systemie Poczty Polskiej. Skontaktuj się z administratorem."

3. Sprawdź odpowiedź z API:
   - Gdy przesyłka nie istnieje → wyświetl komunikat "Przesyłka o podanym numerze nie istnieje w systemie Poczty Polskiej"
   - Gdy przesyłka istnieje →
     - Zapisz status przesyłki w systemie
     - Wyświetl komunikat "Status przesyłki: [status]"
     - Zaktualizuj pole {Status przesyłki} na ekranie szczegółów leada

### Dane wyjściowe

- Komunikat o statusie operacji
- Zaktualizowany status przesyłki w systemie:
  - Status przesyłki
    - W przypadku, gdy status przesyłki z poczty polskiej nie odpowiada statusom przesyłki w aplikacji należy przygotować mapowanie statusów
  - Data ostatniej aktualizacji statusu
  - Historia zmian statusów (jeśli dostępna w API)

## Powiązania

- Ekrany: [[Ekran - Szczegóły leada]]
- API: [[Poczta polska API]]
