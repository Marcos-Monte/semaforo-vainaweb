
const acenderLuz = (cor, id) => {
    document.getElementById(id).style.backgroundColor = cor
    document.getElementById('titulo').style.color = cor
}

const apagarLuz = (id) => {
    document.getElementById(id).style.backgroundColor = '#555'
}

// Função para Tráfego
function trafego(tempo){

    // Duração de cada etapa do semaforo
    const duracao = tempo;

    // Inicio da aplicação com o sinal vermelho
    acenderLuz('red', 'vermelho')

    setTimeout(() => {
        
        apagarLuz('vermelho')
        acenderLuz('green', 'verde')
        
        setTimeout(() => {
            
            apagarLuz('verde')
            acenderLuz('yellow', 'amarelo')

            setTimeout(() => {
                
                apagarLuz('amarelo')
                trafego(tempo)
                
            }, duracao / 2)

        }, duracao )

    }, duracao)
}

trafego(2000);

// Função que muda a cor do Semaforo
// function mudaLuz(cor){

//     document.getElementById('verde').style.backgroundColor = '#555'
//     document.getElementById('amarelo').style.backgroundColor = '#555'
//     document.getElementById('vermelho').style.backgroundColor = '#555'

//     if(cor === 'verde'){

//         document.getElementById('verde').style.backgroundColor = 'green'

//     } else if (cor === 'amarelo'){

//         document.getElementById('amarelo').style.backgroundColor = 'yellow'

//     } else if (cor === 'vermelho') {

//         document.getElementById('vermelho').style.backgroundColor = 'red'

//     } 

// }

