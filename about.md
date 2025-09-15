Budujemy cyfrową platformę dla pacjentek z rakiem piersi, która prowadzi je przez całą ścieżkę leczenia. Na starcie system wspiera lekarza w założeniu karty DiLO, automatyzując formalności. Przed operacją kalkulator AI ocenia indywidualne ryzyko powikłań, a po zabiegu moduł mobilny analizuje zdjęcia ran i ostrzega przed komplikacjami.

Pacjentki logują się bezpiecznie przez Profil Zaufany, a wszystkie dane są przechowywane w postaci pseudonimizowanych kont zgodnych z RODO. Dostęp dla lekarza odbywa się w prosty sposób: pacjentka pokazuje kod QR, a potwierdzenie przychodzi na jej telefon jako push-notyfikacja. Dzięki temu pacjentka zachowuje pełną kontrolę nad swoimi danymi.

To rozwiązanie łączy formalną ścieżkę onkologiczną z teleopieką i AI, zmniejsza ryzyko powikłań, oszczędza czas lekarzy i zwiększa poczucie bezpieczeństwa pacjentek. Zaczynamy od raka piersi, ale architektura jest skalowalna na inne nowotwory i kraje UE.


Podstawowe funkcjonalności
1. Autoryzacja i bezpieczeństwo

Logowanie pacjentek przez Profil Zaufany (login.gov.pl).

Logowanie lekarzy przez ZUS PUE / RPWDL / login.gov.pl.

Pseudonimizacja kont pacjentek – dane osobowe oddzielone od danych klinicznych, zgodnie z RODO.

Krótkotrwałe tokeny i audyt wszystkich dostępów.

2. Ścieżka onkologiczna / DiLO

Zakładanie i obsługa karty DiLO – automatyczne uzupełnianie danych, przypomnienia o badaniach, status online.

Checklisty diagnostyczne zgodne z wytycznymi ESMO/NCCN i NFZ.

Harmonogram badań i wizyt.

3. Wsparcie przedoperacyjne

Kalkulator ryzyka powikłań AI – predykcja na podstawie danych klinicznych pacjentki.

Rekomendacje profilaktyczne (np. zaprzestanie palenia, optymalizacja BMI).

4. Opieka pooperacyjna

Monitoring ran – pacjentka robi zdjęcia, AI ocenia proces gojenia i wykrywa objawy infekcji.

Dziennik objawów i samopoczucia – raportowanie bólu, gorączki, jakości życia.

Alerty dla lekarza/pielęgniarki – priorytetyzacja przypadków wymagających uwagi.

5. Udostępnianie danych i komunikacja

Kody QR – pacjentka generuje QR, lekarz skanuje, a dostęp potwierdzany jest push-notyfikacją.

Historia udostępnień – pacjentka widzi komu i kiedy udostępniła dane, z możliwością cofnięcia dostępu.

Teleopieka – czat, wideokonsultacje, powiadomienia o kontrolach i lekach.

6. Dla lekarzy i placówki

Lista pacjentek i statusy ścieżki (DiLO, diagnostyka, operacja, follow-up).

Przegląd zdjęć ran z AI-priorytetyzacją (zielone/żółte/czerwone).

Notatki i integracja z HIS/EHR (FHIR/HL7).

Analityka: powikłania, czasy reakcji, wskaźniki jakości leczenia.

1. Widoki wspólne

Ekran powitalny – wybór roli: pacjentka / lekarz / administrator.

Logowanie

Pacjentka → Profil Zaufany (login.gov.pl).

Lekarz → logowanie przez ZUS PUE / RPWDL / login.gov.pl.

Admin → konto instytucjonalne.

Panel główny (dashboard) – skrót: status ścieżki (DiLO, diagnostyka, operacja, follow-up), ostatnie aktywności, powiadomienia.

2. Widoki pacjentki

Moja ścieżka – graficzna oś czasu: DiLO → diagnostyka → operacja → rekonwalescencja → follow-up.

Karta DiLO – podgląd, status, terminy badań, możliwość pobrania dokumentów.

Diagnostyka – lista wykonanych / planowanych badań, integracja z e-skierowaniami.

Kalkulator ryzyka – wynik AI zrozumiale pokazany (np. niskie / średnie / wysokie ryzyko).

Monitorowanie rany – robienie zdjęć, AI-ocena (OK / obserwuj / pilny kontakt).

Dziennik objawów – codzienne notowanie bólu, gorączki, nastroju.

Udostępnianie danych

„Wygeneruj QR” – pacjentka pokazuje kod lekarzowi.

„Potwierdź dostęp” – push-notyfikacja z prośbą od lekarza (Zezwól / Odrzuć).

„Historia udostępnień” – kto i kiedy miał dostęp, możliwość cofnięcia.

Komunikacja – czat, wideokonsultacje, przypomnienia o lekach i wizytach.

Edukacja – materiały dostosowane do etapu leczenia.

Ustawienia / prywatność – zgody, anonimizacja, możliwość pobrania/wyeksportowania danych.

3. Widoki lekarza / pielęgniarki

Lista pacjentek – status ścieżki (np. „Diagnostyka w toku”, „7 dzień po operacji”).

Panel pacjentki

Karta DiLO, badania, notatki, plan leczenia.

Wynik kalkulatora ryzyka.

Zdjęcia ran z priorytetyzacją AI.

Alerty – np. „Podejrzenie infekcji – pilny kontakt”.

Skanuj QR – prośba o dostęp do danych pacjentki.

Oczekiwanie na zgodę – status: czekamy na zatwierdzenie pacjentki.

Podgląd danych – tylko zakres zaakceptowany (np. rana + DiLO, bez danych osobowych).

Telekonsultacje – czat / wideo / możliwość wpisania notatki.

Panel analityczny – statystyki jakości (powikłania, średni czas reakcji, aktywność pacjentek).

4. Widoki administratora (placówka)

Zarządzanie użytkownikami – dodawanie lekarzy, przypisywanie pacjentek.

Raporty i integracja – eksport do NFZ / HIS (FHIR/HL7).

Historia udostępnień i logi – audyt dostępu przez QR, zgody pacjentek.

Rozliczenia – raporty dla NFZ, fakturowanie SaaS.