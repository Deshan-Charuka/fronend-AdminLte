$('#main-menu a').click(function () {
    $('#main-menu a').removeClass("active");
    $(this).addClass("active");
    $('.content-wrapper').addClass("d-none");
    switch ($(this).text().trim()) {
        case "Dashboard":
            $('#dashboard').removeClass("d-none");
            break;
        case "Customer Management":
            $('#customer').removeClass("d-none");
            break;
        case "Item Management":
            $('#item').removeClass("d-none");
            break;
        case "Place Order":
            $("#place-order").removeClass("d-none");
            break;
        case "Search Orders":
            $("#search-order").removeClass("d-none");
            break;
        default:
            break;
    }
});