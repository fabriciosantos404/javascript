function gerar() {
    var n = Number(window.document.querySelector('input#txtnum').value)
    var n2 = Number(window.document.querySelector('input#txtnum2').value)

    var res = document.querySelector('#res')

    res.innerHTML = ''

    for (var c = 0; c <= n2; c++) {
        var r = n * c
        res.innerHTML += `💀${n} x ${c} = ${r} <br>`
    }

}
    

