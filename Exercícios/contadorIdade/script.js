function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
    
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    
    } else {
    
        var fsex = document.getElementsByName('redsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            
            if (idade < 3){
                //bebê
                img.setAttribute('src', 'imagens/bebê/bebê-m.png')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'imagens/criança/criança-m.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'imagens/jovem/jovem-m.png')
            } else if (idade <  60) {
                //adulto
                img.setAttribute('src', 'imagens/adulto/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso/idoso-m.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
                
            if (idade < 3){
                //bebê
                img.setAttribute('src', 'imagens/bebê/bebê-f.png')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'imagens/criança/criança-f.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'imagens/jovem/jovem-f.png')
            } else if (idade <  60) {
                //adulto
                img.setAttribute('src', 'imagens/adulto/adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso/idosa-f.png')
            }

        } else {
            
            genero = 'Não especificado'

            if (idade < 3){
                //bebê
                img.setAttribute('src', 'imagens/question.png')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'imagens/question.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'imagens/question.png')
            } else if (idade <  60) {
                //adulto
                img.setAttribute('src', 'imagens/question.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/question.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Identificamos ${genero} de ${idade} anos!`)
        res.appendChild(img)
    }
}