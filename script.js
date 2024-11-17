function cambio(){
    var DOM= document.querySelector(".clase1");
    if (DOM.hasAttribute("clase1")===true){
        DOM.removeAttribute("class");
        console.log(DOM);
    }else{
        DOM.classList.toggle("clase1");
        console.log(DOM);   

        DOM.classList.add("clase2");
        console.log(DOM);
    }
}