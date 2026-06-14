/*
===============================
 BRASA ENERGY DRINK
 Sistema inicial do site
===============================
*/


// Espera a página carregar totalmente

document.addEventListener("DOMContentLoaded", () => {

    console.log("🔥 BRASA Energy Drink carregado com sucesso!");

    
    // Seleciona o botão do menu hambúrguer
    
    const menu = document.querySelector(".menu");


    // Efeito de clique no menu

    menu.addEventListener("click", () => {

        menu.style.transform = "scale(0.85)";


        setTimeout(() => {

            menu.style.transform = "scale(1)";

        }, 150);

    });


    // Animação suave ao entrar no site

    const titulo = document.querySelector(".texto h2");

    const descricao = document.querySelector(".descricao");

    const lata = document.querySelector(".lata img");


    const elementos = [
        titulo,
        descricao,
        lata
    ];


    elementos.forEach((item, index) => {

        if(item){

            item.style.opacity = "0";

            item.style.transform = "translateY(30px)";


            setTimeout(() => {

                item.style.transition = "1s ease";

                item.style.opacity = "1";

                item.style.transform = "translateY(0)";

            }, 300 + (index * 250));

        }

    });

});