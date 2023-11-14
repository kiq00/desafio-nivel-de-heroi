let nome = "Caique"
let experiencia = 11000
let nivel

if(experiencia <= 1000){
    nivel = "Ferro"
}
else if (experiencia >1000 && experiencia <=2000){
    nivel = "Bronze"
}
else if(experiencia >2000 && experiencia <=6000){
    nivel = "Prata"
}
else if(experiencia >6000 && experiencia <=7000){
    nivel = "Ouro"
}
else if(experiencia >7000 && experiencia <=8000){
    nivel = "Platina"
}
else if(experiencia >8000 && experiencia <=9000){
    nivel = "Ascendente"
}
else if(experiencia >9000 && experiencia <=10000){
    nivel = "Pimortal"
}
else if(experiencia >10000){
    nivel = "Radiante"
}

console.log("O herói de nome " + nome + " está no nivel de " + nivel)