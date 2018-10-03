/* calcoli in js */
function calcolo(){
	/* dichiarazione variabili del form */
    var peso=document.forms.BMI.peso.valueAsNumber;
    var altezza=document.forms.BMI.altezza.valueAsNumber;
    var sesso= document.forms.BMI.sesso.value;
    /* i dati non possono essere vuoti --> required */
    if(sesso = "m"){
	var totale = peso/(altezza*altezza);
	document.getElementById('calcola').innerHTML="BMI ="+totale;
if(totale<20.1){
document.getElementById('spiegazione') innerHTML= "Sottopeso"
}
	}
    else if(sesso="f"){
	var totale = (peso/(altezza*altezza))*0.9;
	document.getElementById('calcola').innerHTML="BMI ="+totale;
else 
if(totale<18.7){
document.getElementById('spiegazione') innerHTML= "Sottopeso"
	}
}

  function cancella(){
    document.getElementById('calcola').innerHTML=" "; 
}
