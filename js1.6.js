let leiviska, naula, luoti, kilo, gramma;
leiviska = prompt("Paino leivisköinä");
naula = prompt("Nauloina");
luoti = prompt("Luoteina");
kilo = Math.floor((((((parseInt(leiviska)*20)+parseInt(naula))*32)+parseInt(luoti))*13.3)/1000);
gramma = (((((parseInt(leiviska)*20)+parseInt(naula))*32)+parseInt(luoti))*13.3)-(kilo*1000);
alert("Massa nykymittojen mukaa: " + kilo + " kiloa ja " + gramma.toFixed(2) + " grammaa.");