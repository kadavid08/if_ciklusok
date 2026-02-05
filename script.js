function feladat1() {
    let szam = prompt("Írj be egy számot:");
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
    let x = prompt("Szám:");
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
    let szam = prompt("Kérek egy számot:");
    let doboz = document.querySelector("#eredmeny4");

    if (szam % 1 == 0) {
        doboz.innerHTML = szam;
    } else {
        doboz.innerHTML = "Nem egész szám";
    }
}

function feladat5() {
    let elso = prompt("Egyik szám:");
    let masodik = prompt("Másik szám:");
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
    let kor = prompt("Életkor:");
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
    let tipp = prompt("Fej vagy írás?");
    let doboz = document.querySelector("#eredmeny7");

    let veletlen = Math.random();
    let gep;

    if (veletlen < 0.5) {
        gep = "fej";
    } else {
        gep = "írás";
    }

    if (tipp == gep) {
        doboz.innerHTML = "A gép dobása: " + gep + ". Nyertél!";
    } else {
        doboz.innerHTML = "A gép dobása: " + gep + ". Vesztettél!";
    }
}

function feladat8() {
    let doboz = document.querySelector("#eredmeny8");
    let kocka = Math.floor(Math.random() * 6) + 1;

    let tipp1 = prompt("1. játékos tippje (1-6):");
    let tipp2 = prompt("2. játékos tippje (1-6):");

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
    let x = prompt("X koordináta:");
    let y = prompt("Y koordináta:");
    let doboz = document.querySelector("#eredmeny9");



    if (x > 0 && y > 0) {
        doboz.innerHTML = "1. cuccosban";
    } else if (x < 0 && y > 0) {    
        doboz.innerHTML = "2. cuccosban";
    } else if (x < 0 && y < 0) {
        doboz.innerHTML = "3. cuccosban";
    } else if (x > 0 && y < 0) {
        doboz.innerHTML = "4. cuccosban";
    } else if (x == 0 && y == 0) {
        doboz.innerHTML = "kozeppont";
    } else {
        doboz.innerHTML = "Vonalacskan van a cuccos";
    }
}