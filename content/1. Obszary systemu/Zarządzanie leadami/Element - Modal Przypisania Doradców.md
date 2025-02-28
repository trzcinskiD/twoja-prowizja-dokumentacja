---
Estimation: 2
---

## Przeznaczenie

- Służy do przypisania wybranych leadów do doradcy poprzez wybór z listy dostępnych doradców oraz prezentuje podsumowanie operacji
- Uprawnienia: Funkcja dostępna dla Administratora, Szefa działu oraz Kierownika zespołu

## Struktura elementu

### Nagłówek

- Tytuł modalu "Przypisanie leadów do doradcy"
- {Licznik wybranych leadów} - "Wybrano X leadów"

### Sekcja podsumowania

- {Liczba wybranych leadów} - "Wybrano X leadów do przypisania"
- {Lista paczek} - informacja o źródłowych paczkach leadów (tylko gdy wybrane leady z różnych paczek)

### Sekcja wyboru doradcy

- {Lista doradców z wyszukiwaniem}: *select* - wybór doradcy z rozwijanej listy filtrowanej po imieniu/nazwisku doradcy
  - Walidacje:
    - pole wymagane: "Wybierz doradcę z listy"
  - Format pozycji na liście: "Imię Nazwisko (liczba przypisanych leadów)"

### Sekcja przycisków

- {Anuluj}: *button* -> zamyka modal bez zapisywania
- {Przypisz}: *button* -> uruchamia przypisanie leadów do doradcy
  - Stan disabled gdy:
    - Nie wybrano doradcy
    - Trwa proces przypisywania

## Stany

- **Domyślny**:
  - Lista doradców załadowana
  - Przycisk "Przypisz" nieaktywny
- **Doradca wybrany**:
  - Lista doradców z zaznaczonym wyborem
  - Przycisk "Przypisz" aktywny
- **W trakcie przypisywania**:
  - Wyświetlony wskaźnik ładowania
  - Wszystkie pola zablokowane
  - Przyciski nieaktywne
