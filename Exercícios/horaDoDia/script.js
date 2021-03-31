function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 5

    msg.innerHTML = `Agora são ${hora} horas!`
    if ( hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imagens/fotoManha.png'
        window.document.body.style.backgroundColor = '#e4b37d'
    } else if (hora < 19){
        //boa tarde
        img.src = 'imagens/fotoTarde.png'
        window.document.body.style.backgroundColor = '#bc8467'
    } else {
        //boa noite
        img.src = 'imagens/fotoNoite.png'
        window.document.body.style.backgroundColor = '#1d3a60'
    }

}