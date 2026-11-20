# Testare rapidă (2 minute) — Verificator de compatibilitate UR20

Prototip demonstrativ. Folosiți numai date fictive.

## 1. Cazul normal
1. Deschideți aplicația și apăsați **Exemplu normal**, apoi **Calculează**.
2. Rezultat așteptat: insignă verde „În limitele testate”, 1 celulă (rata testată 7,4 găleți/min), 3.360 găleți/schimb, 76,4 paleți/schimb (44 găleți pe palet), 43,7 t ridicate manual/schimb și 131,0 t/zi.
3. Verificați checklist-ul de validare (✓ / !) și avertismentul „Un robot mai rapid nu crește debitul fabricii”.

## 2. Date greșite (validare)
1. Apăsați **Înapoi/Modifică datele**, apoi **Exemplu cu date greșite** și **Calculează**.
2. Rezultat așteptat: mesaje de eroare în română sub greutate (gol), debit (-5) și ore (30); focusul merge pe primul câmp greșit; nu apare niciun rezultat.

## 3. Alte greutăți
- Greutate **14 kg**, debit 7: insignă galbenă „Necesită validare tehnică”.
- Greutate **16 kg**, debit 7: insignă roșie „Nepotrivit pentru UR20 în configurația testată”.
- Greutate **5 kg**, debit **12**: 2 celule (12 / 8,6 → 2), 100 găleți pe palet.

## 4. Cerere de evaluare
1. Din rezultat apăsați **Solicită evaluare tehnică**.
2. Apăsați **Trimite cererea** fără date: apar erori la Companie, Nume, E-mail și consimțământ.
3. Apăsați **Completează date fictive** și **Trimite cererea**.
4. Rezultat așteptat: scor de calificare (ex. 100/100 – „Cerere relevantă”), pasul următor (simulat), rezumatul cererii.
5. Testați **Descarcă rezumat (.txt)**, **Adaugă în calendar (.ics)**, contorul „Cereri salvate local în acest prototip: N” și **Șterge datele**.

## 5. Mobil, offline, instalare
- Deschideți la lățime 375 px: fără derulare orizontală, butoane ≥ 44 px.
- După prima încărcare, opriți rețeaua și reîncărcați: aplicația funcționează offline.
- În Chrome/Edge apare butonul **Instalează aplicația** (când este disponibil).

## Rulare locală
`cd app` apoi `python -m http.server 8765` și deschideți http://localhost:8765/
