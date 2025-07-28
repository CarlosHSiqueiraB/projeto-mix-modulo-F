var num = document.getElementById('num');
var lista = document.getElementById('visu');
var res = document.getElementById('res');
var deposito = [];

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else { return false }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else { return false }
}

function adicionar() {
    if (isNum(num.value) && !inLista(num.value, deposito)) {
        deposito.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado!`
        lista.appendChild(item)
    } else {
        alert("#Erro, Valor inválido ou já está na lista")
    }
    num.value = ''
    num.focus()
    res.innerHTML = ``
}

function finalizar() {
    if (deposito.length == 0) {
        alert("Adicione valores antes de finalizar")
    } else {
        let total = deposito.length
        let maior = deposito[0]
        let menor = deposito[0]
        let soma = 0
        let media = 0
        for (let pos in deposito) {
            soma += deposito[pos]
            media += deposito[pos] / total
            if (deposito[pos] > maior)
                maior = deposito[pos]

            if (deposito[pos] < menor)
                menor = deposito[pos]

        }
        res.innerHTML = `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores foi ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores foi ${media}.</p>`
    }
}