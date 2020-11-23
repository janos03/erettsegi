function check() {
    var a = Number(document.getElementById('halozati').value);
    var b = Number(document.getElementById('programozasi').value);
    var c = Number(document.getElementById('weblapi').value);
    var d = Number(document.getElementById('szobeli').value);
    var osszesen = document.getElementById('eredmeny').innerHTML = b + a + c + d;
    var pont = 0;
    emeltpont = 0;

    if (osszesen >= 120) {
        pont = 5;
    } else if (osszesen >= 90) {
        pont = 4;
    } else if (osszesen >= 60) {
        pont = 3;
    } else if (osszesen >= 38) {
        pont = 2;
    } else {
        pont = 1;
    }

    if (osszesen >= 90) {
        emeltpont = 5;
    } else if (osszesen >= 70.5) {
        emeltpont = 4;
    } else if (osszesen >= 49.5) {
        emeltpont = 3;
    } else if (osszesen >= 37.5) {
        emeltpont = 2;
    } else {
        emeltpont = 1;
    }

    if (a > 40 || b > 40 || c > 40 || d > 30) {
        alert("Kérlek írj be érvényes pontszámot")
    } else if (a < 0 || b < 0 || c < 0 || d < 0) {
        alert("Kérlek írj be érvényes pontszámot, nem gondolom azt, hogy 0-nál kevesebb pontot sikerült szerezni. :(")
    }


    if (szobeli <= 3.75 || a + b + c <= 38) {
        pont = 1
        emeltpont = 1;
    }
    var ja = Number(document.getElementById('mennyi').innerHTML = "középszinten:" + " " +
        pont);
    var jaa = Number(document.getElementById('emeltmennyi').innerHTML = "emeltszinten:" + " " + emeltpont);

    return false;

}