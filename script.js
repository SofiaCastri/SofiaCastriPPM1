function navbar_Scroll () {
    var ContenitoreHeader = document.getElementById("Header");
    var ContainerH1 = document.getElementById("H1scritte");
    var Conteinerp = document.getElementById("pscritte");
    var LogoRidotto = document.getElementById("immagine");
    var ContenitoreLink = document.getElementById("Contenitore-Link");
    var ContenitoreBottone = document.getElementById("bottone");


    if (this.scrollY> 110) {
        ContenitoreHeader.classList.add("CHeader");
        ContainerH1.classList.add("CH1");
        Conteinerp.classList.add("Cp");
        LogoRidotto.classList.add("Clogo");
        ContenitoreLink.classList.add("Clinks");
        ContenitoreBottone.classList.add("CBottone");

    }
    else {
        ContenitoreHeader.classList.remove("CHeader");
        ContainerH1.classList.remove("CH1");
        Conteinerp.classList.remove("Cp");
        LogoRidotto.classList.remove("Clogo");
        ContenitoreLink.classList.remove("Clink");
        ContenitoreBottone.classList.remove("CBottone");
    }

}

window.addEventListener("scroll", navbar_Scroll, false)
