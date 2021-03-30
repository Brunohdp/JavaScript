var idade = 67

if (idade < 16) {
    console.log(`Com ${idade} anos ainda não pode vota!`);
} else if (idade >= 16 && idade < 18 || idade >= 65){
    console.log(`Com ${idade} anos o voto é opicional!`);
} else {
        console.log(`Com ${idade} anos o voto é obrigatório!`);
}