// hanburger
$(function(){
    $("nav").hide();
    $(".h-btn").click(function(){//メニューボタンをクリックしたとき
        // $(this).toggleClass('active');
        // $(".h-btn img").fadeOut();
        $("nav").toggle(300);//0.3秒で表示したり非表示にしたりする
    });
}); 
