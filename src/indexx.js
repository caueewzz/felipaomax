let heroi = {
    nome: "Ichigo Kurosaki",
    idade: 16
};
let xp = 10500;
if (xp <= 1000){
    console.log("O Herói de nome " + heroi.nome + " está no nível Ferro")
}

else if (xp >= 1001 && xp <= 2000){
    console.log(
        "O Herói de nome " + heroi.nome + " esta no nivel Bronze"
    )
}

else if (xp >= 2001 && xp <= 5000){
    console.log(
        "O Herói de nome " + heroi.nome + " esta no nivel Prata"
    )
}
else if (xp >= 5001 && xp <= 7000){
    console.log(
        "O Herói de nome " + heroi.nome + " esta no nivel Ouro"

    )
}
else if (xp >= 7001 && xp <= 8000){
    console.log(
        "O Herói de nome " + heroi.nome + " esta no nivel Platina"

    )
}
else if (xp >= 8001 && xp <= 9000){
    console.log(
        "O Herói de nome" + heroi.nome + "esta no nivel Ascendente"

    )
}
else if (xp >= 9001 && xp <= 10000){
    console.log(
        "O Herói de nome" + heroi.nome + "esta no nivel Imortal"
    )
}
else (xp >= 10001);{
   console.log("O Herói de nome " + heroi.nome + " está no nivel Radiante")
}
