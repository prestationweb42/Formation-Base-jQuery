$(document).ready(function () {
    // Remplacer avec html()
    $(".btn1").on("click", function () {
        const newH2 = $("#titleH2").val();
        if (!newH2 == "") {
            $("h2").html(newH2);
            console.log(newH2);
        }
    });
    $(".btn2").on("click", function () {
        const newH3 = $("#titleH3").val();
        if (!newH3 == "") {
            $("h3").html(newH3);
            console.log(newH3);
        }
    });

    // Ajouter du texte avec append()
    $(".btn3").on("click", function () {
        const newH4 = $("#titleH4").val();
        $("h4").append(newH4);
        console.log(newH4);
    });

    // Supprimer un element avec remove()
    $(".btn4").on("click", function () {
        $("h4").remove();
    });

    // Ajouter un element avant before()
    $(".btn5").on("click", function () {
        $("h4").before("<h5>Titre ajouter avant</h5>");
    });

    // Ajouter un element après after()
    $(".btn5_1").on("click", function () {
        $("h4").after("<h5>Titre ajouter après</h5>");
    });

    // Inserrer un element dans un element avec prepend()
    $(".btn6").on("click", function () {
        $(".content1").prepend("<button>Btn ajouter avec prepend()</button>");
    });

    // Remplacer un element par un element avec replaceWith()
    $(".btn7").on("click", function () {
        $(".btn7").replaceWith("<input type='text' />");
    });

    // Ajouter une classe avec addClass()
    $(".btn8").on("click", function () {
        $(".content5").addClass("bgcolor");
    });

    // Ajouter du style avec css()
    $(".btn9").on("click", function () {
        $(".content6").css("backgroundColor", "red");
    });

    // Cacher un element avec hide()
    $(".btn10").on("click", function () {
        $(".hideMe").hide();
    });
    // Afficher un element avec show()
    $(".btn10_1").on("click", function () {
        $(".hideMe").show().addClass("bgcolor");
    });

    // Afficher un element avec toggle()
    $(".btn11").on("click", function () {
        $(".toggleMe").toggle().addClass("bgcolor");
    });

    // Copier du contenu dans le presse papier
    $(".btn12").on("click", function (e) {
        e.preventDefault();
        copyClipBoard($("#copyText").val());
    });
    function copyClipBoard(val) {
        const temp = $("<textarea>");
        $("body").append(temp);
        temp.val(val).select();
        document.execCommand("copy");
        temp.remove();
        pasteClipBoard();
    }

    // scroll smooth
    $(".ancre").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top,
            },
            500
        );
    });
    // Drag & Drop
    $("#dragDrop").draggable({
        revert: "invalid",
        cursor: "move",
    });
    $(".content10 div").droppable({
        accept: "#dragDrop",
        drop: function (event, ui) {
            $(this).append(ui.draggable.attr("style", "position: relative;"));
            $(".result").html(
                "Le texte du bouton est le suivant :  <h4>" +
                    ui.draggable.text() +
                    "</h4>"
            );
        },
    });
});
