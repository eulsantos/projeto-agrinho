function scrollToSection(){

    document.querySelector(".cards").scrollIntoView({
        behavior:"smooth"
    });

}

function resposta(opcao){

    const resultado = document.getElementById("resultado");

    if(opcao === "certo"){

        resultado.innerHTML = "✅ Correto! O campo produz os alimentos consumidos na cidade.";

        resultado.style.color = "green";

    }else{

        resultado.innerHTML = "❌ Resposta incorreta. Tente novamente.";

        resultado.style.color = "red";

    }

}

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        temaBtn.innerHTML = "☀️";

    }else{

        temaBtn.innerHTML = "🌙";

    }

});

const counters = document.querySelectorAll(".contador");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 100;

        if(c < target){

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});
