$(function(){

    //메인
    $(".main>li").mouseover(function(){
        $(".sub").show();
    })//
    $(".main>li").mouseout(function(){
        $(".sub").hide();
    })
    
    
    //이미지슬라이드(페이드효과)
    $(".fade li").eq(0).siblings().hide(); /* 첫번째를 가려줘야하는게 1순위!!! */
    var n = 0; //0 1 2
    setInterval(function(){
        if(n==2){
            n=0;
        }else{
            n++;
        }//

        $(".fade li").eq(n).siblings().fadeOut();
        $(".fade li").eq(n).fadeIn();
    },3000)
    // siblings: 나를 뺀 형제들!!!!!!!!!!!

    //팝업
    $(".pop").hide();

    $(".p_click").click(function(){
        $(".pop").show();
    })//

    $(".p_close").click(function(){
        $(".pop").hide();
    })//


})//jquery