function sign_up(x)
{
           let pass1 = x.pass_1.value;
           let pass2 = x.pass_2.value;

            if(pass1 == pass2) 
            {
                window.location.replace("https://www.youtube.com/");
            } else{
                 alert("Nie działa");
            }
}