function validacion() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var celular = document.getElementById("celular").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || celular === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

 
    var correoExpresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoExpresion.test(correo)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }


    var celularExpresion = /^\d{10}$/;
    if (!celularExpresion.test(celular)) {
        alert("Por favor, ingresa un número de celular válido (10 dígitos).");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}
function subir() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

   // Crea un elemento <iframe> para el video de YouTube
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-container', {
    videoId: 'is6Ds1G8PC8',
    playerVars: {
        autoplay: 1,
        start: 35,
        controls: 0,
        loop: 1,
        playlist: 'is6Ds1G8PC8' // Reproduce la misma lista de reproducción del video
    },
    events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
    }
    });
}

function onPlayerReady(event) {
    event.target.playVideo(); // Inicia la reproducción del video una vez que el reproductor esté listo
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
    player.playVideo(); // Reinicia la reproducción del video cuando llega al final
    }
}