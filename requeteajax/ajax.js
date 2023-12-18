$(document).ready(function () {
    // Remplacer avec html()
    $("#validate").on("click", function () {
        set_new_user();
    });
});
function set_new_user() {
    let email = $("#email").val();
    let computer = $("#computer").val();
    $.ajax({
        type: "POST",
        data: "email=" + email + "&computer=" + computer,
        url: "test.php",
        success: function (data) {
            console.log(data);
        },
    });
}
