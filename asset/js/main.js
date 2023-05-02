/* =================LEFT SIDEBAR START STYLE===================== */
$(document).on('click', '#sidebar li', function () {
    $(this).addClass('active').siblings().removeClass('active')
});
/* =================LEFT SIDEBAR DP TOGGLE START STYLE===================== */
$('.sub-menu ul').hide();
$('.sub-menu a').click(function () {
    $(this).parent('.sub-menu').children('ul').slideToggle('100')
    $(this).find('.right').toggleClass('fa-caret-up fa-caret-down')
});

/* ==================SIDEBAR TOGGLE ===================== */
$(document).ready(function () {
    $('#toggleSidebar').click(function () {
        $(".left-menu").toggleClass("hide");
        $(".content-wrapper").toggleClass("hide");
    });
});

// ==================order show ======================
$(document).ready(function () {
    $("#OrderTable").DataTable();
});