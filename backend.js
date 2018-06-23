var ctx = document.getElementById("line-chart");

function calcular(){
    var capital = parseFloat(document.getElementById("valorInicial").value.replace(/\./g, "").replace(",", ".")),
        juros = document.getElementById("juros").value/100,
        meses = document.getElementById("meses").value,
        montante = 0;

    var mesames = [], montantes = [], rendimentos = [], rendimentosPorcento = []; 
    for(var c = 0; c < meses; c++){
        var mes = c + 1;
        montante = capital * Math.pow((1+juros),mes);
        
        mesames.push(mes);
        montantes.push(montante.toFixed(2));
        rendimentos.push((montante-capital).toFixed(2));
        rendimentosPorcento.push(((montante/capital)*100).toFixed(2))
    }

    var chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: mesames,
                datasets: [
                    {
                        label: "Montante/Mês",
                        data: montantes,
                        borderColor: 'red'
                    },
                    {
                        label: "Rendimento/Mês",
                        data: rendimentos,
                        borderColor: 'blue'
                    },
                    {
                        label: "Rendimento/Mês(%)",
                        data: rendimentosPorcento,
                        borderColor: 'green'
                    }
                ]
            }
        });

    document.getElementById("rendimento").innerHTML=rendimentos[meses-1]+" / "+rendimentosPorcento[meses-1]+"%";
}
