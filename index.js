var sorteio = Math.floor(Math.random() * 3);
var vendedor
var num

if(sorteio==0){
    num = "5584996238690"
    vendedor = " Romário"
}
else if(sorteio==1){
    num = "5584994057420"
    vendedor = " Bia"
}
else if(vendedor==2){
    num = "5584988602680"
    vendedor = " Allana"
}

document.getElementById("link").href = "https://wa.me/" + num + "?text=Olá," + vendedor;