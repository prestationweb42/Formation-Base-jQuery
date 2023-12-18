$(document).ready(function () {
    console.log("toto");

    // Selectionne un id
    $("#identifiant button").on("click", function () {
        console.log("un identifiant");
    });

    // Selectionne une classe et un enfant
    $(".classe button").on("click", function () {
        console.log("la classe");
    });

    // Selectionne une balise avec une classe
    $("button.btn").on("click", function () {
        console.log("la classe btn");
    });

    // this qui selectionne l'element courant et son contenu html
    $(".classe button").on("click", function () {
        console.log($(this).html());
    });

    // this qui selectionne l'element courant et remplace le contenu html
    $(".btn1").on("click", function () {
        console.log($(this).html("Contenu changé").addClass("active"));
    });

    // Remplace le contenu HTML + event de la souris
    // $(".classe button").on("click", function () {
    // $(".classe button").on("mouseover", function () {
    // $(".classe button").on("mouseenter", function () {
    $(".btn2").on("mouseleave", function () {
        $(".btn2").html("Contenu changé").addClass("active");
    });

    // Connaitre un element du clavier
    $("*").on("keypress", function (e) {
        console.log(`
        Le nom est : ${e.code}, 
        la touche est : ${e.key}, 
        le numéro est : ${e.keyCode},
        `);
        // console.log(e);4
    });
    $("input").on("keypress", function (e) {
        $(".innertext").html(`
        <p>Le nom est : ${e.code},</p> 
        <p>la touche est : ${e.key},</p> 
        <p>le numéro est : ${e.keyCode}</p>
        `);
        // specialement une touche
        let key = e.key;
        if (key === "4") {
            $(".innercode").html(`
            <p>la touche spéciale est : ${key}</p>
            `);
        }
    });

    // Coordonnées mouse
    $("*").on("click", function (e) {
        $(".mouseXY div").html(`
            <p>x = ${e.pageX}</p>
            <p>y = ${e.pageY}</p>
            `);
    });

    // preventDefault
    $(".mousePreventDefault").bind("contextmenu", function (e) {
        e.preventDefault();
        alert(`clique droit annulé sur cette Div
            <p>x = ${e.pageX}</p>
            <p>y = ${e.pageY}</p>
        `);
    });
});
