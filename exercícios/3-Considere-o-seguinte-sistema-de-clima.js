/*3. Considere o seguinte sistema de clima e assinale a alternativa que indica o que será impresso: */
let temperatura = 25; 
let estaChovendo = true; 

if (temperatura > 30 || !estaChovendo) { console.log("Vamos à praia!");
} else if (temperatura >= 20 && estaChovendo) { 
    console.log("Vamos ao cinema!"); 
} else { 
    console.log("Ficaremos em casa."); 
    } 
    /*A) Vamos à praia! 
    B) Vamos ao cinema! 
    C) Ficaremos em casa. 
    D) O código resultará em erro por causa do operador !. */