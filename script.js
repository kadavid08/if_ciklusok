function feladat1() {
    let szam = Number(prompt("Írj be egy számot:"));
    let doboz = document.querySelector("#eredmeny1");

    if (szam > -30 && szam < 40) {
        doboz.innerHTML = "Benne van";
    } else {
        doboz.innerHTML = "Nincs benne";
    }
}

function feladat2() {
    let a = Number(prompt("Első szám:"));
    let b = Number(prompt("Második szám:"));
    let doboz = document.querySelector("#eredmeny2");

    if (a > b) {
        doboz.innerHTML = a;
    } else if (b > a) {
        doboz.innerHTML = b;
    } else {
        doboz.innerHTML = "A két szám egyforma";
    }
}

function feladat3() {
    let x = Number(prompt("Szám:"));
    let doboz = document.querySelector("#eredmeny3");

    if (x > 0) {
        doboz.innerHTML = "Pozitív";
    } else if (x < 0) {
        doboz.innerHTML = "Negatív";
    } else {
        doboz.innerHTML = "Nulla";
    }
}

function feladat4() {
    let szam = Number(prompt("Kérek egy számot:"));
    let doboz = document.querySelector("#eredmeny4");

    if (Number.isInteger(szam)) {
        doboz.innerHTML = szam;
    } else {
        doboz.innerHTML = "Nem egész szám";
    }
}

function feladat5() {
    let elso = Number(prompt("Egyik szám:"));
    let masodik = Number(prompt("Másik szám:"));
    let doboz = document.querySelector("#eredmeny5");

    if (elso > masodik) {
        doboz.innerHTML = elso + " > " + masodik;
    } else if (elso < masodik) {
        doboz.innerHTML = elso + " < " + masodik;
    } else {
        doboz.innerHTML = elso + " = " + masodik;
    }
}

function feladat6() {
    let kor = Number(prompt("Életkor:"));
    let doboz = document.querySelector("#eredmeny6");

    if (kor >= 0 && kor <= 6) {
        doboz.innerHTML = "Gyerek";
    } else if (kor <= 18) {
        doboz.innerHTML = "Iskolás";
    } else if (kor <= 60) {
        doboz.innerHTML = "Dolgozó";
    } else {
        doboz.innerHTML = "Nyugdíjas";
    }
}

function feladat7() {
    let tipp = prompt("Fej vagy írás?").trim().toLowerCase();
    let doboz = document.querySelector("#eredmeny7");

    let veletlen = Math.random();
    let gep = veletlen < 0.5 ? "fej" : "írás";

    if (tipp === gep) {
        doboz.innerHTML = "A gép dobása: " + gep + ". Nyertél!";
    } else {
        doboz.innerHTML = "A gép dobása: " + gep + ". Vesztettél!";
    }
}

function feladat8() {
    let doboz = document.querySelector("#eredmeny8");
    let kocka = Math.floor(Math.random() * 6) + 1;

    let tipp1 = Number(prompt("1. játékos tippje (1-6):"));
    let tipp2 = Number(prompt("2. játékos tippje (1-6):"));

    let hiba1 = Math.abs(kocka - tipp1);
    let hiba2 = Math.abs(kocka - tipp2);

    if (hiba1 < hiba2) {
        doboz.innerHTML = "A dobás: " + kocka + ". Az 1. játékos volt közelebb, ő nyert!";
    } else if (hiba2 < hiba1) {
        doboz.innerHTML = "A dobás: " + kocka + ". A 2. játékos volt közelebb, ő nyert!";
    } else {
        doboz.innerHTML = "A dobás: " + kocka + ". Döntetlen, ugyanakkora a távolság!";
    }
}

function feladat9() {
    let x = Number(prompt("X koordináta:"));
    let y = Number(prompt("Y koordináta:"));
    let doboz = document.querySelector("#eredmeny9");

    if (x > 0 && y > 0) {
        doboz.innerHTML = "1. síknegyed";
    } else if (x < 0 && y > 0) {
        doboz.innerHTML = "2. síknegyed";
    } else if (x < 0 && y < 0) {
        doboz.innerHTML = "3. síknegyed";
    } else if (x > 0 && y < 0) {
        doboz.innerHTML = "4. síknegyed";
    } else if (x === 0 && y === 0) {
        doboz.innerHTML = "Középpont";
    } else {
        doboz.innerHTML = "Az egyik koordináta nulla, a pont a tengelyen van";
    }
}

function feladat14() {
    let szam = Number(prompt("Add meg a hónap sorszámát (1-12):"));
    let doboz = document.querySelector("#eredmeny14");

    let honapok = [
        "január", "február", "március", "április",
        "május", "június", "július", "augusztus",
        "szeptember", "október", "november", "december"
    ];

    if (szam >= 1 && szam <= 12) {
        doboz.innerHTML = "A hónap neve: " + honapok[szam - 1];
    } else {
        doboz.innerHTML = "Hibás szám! 1 és 12 között adj meg értéket.";
    }
}

function feladat15() {
    let pont = Number(prompt("Add meg a pontszámot (0-100):"));
    let doboz = document.querySelector("#eredmeny15");

    if (pont >= 0 && pont <= 40) {
        doboz.innerHTML = "Elégtelen";
    } else if (pont <= 55) {
        doboz.innerHTML = "Elégséges";
    } else if (pont <= 70) {
        doboz.innerHTML = "Közepes";
    } else if (pont <= 85) {
        doboz.innerHTML = "Jó";
    } else if (pont <= 100) {
        doboz.innerHTML = "Jeles";
    } else {
        doboz.innerHTML = "Hibás pontszám! 0 és 100 között adj meg értéket.";
    }
}