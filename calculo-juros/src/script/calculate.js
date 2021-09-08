function calculate() {
    var name, n, pmt, fv;
    var i = 0.03;

    //Entrada de dados
    name = String(document.getElementById("name").value);
    n = Number(document.getElementById("time").value);
    pmt = Number(document.getElementById("monthly").value);

    //Processamento de Dados

    fv = (pmt*(1+i)*((Math.pow(1+i, n)-1)/i)).toFixed(2);

    //Saida de dados
    document.getElementById("name_result").innerHTML = `${name},`;
    document.getElementById("aporte").innerHTML = `${pmt}R$`;
    document.getElementById("result_value").innerHTML = `${fv}R$`;
    document.getElementById('meses').innerHTML = `${n} meses.`;
    document.getElementById("description_result").classList.remove("d-none");
    document.getElementById("calc_form").classList.add("d-none");
}

// document.getElementById('nameresult').innerHTML = `${name}`;
// document.getElementById('mensalidaderesult').innerHTML = `${monthly}`;
// document.getElementById('formula').innerHTML = `${total.toFixed(3)}`;
// document.getElementById('data').innerHTML = `${mensal.toFixed(2)}`;
// document.getElementById('calc_form').classList.add('d-none');
// document.getElementById("result").classList.remove("d-none");