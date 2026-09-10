function contar() {
    var i = Number(window.document.querySelector('input#txtinicio').value)
    var f = Number(window.document.querySelector('input#txtfim').value)
    var p = Number(window.document.querySelector('input#txtpasso').value)

    var res = document.querySelector('#res')

    if (p == 0) {
        p = 1
        window.alert('Passo 0 inválido! Definido para 1.')
    }

    res.innerHTML = ''

    for (var c = i; c <= f; c = c + p) {
        res.innerHTML += `${c} <br>`
    }    
}
