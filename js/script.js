$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        // strings: ["I'm an Independent Learner", "For now, I focus on web development.", "Currently, I am focused on learning", "JS frameworks and CSS frameworks(tailwind css, react.js, next.js, etc)"],
        strings: ["I'm a Self-Taught Front End Developer", "Currently, I am focused on learning", "JS frameworks and CSS frameworks(tailwind css, react.js, next.js, etc)"],
        typeSpeed: 50,
        backSpeed: 70,
        loop: true
    });
    
});