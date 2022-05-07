var msg = document.getElementById("mensagem");
var img = document.getElementById("landscape");
var title = document.getElementById("title");
var p = document.getElementById("copyright");

var data = new Date();
var min = data.getMinutes();
var hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`;

    if( hora >= 5 && hora < 15 ) {
        document.body.style.background = "#ffe25d99";
        title.style.color = "#000000";
        p.style.color = "#000000";
        img.src = "../_imgs/morning.png";
        console.log("Primeiro if");
    }else if( hora >= 15 && hora <= 18){
        document.body.style.background = "#d76d65";
        img.src = "../_imgs/sunset.png";
    }else {
        document.body.style.background = "#0b1129";
        img.src = "../_imgs/nightfall.png";
    }