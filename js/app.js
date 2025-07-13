$(document).ready(function(){
   $('.food-slider').slick({
      autoplay:true,
     slidesToShow:3,
     slidesToScroll:1,
     prevArrow:".prev-btn",
     nextArrow:".next-btn",
     responsive:[
        {
           breakpoint:992,
           settings:{
            slidesToShow:2,
           }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
      }
     ]

   });

   $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   })
});

/* Pop-up *//* Pop-up *//* Pop-up */
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('age-verification-modal');
    const confirmBtn = document.getElementById('confirm-age-btn');
    const denyBtn = document.getElementById('deny-age-btn');

    // Função para definir um cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Função para obter um cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Verifica se o usuário já confirmou a idade
    const ageConfirmed = getCookie('age_verified');

    if (!ageConfirmed) {
        // Se não confirmou, mostra o modal
        modal.classList.remove('modal-hidden');
        modal.classList.add('modal-visible');
    }

    // Evento para o botão "Sim, tenho 18+"
    confirmBtn.addEventListener('click', function() {
        setCookie('age_verified', 'true', 30); // Define o cookie por 30 dias
        modal.classList.remove('modal-visible');
        modal.classList.add('modal-hidden');
    });

    // Evento para o botão "Não, sou menor"
    denyBtn.addEventListener('click', function() {
        alert("Você precisa ter 18 anos ou mais para acessar este site.");
        window.location.href = 'https://www.google.com'; // Redireciona para outro lugar
        // Ou, se preferir, você pode esconder o site ou mostrar uma mensagem de bloqueio
        // document.body.innerHTML = '<h1>Acesso Negado</h1><p>Você precisa ter 18 anos ou mais.</p>';
    });
});