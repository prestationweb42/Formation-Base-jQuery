document.addEventListener("keydown", event => {
    // document.addEventListener("keypress", event => {
    let name = event.key;
    let code = event.which;
    // let code = event.keyCode;
    alert(`Le Nom de la touche appuyée est ${name}, son Numéro est: ${code}`);
    if (code == "77") {
        console.log(`Vous avez pressé la touche m`);
    }
});
