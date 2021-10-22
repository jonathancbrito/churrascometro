// Carne: 400g por pessoa, se o evento tiver mais de 6h de duração passa a a ser 650g por pessoa
// Cerveja: 1.2L por pessoa, se o evento tiver mais de 6h de duração passa a a ser 2L por pessoa
// Refrigerante: 1L por pessoa, se o evento tiver mais de 6h de duração passa a a ser 1.5L por pessoa
// Para crianças as quantidades valem 1/2(metade) e não bebem cerveja

let adultos = window.document.getElementById("adultos");
let criancas = window.document.getElementById("criancas");
let horas = window.document.getElementById("horas"); 
// let res = window.document.getElementById("result");

let resCarne = document.getElementById("resCarne");
let resCerveja = document.getElementById("resCerveja");
let resRefri = document.getElementById("resRefri");

function calc() {
    // quantidade de adultos e crianças 
    let nAdulto = adultos.value;
    let nCrianca = criancas.value;
    // duração do evento
    let duracao = horas.value;

    if (duracao == 0 && (nAdulto > 0 || nCrianca > 0)){
        window.alert("A duração precisa ser maior que 0");
    } else if (nAdulto == 0 && nCrianca == 0 && duracao > 0){
        window.alert("Não é possível haver churrasco sem Adultos ou Crianças :(");
    } else if (nAdulto == 0 && nCrianca == 0 && duracao == 0){
        window.alert("Não foi detectado nenhum dado, Insira os dados no churrascomêtro");
    } else {
    // cáculos para determinar a quantidade de carne, cerveja e refrigerante
    let qntCarne = nAdulto * carneCalc(duracao) + ((carneCalc(duracao) / 2) * nCrianca); 
    let qntCerveja = nAdulto * cervejaCalc(duracao);
    let qntRefri = nAdulto * refriCalc(duracao) + (refriCalc(duracao) / 2 * nCrianca);

    resCarne.innerHTML = `<p>${qntCarne / 1000}Kg de Carne</p>`;
    resCerveja.innerHTML = `<p>${Math.ceil(qntCerveja/355)} Latas de cerveja 355ml</p>`;
    resRefri.innerHTML = `<p>${Math.ceil(qntRefri/2000)} Garrafas de refrigerante 2l</p>`;
     // gasto estimado em dinheiro para o churrasco 
    let carnePreco = (qntCarne / 1000) * 30; // considerando R$30,00 por cada Kg de carne 
    let cervejaPreco = (Math.ceil(qntCerveja/355)) * 4.39; // considerando R$4,39 cada lata de cerveja de 355ml
    let refriPreco = (Math.ceil(qntRefri/2000)) * 6.98; // considerando R$6,98 cada garrafa de refrigerante de 2L
    let gastoTotal = carnePreco + cervejaPreco + refriPreco;
    let resPreco = window.document.getElementById("resPreco");
    resPreco.innerHTML = `&cong; R$${gastoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

        // mostra a div result na tela quando clicar em calcular
        let display1 = document.querySelector('#resultDiv');
        if (display1.style.display == "none") {
             display1.style.display = 'block';
        } else {
            display1.style.display = 'block';
        }

    }

}

// calcula quantidade de carne de acordo com a duração do evento
function carneCalc(duracao){
    let carne = 400;
    if (duracao >= 6){
        carne = 650;
    }
    return carne;
}

// calcula quantidade de cerveja de acordo com a duração do evento
function cervejaCalc(duracao){
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

// calcula quantidade de refrigerante de acordo com a duração do evento
function refriCalc(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}

// botão Calcular
let btnCalc = document.querySelector("#btnCalc");
btnCalc.addEventListener("mouseover", btnCalcMouseOver);
btnCalc.addEventListener("mouseout", btnCalcMouseOut);

function btnCalcMouseOver(){
    btnCalc.style.backgroundColor = "limegreen";
}
function btnCalcMouseOut(){
    btnCalc.style.backgroundColor = "#49b1e4";
}

// botão Limpar Dados
let btnClear = document.querySelector('#btnClear');
btnClear.addEventListener("mouseover", btnClearMouseOver);
btnClear.addEventListener("mouseout", btnClearMouseOut);

function btnClearMouseOver(){
    btnClear.style.backgroundColor = "red";
}
function btnClearMouseOut(){
    btnClear.style.backgroundColor = "#49b1e4";
}

// limpar dados recarregando a página do servidor e não do cache 
function btnClearData(){
    let loadpg = location.reload(true);
    return loadpg;
}