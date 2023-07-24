var sorteio = Math.floor(Math.random() * 2);
var vendedor
var num

if(sorteio==0){
    num = "5584996238690"
    vendedor = " Romário"
}
else if(sorteio==1){
    num = "5584988602680"
    vendedor = " Allana"
}

document.getElementById("link").href = "https://wa.me/" + num + "?text=Olá," + vendedor;