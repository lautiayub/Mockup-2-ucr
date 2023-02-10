document.getElementById("btn__login").addEventListener("click",login)
document.getElementById("btn__register").addEventListener("click",register);
window.addEventListener("resize",widthhtml);

var contain_log_reg= document.querySelector(".contain__login-register");

var form_login =document.querySelector(".form__login");
var back_box_login=document.querySelector(".back_box-login");

var form_register=document.querySelector(".form__register");
var back_box_register= document.querySelector(".back_box-register");

function widthhtml(){
    if(window.innerWidth>918){
        back_box_login.style.display="block";
        back_box_register.style.display="block";
    }
    if(window.innerWidth<=918){
        back_box_register.style.display="block";
        back_box_register.style.opacity="1";
        back_box_login.style.display="none";

        form_register.style.display="none";
        form_login.style.display="block";
        contain_log_reg.style.left="0px";
    }
}
widthhtml();

function register (){
    if(window.innerWidth>850){
        contain_log_reg.style.left="410px";

        form_register.style.display="block"; 

        form_login.style.display="none";

        back_box_register.style.opacity="0";

        back_box_login.style.opacity="1";
    } else{
        contain_log_reg.style.left="0";

        form_register.style.display="block"; 

        form_login.style.display="none";

        back_box_register.style.display="none";

        back_box_login.style.display="block";
        back_box_login.style.opacity="1"

    }

}
function login (){
    if(window.innerWidth>850){
    contain_log_reg.style.left="10px";

    form_register.style.display="none"; 

    form_login.style.display="block";

    back_box_register.style.opacity="1";

    back_box_login.style.opacity="0";
    }else{
        contain_log_reg.style.left="0px";

        form_register.style.display="none"; 
    
        form_login.style.display="block";
    
        back_box_register.style.display="block";
    
        back_box_login.style.display="none"; 
    }

}