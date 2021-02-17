let menu = document.getElementById("menu1");
menu.addEventListener("click", () =>  {
    let options = document.getElementById("menuActivated");

    if (options.style.display == "flex"){
        options.style.display = "none" ; 

    }
    else {
        options.style.display = "flex" ; 

    }
    
    

} )
