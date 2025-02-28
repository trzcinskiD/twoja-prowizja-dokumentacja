---
Estimation: 4
---

## Cel

Umożliwienie konfiguracji i zarządzania celami miesięcznymi dla pracowników, zespołów lub globalnie.

## Warunki początkowe

- Użytkownik zalogowany w systemie
- Użytkownik posiada rolę Administrator lub Kierownik zespołu
- Dla kierownika zespołu - dostęp tylko do swojego zespołu

## Przebieg główny

### Dane wejściowe

- Miesiąc (data)
- ID zespołu (opcjonalne)
- ID pracownika (opcjonalne)
- Wartości celów:
  - Plan wordowy (number)
  - Plan raportów BIK (number)
  - Plan podpisanych cesji (number)

### Kroki

1. Sprawdź uprawnienia użytkownika:
   - Gdy Administrator → zezwól na pełny dostęp
   - Gdy Kierownik zespołu → sprawdź czy wybrany zespół jest jego zespołem
   - W przeciwnym razie → "Brak uprawnień do konfiguracji celów"

2. Walidacja danych wejściowych:
   - Sprawdź czy wszystkie wartości celów są liczbami całkowitymi większymi od 0
   - Sprawdź czy wybrany miesiąc nie jest z przeszłości
   - Sprawdź czy pracownik należy do wybranego zespołu (jeśli wybrano pracownika)

3. Zapisz cele:
   - Gdy wybrano konkretnego pracownika → zapisz cele indywidualne
   - Gdy wybrano tylko zespół → zapisz cele dla całego zespołu
   - Gdy nie wybrano zespołu (tylko administrator) → zapisz cele globalne

### Dane wyjściowe

- Status operacji (sukces/błąd)
- Komunikat potwierdzający lub informujący o błędzie
- Zaktualizowane wartości celów

## Powiązania

- [[Ekran - Konfiguracja celów zespołu]]
