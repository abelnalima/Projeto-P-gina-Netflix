/*JQuery*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function teste() {
    newWindow = window.open ('../html/info.html', 'popup', "width=650 height=280 top=550 left=400");
}