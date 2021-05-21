
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: done
3. Fkt. Grundrechenarten :: done
4. Ausgabe in Konsole :: done
*/

// ausgabe(rechner(getOp(),getZahl1(),5));
start();
function start(){
    ausgabe(rechner(getOp(),getZahl1("1"),getZahl1("2")))
}
//  Modul: Zhal 1 eingeben | Test:
// ausgabe(getZahl1("1"));
// ausgabe(getZahl1("2"));
function getZahl1(numStr) {
    let zahl = parseInt(prompt("Bitte Zahl " + numStr + "eingeben!"))
    
    while (isNaN(zahl)) {
        zahl=parseInt(prompt("Das ist keine Zahl ! Bitte nochmal!"))
    }

    return zahl;

}


//  Modul: Operant eingeben || Test
// ausgabe(getOp());
function getOp() {
    
    let op = prompt("Bitte + | - | * | / eingeben")
   
   while (!isOpValid(op)) { // solange falsche eingabe bleibt man ind der schleife!
       op = prompt(" Bitte den richtigen Operator eingeben!")
    }
   

       return op ;

    
}

//  Modul Operand überprüfen || Test
// ausgabe(isOpValid("+"));
// ausgabe(isOpValid("-"));
// ausgabe(isOpValid("*"));
// ausgabe(isOpValid("/"));
// ausgabe(isOpValid("#"));
// ausgabe(isOpValid());

function isOpValid(op) 
{
    /*
    switch (op) {
        case "+":
        case "-":
        case "*":
        case "/":    
        return true;
            
    
        default:
            return false;
    }
    */
    return op == "+" || op == "-"  || op == "*"  || op == "/";
}

//  Modul: Rechenart auswählen || Test
// ausgabe(rechner("+",15,5));
// ausgabe(rechner("-",15,5));
// ausgabe(rechner("*",10,5));
// ausgabe(rechner("/",15,5));
// ausgabe(rechner("/",15,0));
// ausgabe(rechner("#!?",15,5));

function rechner(op,a,b) {

 switch (op) {
     case "+":
         return addieren(a,b);
     case "*":
         return multiplizieren (a,b);
     case "-":
         return subtraktion(a,b);
     case "/":
         return dividieren(a,b);

 
     default:
         return " es ging etwas schief!!";
 }

}
    // return multiplizieren(2,2);

//   Dividieren a/b || Test

// ausgabe(dividieren(210,2));
// ausgabe(dividieren(15,2));
// ausgabe(dividieren(2,4));
// ausgabe(dividieren(8,0));

function dividieren(a,b)
{    
if(b!=0) {return a/b;} 
{return "dividieren durch 0 nicht möglich";} 

}

//  Modul : Multiplizieren a*b || Test
// ausgabe(multiplizieren(2,3));
function multiplizieren(a,b)
{
    return a*b;
}


//  Modul : Subtraktion a - b || Test:
// ausgabe (subtraktion(1,2));
function subtraktion( a , b)
{
    
    return a-b;
}



//  Modul: Addition a+b | Test:
// ausgabe(addieren(1,2));
function addieren(a,b)
{
    return a + b;
}


//  Modul: Konsonlenausgabe | Test
// ausgabe("Hallo Welt");

function ausgabe(outputStr)
{
    console.log(outputStr);
}