function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('ano')
    var res = document.getElementById('res')

    if(fAno.value.length == '0' || Number(fAno.value) > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexrad')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img') //criando a tag imagem no html
        img.setAttribute('id', 'foto') // isso aqui cria uma id e o nome da id para a imagem criada

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', './criançamenino.jpeg')//seleciona a imagem especifica que vai dentro do src da tag criada.
            } else if( idade < 25) {
                //jovem-adukto
                img.setAttribute('src', './jovemmenino.jpeg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', './adultohomem.jpeg')
            }else {
                //veio 
                img.setAttribute('src', './idoso.jpeg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', './criançamenina.jpeg')
            } else if( idade < 25) {
                //jovem-adukto
                img.setAttribute('src', './jovemmenina.jpeg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', './adulta.jpeg')
            }else {
                //veio 
                img.setAttribute('src', './idosa.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
        res.appendChild(img)//adicionando a imagem ao documento
    }
}