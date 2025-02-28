---
Estimation: 2
---

## Cel

Wysłanie automatycznego maila z prośbą o lepszej jakości dokumenty

## Warunki początkowe

- Scoring jakości poniżej wymaganego progu
- Lead ma zapisany adres email

## Przebieg główny

### Dane wejściowe

- ID leada
- Lista plików z niskim scoringiem
- Szablon maila zawierający:
  - Powitanie personalizowane imieniem
  - Informację o problemie z jakością
  - Listę dokumentów wymagających ponownego przesłania
  - Porady dotyczące wykonywania zdjęć:
    - Dobre oświetlenie
    - Unikanie cieni
    - Prostowanie dokumentu
    - Unikanie odbłysków
  - Informację o sposobie przesłania nowych dokumentów

### Kroki

1. Pobierz dane kontaktowe leada
2. Przygotuj treść maila na podstawie szablonu
3. Wyślij maila
4. Zapisz informację o wysłaniu prośby w historii leada w postaci komentarza do leada

### Dane wyjściowe

- Status wysyłki maila
- Zapis w komentarzach do leada

## Powiązania

- Ekrany: [[Ekran - OCR dokumentów z BIK]]
