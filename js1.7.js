let saldo, korko, maara, yht;
saldo = prompt("Tilin saldo");
korko = prompt("Tilin korko(%)");
maara = saldo*(korko/100);
yht = parseInt(saldo) + maara;
alert("Tilille kertyneen koron määrä vuoden jälkeen on " + maara.toFixed(2) + " saldoa on " + yht.toFixed(2));