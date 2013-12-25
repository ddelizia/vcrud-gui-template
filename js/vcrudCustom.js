var editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.getSession().setMode("ace/mode/groovy");

$(document).ready(function () {

    $(".alert").addClass("in").fadeOut(4500);

    /* swap open/close side menu icons */
    $('[data-toggle=collapse]').click(function () {
        // toggle icon
        $(this).find("i").toggleClass("glyphicon-folder-close glyphicon-folder-open");
    });

    //Editable
    $.fn.editable.defaults.mode = 'popup';
    //make username editable
    $('#username').editable();

    //datepicker
    $('.datepicker').datepicker()
});

