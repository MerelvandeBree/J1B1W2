// Merel van de Bree
// Opdracht Pizza Calculator

var small = 3;
var medium = 5;
var large = 7;

var smallAmount = prompt("Hoeveel small pizza's wilt u?");
var mediumAmount = prompt("Hoeveel medium pizza's wilt u?");
var largeAmount = prompt("Hoeveel large pizza's wilt u?");

var smallTotal = smallAmount * small
var mediumTotal = mediumAmount * medium 
var largeTotal = largeAmount * large

// Aantallen van elke soort pizza
document.write("<br>" + "Aantal small: " + smallAmount);
document.write("<br>" + "Aantal medium: " + mediumAmount);
document.write("<br>" + "Aantal large: " + largeAmount);

// Bedrag per pizza soort
document.write("<br>");
document.write("<br>" + "Prijs small: € " + smallTotal);
document.write("<br>" + "Prijs medium: € " + mediumTotal);
document.write("<br>" + "Prijs large: € " + largeTotal);

// Totaal bedrag
document.write("<br>");
document.write("<br>");
document.write("Totaal bedrag: € " + (smallTotal + mediumTotal + largeTotal));	