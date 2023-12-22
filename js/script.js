(function($){
    $(function(){
        //*****Scroll to section****/
        $(".nase-prace-jq-scroll").click(function() {
            $("html, body").animate({scrollTop: $(".nase-prace-jq").offset().top-50}, 1000);
        });

    $(".oNas-jq-scroll").click(function() {
        $("html, body").animate({scrollTop: $(".coDelame-jq").offset().top-50}, 1500);
    });

    $(".reference-jq-scroll").click(function() {
        $("html, body").animate({scrollTop: $(".reference-jq").offset().top-50}, 1500);
    });

    $(".contact-form-jq-scroll").click(function() {
        $("html, body").animate({scrollTop: $(".contact-form-jq").offset().top-50}, 1500); 
    });

     //*****Mobile navigation****/
     $(".jq-nav-icon").click(function(){
           
        $(".nav-background").slideToggle();
        $(".mobile-nav-back").fadeToggle();
         $("nav ul").fadeToggle();  
         $(".right-menu ul").fadeToggle();

     });
    
     $(".jq-image-hamburger").click(function(){

        if($(".jq-image-hamburger").attr("src") == "img/hamburgerMenu.png")
    {
        $($(".jq-image-hamburger").attr("src","img/crossMenu.png"));
    }
        else $($(".jq-image-hamburger").attr("src","img/hamburgerMenu.png"));
        
    });   
    }); 
    })(jQuery);

  
     //*****Javascript remove,add .active****/
    
    let slides = document.querySelectorAll(".slide");

    slides.forEach(function(oneslide){
        oneslide.addEventListener("click", function(){
            deleteActiveClass();
            oneslide.classList.add("active");
        });
    });
    
    function deleteActiveClass(){
        slides.forEach(function(mySlide){
            mySlide.classList.remove("active");
        });
    };



   







   
