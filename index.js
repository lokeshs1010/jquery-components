$(document).ready(function () {
    // Collapse jquery function
     $(".heading").click(function () {
       $(this).next().slideToggle();
       $(this).parent().siblings().children()
       .filter(":eq(1),:eq(3)").hide();
     });


     // Navbar jquery function
     $(".bar").click(function(){
       $('ul').toggleClass('activeBar');
     })


     // Modal jquery function
     $(".open").on("click", function () {
       $(".overlay, .modal").addClass("active");
     });

     $(".close, .overlay").on("click", function () {
       $(".overlay, .modal").removeClass("active");
     });
});