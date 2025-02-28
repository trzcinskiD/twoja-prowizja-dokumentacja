---
Estimation: 6
---

## Cel

Wysyłanie różnego rodzaju powiadomień systemowych do użytkowników w zależności od zdefiniowanych zdarzeń i warunków biznesowych.

## Warunki początkowe

- Użytkownik, do którego kierowane jest powiadomienie, musi mieć aktywne konto w systemie
- Zdarzenie wyzwalające powiadomienie musi być zdefiniowane w systemie

## Przebieg główny

### Dane wejściowe

- {Typ powiadomienia}: określa rodzaj powiadomienia
- {ID użytkownika}: identyfikator odbiorcy powiadomienia
- {Dane kontekstowe}: dane specyficzne dla danego typu powiadomienia

### Kroki

1. Sprawdź typ powiadomienia i przygotuj treść:

   - **Przypomnienie o dacie kontaktu**
     - Wyzwalacz: Ustawienie daty następnego kontaktu w leadzie
     - Częstotliwość: Jednorazowo w dniu kontaktu
     - Odbiorcy: Przypisany doradca

   - **Przypomnienie o numerze nadania**
     - Wyzwalacz: Zmiana statusu leada na "WysłanoPaczkęInformacyjną" oraz brak numeru nadania w leadzie
     - Częstotliwość: Jednorazowo 48h po zmianie statusu
     - Odbiorcy: Przypisany doradca

   - **Nieaktywne leady**
     - Wyzwalacz: Brak modyfikacji leada przez  14 dni oraz brak przyszłej daty kontaktu w lead
     - Częstotliwość: Codziennie
     - Odbiorcy: Przypisany doradca, Kierownik zespołu

2. Zapisz powiadomienie w systemie:
   - Utwórz nowy rekord powiadomienia
   - Ustaw status jako nieprzeczytane
   - Zapisz datę utworzenia

### Dane wyjściowe

- Status wysyłki powiadomienia
- ID utworzonego powiadomienia
- Logi wysyłki powiadomień dodatkowymi kanałami

## Powiązania

- Elementy: [[Element - Modal powiadomień]]
