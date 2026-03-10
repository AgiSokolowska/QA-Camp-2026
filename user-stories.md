# 🧙‍♂️ User Stories – Kreator Postaci / Drużyny

## 1️⃣ Tworzenie postaci
**Jako** gracz  
**chcę** wpisać imię swojej postaci, wybrać jej rasę oraz klasę i umiejętności
**aby** móc stworzyć unikalnego bohatera w drużynie.  

**Kryteria akceptacji:**  
- Imię jest obowiązkowe oraz unikalne (domyślnie nadane jako „Bezimienny” jeśli puste).  
- Można wybrać jedną z kilku ras i klas oraz umiejętności.  
- Po kliknięciu „Dodaj postać” dane trafiają do listy postaci.
- Każde pole powinno mieć odpowiedni opis

---

## 2️⃣ Walidacja pól
**Jako** gracz  
**chcę** otrzymywać komunikaty, gdy zapomnę wybrać klasę lub nie rozdam wszystkich punktów  
**aby** wiedzieć, co muszę poprawić przed utworzeniem postaci.  

**Kryteria:**  
- Brak klasy → popup z komunikatem.  
- Pozostałe punkty → popup z informacją o liczbie niewykorzystanych punktów.  

---

## 3️⃣ Limit drużyny
**Jako** gracz  
**chcę** mieć ograniczenie do 4 postaci w drużynie  
**aby** utrzymać balans i prostotę zarządzania drużyną.  

**Kryteria:**  
- Próba dodania 5. postaci wyświetla komunikat o limicie.  
- Nową postać można dodać dopiero po usunięciu innej.  

---

## 4️⃣ Zarządzanie punktami cech
**Jako** gracz  
**chcę** rozdysponować 15 punktów pomiędzy Siłę, Spryt, Energię i Zdrowie  
**aby** dostosować styl gry mojej postaci.  

**Kryteria:**  
- Każda cecha ma zakres 1–20.  
- Interfejs pokazuje liczbę pozostałych punktów.  
- Nie można przekroczyć limitu 55 punktów w sumie.  

---

## 5️⃣ Zapisywanie drużyny
**Jako** gracz  
**chcę** żeby moje postacie zapisywały się automatycznie w przeglądarce  
**aby** po odświeżeniu strony nadal były dostępne.  

**Kryteria:**  
- Dane postaci są przechowywane w `localStorage`.  
- Lista postaci ładuje się automatycznie po otwarciu strony.  

---

## 6️⃣ Wyświetlanie postaci
**Jako** gracz  
**chcę** widzieć listę moich postaci w formie kart z obrazkami i statystykami  
**aby** móc przeglądać drużynę w czytelny sposób.  

**Kryteria:**  
- Każda karta zawiera imię, rasę, klasę, cechy i grafikę.  
- Karty pojawiają się z animacją.  

---

## 7️⃣ Usuwanie postaci
**Jako** gracz  
**chcę** usuwać postacie z drużyny  
**aby** móc w ich miejsce dodać nowe.  

**Kryteria:**  
- Kliknięcie „Usuń” usuwa postać z listy i z `localStorage`.  
- Interfejs aktualizuje się natychmiast po usunięciu.  

---

## 8️⃣ Ochrona unikalności imienia
**Jako** gracz  
**chcę** żeby nie można było stworzyć dwóch postaci o tym samym imieniu  
**aby** każda była unikalna.  

**Kryteria:**  
- System porównuje imię niezależnie od wielkości liter.  
- W przypadku duplikatu pokazuje popup z błędem.  

---

## 9️⃣ Interaktywne wybieranie klasy
**Jako** gracz  
**chcę** wybierać klasę klikając w graficzną ikonę (np. wojownik, mag, łotrzyk)  
**aby** proces był intuicyjny i wizualny.  

**Kryteria:**  
- Kliknięta klasa podświetla się (efekt `.selected`).  
- Tylko jedna klasa może być aktywna w danym momencie.  

---

## 🔟 Komunikaty i popupy
**Jako** gracz  
**chcę** widzieć komunikaty w ładnym popupie  
**aby** wiedzieć, co zrobiłem źle lub co się udało.  

**Kryteria:**  
- Popup pojawia się na środku ekranu.  
- Można go zamknąć przyciskiem „Zamknij”.  
- Używany do błędów (brak klasy, limit, duplikat itd.).  
