function check(x)
{
    let A = x.A.value;
    let B = x.B.value;
    let C = x.C.value;
 
    if((A<(B+C)) && (B<(A+C)) && (C<(B+A)))
    {
        if(A == B && A == C){alert("Równoboczny");}
        else if(A == B || A == C || B == C){alert("Równoramienny");}
        else{ alert("Różnoboczny")}
    }else
    {
        alert("Taki trójkąt nie istnieje");
    }
}