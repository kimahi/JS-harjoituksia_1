let yksi, kaksi, summa;
yksi = Math.random() * (6 - 1) + 1;
kaksi = Math.random() * (6 - 1) + 1;
summa = parseInt(yksi)+parseInt(kaksi);
alert("Ensimmäinen noppa sai numeron " + yksi.toFixed() + " ja toinen numeron " + kaksi.toFixed() +
    "\nNoppien summa on " + summa);