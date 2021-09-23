alert("Jaki jest dzień tygodnia ?");

function check(x)
{
    let A = x.A.value;
    if(A >= 1 && A <= 5){alert("Dzień roboczy");}
    else if( A == 6 || A == 7){alert("Weekend");}
    else {alert("Nie ma tkaiej opcji");}
}