// (function start (){

//     this.runFunction = function(){
//         alert('hello');
//     };
    
// })();
var gMovie = {};
gMovie.init = function(){
    gMovie.filterSlider();

}
gMovie.filterSlider = function(){
    
    $(".filter.open").on("click", function(){

        $(".filter-container").slideToggle(400, function(){
            let btn = $(this).prev();

            if(btn.hasClass("active")){
                $(".filter.open").find(".btn-title").text("Filter By");
                btn.removeClass("active");
            }else{
                $(".filter.open").find(".btn-title").text("Close");
                btn.addClass("active");
            }


        })
    })
}
gMovie.init();