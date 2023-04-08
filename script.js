const btnCalcularPreco = document.querySelector('#calcular');

// function obterPercentualImposto(percentualImposto) {

//     return percentualImposto/100;

// };

// function obterImposto(custo, percentualImposto) {

//     const impostoEl = document.querySelector('#imposto span');

//     const imposto = custo * obterPercentualImposto(percentualImposto);
//     impostoEl.innerText = 'R$' + imposto;

// };

function calcular() {

    const custo = document.querySelector('#custo').value;
    const percentualImposto = document.querySelector('#percentualImposto').value;
    const precoEl = document.querySelector('#preco span');
    const impostoEl = document.querySelector('#imposto span');

    if(custo === "" || percentualImposto === "" || custo < 0 || percentualImposto === 0) {

        alert('Preencha os campos corretamente!');

        return;

    };

    const imposto = (parseFloat(custo) * parseFloat(percentualImposto)) / 100;
    const preco = parseFloat(custo) + imposto;
    
    impostoEl.innerText = 'R$' + imposto.toFixed(2);
    precoEl.innerText = 'R$' + preco.toFixed(2);

    // obterImposto(custo, percentualImposto);

};

btnCalcularPreco.addEventListener('click', calcular);