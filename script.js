const switchButton = document.getElementById("switch");
        const cabecera = document.querySelector(".cabecera");
        const box = document.querySelector(".box");

        switchButton.addEventListener("change", function() {
            cabecera.classList.toggle("no-blur");
            box.classList.toggle("no-blur");
        });

        window.addEventListener("load", function() {
            setTimeout(function() {
                const logoGif = document.getElementById("logo-gif");
                logoGif.classList.add("paused");
                logoGif.src = "imagenes/EydocStatic.png";
            }, 9000);
        });