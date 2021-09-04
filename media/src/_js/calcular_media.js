function calcular_media() {
    // Declaração de variáveis
    var nota1, nota2, nota3, nota4, media;

    // Entrada de dados
    nota1 = Number(document.getElementById("nota1").value);
    nota2 = Number(document.getElementById("nota2").value);
    nota3 = Number(document.getElementById("nota3").value);
    nota4 = Number(document.getElementById("nota4").value);


    // Processamento de Dados
    media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Saída de Dados
    document.getElementById("form_notes").classList.add("d-none");
    document.getElementById("show_result").classList.remove("d-none");
    // $("#form_notes").addClass("d-none");
    // $("#show_result").removeClass("d-none");
    $(".result_value").html(parseInt(media));

    if (media >= 7) {
        // document.getElementById("description_result").innerHTML = `Parabens a sua nota e: ${media}`;
        document.getElementById("img_result").setAttribute('src', 'https://i.giphy.com/media/kyLYXonQYYfwYDIeZl/giphy.webp')
    }
    else {
        // document.getElementById("description_result").innerHTML = "Voce precisa melhorar";
        document.getElementById("img_result").setAttribute('src', 'https://www.cursosapientia.com.br/admimg/siteBlog/cacd-diplomata-itamaraty-diplomacia-o-que-voce-precisa-saber-antes-de-comecar-a-estudar-para-o-cacd.png');
    }
    console.log("Média é igual a " + media);
}

function voltar() {
    document.getElementById("show_result").classList.add("d-none");
    document.getElementById("form_notes").classList.remove("d-none");
    document.getElementById('form_notes').reset();
    // $("input").val("");
}