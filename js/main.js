$(document).ready(function(){
    $('.carrosel').slick({
    autoplay: true,
    arrows: false,
    });
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('#tel').mask('(00) 00000-0000');

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            tel: {
                required: true
            }
        },
        messages:{
            nome: 'insira seu nome'
        },
        submitHandler: function(form){
            console.log();
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    $('.lista-de-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});