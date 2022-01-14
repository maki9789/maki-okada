// hanburger
// $(function(){
//     $("nav").hide();
//     $(".h-btn").click(function(){
//         $("nav").toggle(300);
//     });
// }); 

$('.btn-trigger').on('click', function(){
    $(this).toggleClass('active');
    return false;
});
