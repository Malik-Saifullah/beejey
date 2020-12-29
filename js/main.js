$(".btn-toggle").on("click", function () {
    $(".main-nav").toggle();
    $(".social-icon").toggle();
});


$(".pagination-nav .pagination-nav-item").on("click", function () {
    $(".pagination-nav .pagination-nav-item").removeClass("active");
    $(this).addClass("active");
});