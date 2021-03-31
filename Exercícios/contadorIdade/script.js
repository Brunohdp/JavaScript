function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoNasc = document.querySelector('input#an.value')
    var sexo = document.querySelector('sexo')
    var msg = document.querySelector('msg')
    var idade = ano - anoNasc
    msg.innerHTML(idade)
}