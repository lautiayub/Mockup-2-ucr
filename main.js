
const menu=document.querySelector("#menu_logo_nav")
const asideMenu =document.querySelector("#aside-mobile-left")

const objLi= document.querySelector("#obj-li-nav")
const memLi = document.querySelector("#mem-li-nav")
const tripLI=document.querySelector("#trip-li-nav")

const objetives= document.querySelector("#objectives--nav")
const membership= document.querySelector("#membership--nav")
const trip= document.querySelector("#trip--nav")



menu.addEventListener("click",openMenuAside);
objLi.addEventListener("mouseover",oppenInfoOBJ);
objLi.addEventListener("mouseout",closeInfoOBJ);

memLi.addEventListener("mouseover",oppenInfoMEM);
memLi.addEventListener("mouseout",closecloseInfoMEM);

tripLI.addEventListener("mouseover",oppenInfoTRIP);
tripLI.addEventListener("mouseout",closeInfoTRIP);


function openMenuAside(){
    asideMenu.classList.toggle("inactive");
}
function closeMenuAside(){
    asideMenu.classList.add("inactive");
}

function oppenInfoOBJ(){
    objetives.classList.remove("inactive")
}
function closeInfoOBJ(){
    objetives.classList.add("inactive")
}

function oppenInfoMEM(){
    membership.classList.remove("inactive")
}
function closecloseInfoMEM(){
    membership.classList.add("inactive")
}

function oppenInfoTRIP(){
    trip.classList.remove("inactive")
}
function closeInfoTRIP(){
    trip.classList.add("inactive")
}
//scroll efect//

let ubicacionPrincipal =window.pageYOffset;

window.onscroll = function(){
    closeMenuAside()
    let desplazamiento = window.pageYOffset;
    if (ubicacionPrincipal>=desplazamiento){
        document.getElementById("navbar").style.top="0";
        
    }
    else{
        document.getElementById("navbar").style.top="-50px"
        
    }
    ubicacionPrincipal=desplazamiento;
}
