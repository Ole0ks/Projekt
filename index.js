function btnClick() {
    var eingabe = document.getElementById("eingabefeld").value;
    var datum = new Date();
    var jahr = datum.getFullYear();
    var monat = datum.getMonth();
    var tag = datum.getDate();

    // "28.02.2002"
    var eingabeTag = parseInt(eingabe.substring(0,1));
    var eingabeMonat = parseInt(eingabe.substring(3,4));
    var eingabeJahr = parseInt(eingabe.substring(6,10));

    var alter = jahr - eingabeJahr;
    if (monat > eingabeMonat) 
        {alter =alter-1;}
    else if (monat == eingabeMonat &&
       tag > eingabeTag)
        {alter =alter-1;} 
        alert(alter) 

}
