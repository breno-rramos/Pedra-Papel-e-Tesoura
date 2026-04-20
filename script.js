function escolhaComputador() {
    let opcoes = ['pedra', 'papel', 'tesoura']
    let indice = Math.floor(Math.random() * 3)
    return opcoes[indice]
}

function verificarVencedor(jogador, computador) {
    if (jogador === computador) {
        return 'Empate!'
    }
    if (
        (jogador === 'pedra'   && computador === 'tesoura') ||
        (jogador === 'tesoura' && computador === 'papel')   ||
        (jogador === 'papel'   && computador === 'pedra')
    ) {
        return 'Você ganhou!'
    }
    return 'Computador ganhou!'
}

function jogar(jogador) {
    let computador = escolhaComputador()
    let vencedor   = verificarVencedor(jogador, computador)

    let user = document.getElementById('escolha-user')
    let res  = document.getElementById('res')
    let pc   = document.getElementById('escolha-pc')

    user.innerHTML = `Você escolheu: ${jogador}`
    pc.innerHTML   = `Computador escolheu: ${computador}`
    res.innerHTML  = vencedor
}