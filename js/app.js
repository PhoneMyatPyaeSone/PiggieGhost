$('.art-gallery').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

let waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        if(direction == "down"){
            $(".header").addClass("menu");
            $(".header").addClass("shadow");
        }else{
            $(".header").removeClass("menu");
            $(".header").removeClass("shadow");
        }
    },
    offset: '75%'
});