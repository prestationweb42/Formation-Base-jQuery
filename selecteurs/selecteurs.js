$(document).ready(function () {
    // alert("selecteur");
    $("#id_selecteurs button").on("click", function () {
        $(".innertext").html(`
        <h4>vous avez cliquez sur le bouton avec un ID</h4>`);
    });
    $(".classe_selecteurs button").on("click", function () {
        $(".innertext").html(`
        <h4>vous avez cliquez sur le bouton avec une Classe</h4>`);
    });
    // this qui selectionne l'element courant et son contenu html
    $(".this_selecteurs button").on("click", function () {
        $(".innertext").html(
            `
        Vous avez cliquez sur le bouton THIS qui contient le mot : ` + $(this).html()
        );
        // $(".innertext").html($(this).html);
    });
});
