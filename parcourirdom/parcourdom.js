$(document).ready(function () {
    // alert("selecteur");

    // Element Parent
    // Affiche le contenu du parent -> container-2
    $(".parent-3").on("click", function (e) {
        e.stopPropagation();
        $(".innerParent").html($(".container-3").parent().html());
        console.log($(".container-3").parent().html());
    });

    // Affiche le contenu du parent -> container-1
    $(".parent-2").on("click", function (e) {
        e.stopPropagation();
        $(".innerParent").html($(".parent-2").parent().html());
        console.log($(".parent-2").parent().html());
    });

    // Element Enfant
    // Affiche le contenu du container-2
    $(".enfant-2").on("click", function (e) {
        e.stopPropagation();
        $(".innerChild").html($(".enfant-2").children().html());
        console.log($(".enfant-2").children().html());
    });

    // Selectionner un Element
    // Recherche un element
    $(".parent-1").on("click", function (e) {
        e.stopPropagation();
        $(".innerFind").html($(".parent-1").find(".enfant-3").html());
        console.log($(".parent-1").find(".enfant-3").html());
    });
});
