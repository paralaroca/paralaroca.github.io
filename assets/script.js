confirm("Oizinho, quando quiser dá o OK! =D")
$(document).ready(function() {

    $(".mudaTela").click(function() {
        mudaTela($(this), $(this).attr("nova"), $(this).attr("animacao"), $(this).attr("tempoAnimacao"));
    });

    $("a.opcoes").click(function(e) {
        e.preventDefault();
        $("div.opcoes").slideToggle(500);
    });

    $(".calendario .marcado").click(function() {
        mostraMsgMes($(this).attr("value"));
    });

    const mudaTela = (atual, nova = null, animacao = "fade", tempoAnimacao = 900) => {

        // define a nova tela
        if (!nova) {
            nova = parseInt(atual.parent().attr("id").split("tela")[1]) + 1;
        }

        if (animacao == "fade") {
            $("#tela" + (nova - 1)).fadeOut(tempoAnimacao);
            setTimeout(() => {
                $("#tela" + nova).fadeIn(tempoAnimacao)
            }, tempoAnimacao);
        } else {
            $("#tela" + (nova - 1)).hide(tempoAnimacao);
            $("#tela" + nova).show(tempoAnimacao);
        }

        if ($("#tela" + nova).hasClass("temporizado")) {
            $("#tela" + nova + " div").hide();
            telaTemporizada(nova, 0);
        }

        verificaFundo(nova);
        $("html, body").animate({ scrollTop: 0 }, "slow");
        if (nova == 5) {
            var audio = new Audio('assets/musica.mp3');
            audio.volume = 0.1;
            audio.play();
        }

    }

    const telaTemporizada = (nTela, contador) => {

        const tela = $("#tela" + nTela + " div:eq(" + contador + ")");
        const temporizador = 500;
        const temporizadorPrimeiraTela = (contador == 0 ? $("#tela" + nTela).attr("tempo") : temporizador);

        setTimeout(() => {
            tela.fadeIn(temporizador);

            setTimeout(() => {
                tela.fadeOut(temporizador);
                if (tela.attr("final") == "true") {
                    mudaTela(null, nTela + 1, "fade", 900);
                    verificaFundo(nTela + 1);
                } else {
                    telaTemporizada(nTela, contador + 1);
                }

            }, tela.attr("tempo"));

        }, temporizadorPrimeiraTela);

    }

    const verificaFundo = (nTela) => {

        const fundo = $("#tela" + nTela).attr("fundo");
        const tempo = $("#tela" + nTela).attr("tempo");

        if (fundo) {
            $("body").attr("class", fundo);
        }

    }

    const mostraMsgMes = (texto) => {

        let titulo;
        let mensagem;

        switch (texto) {
            case "17/6":
                titulo = "17 de Junho de 2022";
                mensagem = "<p>Esse foi o dia que nos conhecemos! Nos encontramos no Mahalila e depois fomos ao lalulna, me encantei pelo seu sorriso e seu olhar cativante, gritamos no túnel e quase nos perdemos</p>";
                break;
            case "18/6":
                titulo = "18 de Junho de 2022";
                mensagem = "<p> Comemos seu Hamburg favorito e você queria me cobrar a viagem antes mesmo de começar... Você estava incrível, espetacular, e aquele momento foi mágico pra mim, nos beijamos com a boca vibrando. E que beijo bom ❤️</p>";
                break;
            case "19/6":
                titulo = "19 de Junho de 2022";
                mensagem = "<p>Foi quando fomos a praia a primeira vez a noite.</p>";
                break;
            case "21/6":
                titulo = "21 de Junho de 2022";
                mensagem = "<p> deixo a blusa de med aqui tentamos dançar forro pela primeira vez e até que conseguimos e voce me passou um tratamento sem prazo.</p> ";
                break;
            case "22/6":
                titulo = "22 de Junho de 2022";
                mensagem = "<p>Você veio pra cá após sua prova e eu so sentia vontade de rasgar o coração de tanto amor que voce me faz sentir</p>";
                break;
            case "24/6":
                titulo = "24 de Junho de 2022";
                mensagem = "Fizemos nossa arraia com nossos amigos e nos declaramos bebíssimas, e foi primeira vez que dormimos juntas</p>";
                break;
            case "25/6":
                titulo = "25 de Junho de 2022";
                mensagem = "<p>Acordar e ver você ali, certamente é uma das coisas que nunca vou esquecer na minha vida. São tantos momentos que eu consigo lembrar de todos em mínimos detalhes. Passamos quase todo o dia juntas, tocamos, comemos e fumos felizes, se alimentando de xereta e agua a ponto de ficar sem mandíbula. De fato, nunca esquecerei. </p>";
                break;
            case "26/6":
                titulo = "26 de Junho de 2022";
                mensagem = "<p>conseguimos realizar comunicação por pensamento efetivamente pela primeira vez, mentalizando e adivinhando o número 12 kkkk</p>";
                break;
            case "28/6":
                titulo = "28 de Junho de 2022";
                mensagem = "<p>mais uma vez provando a telepatia enviando o mesmo trecho da musica na mesma hora, voce provou meu *cu*scuz e fiquei bem feliz que gostou, altos papos através do pensamento, te pedi varias coisas com o olhar e voce fez suas afirmações, acho que ate hoje nem tudo que foi dito através do olhar foi traduzido em palavras… </p>";
                break;
            case "29/6":
                titulo = "29 de Junho de 2022";
                mensagem = "<p>Sem palavras pra esse dia… so queria gritar de tanto amor nesse dia eu percebi que voce era a mulher da mia vidakkk e que nao tinha nenhuma duvida que voce é tudo que queria, muito mais do que, conversando com o pensamento e escrevemos no post it essas coisas piegas</p>";
                break;
            case "11/8":
                titulo = "11 de Agosto de 2022";
                mensagem = "<section class='text-center'><p class='letra-vermelha'><strong>Este momento está sendo escrito agora...</strong></p></section>";
                break;
            case "final":
                titulo = "11 de Agosto de 2022";
                mensagem = "<section class='text-center mt-5 mb-5'><p><strong>O dia em que ela disse<br><span class='letra2 letra-vermelha'>SIM</span></strong></p></section>";
                break;
        }

        mostraPopUp(true, titulo, mensagem);
        telaFinal = (texto == "final" ? true : false);
    }



});

let telaFinal = false;

const mostraPopUp = (mostrar, titulo = "Título de testes", mensagem = "Mensagem de teste...") => {

    if (mostrar) {
        $("html, body").animate({ scrollTop: $(".pop-up")[0].offsetTop }, "smooth");
        $(".pop-up").fadeIn(500);
        $(".pop-up h1").html(titulo);
        $(".pop-up div").html(mensagem);
        $(".container").css("opacity", "0.5");
    } else {
        $(".pop-up").fadeOut(500);
        $(".container").css("opacity", "1");

        if (telaFinal) {
            $("#tela18").fadeOut(4000);
            setTimeout(() => {
                $("#tela19").fadeIn(6500);
                $("body").attr("class", "fundo6");
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }, 4000);
        }
    }
}