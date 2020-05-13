// (function start (){

//     this.runFunction = function(){
//         alert('hello');
//     };
    
// })();


var gMovie = {};
gMovie.database = [];
gMovie.init = function(){
    gMovie.filterSlider();

}

gMovie.loadAssets = function(){

    $.getJSON("/db/movies.json",function(data){
       
        gMovie.database = data;
        gMovie.init();
        gMovie.getTypes ();
    });
}
gMovie.init = function(){
    gMovie.filterSlider();
}



gMovie.filterSlider = function(){
    
    $(".filter.open").on("click", function(){

        $(".filter-container").slideToggle(400, function(){
            let btn = $(this).prev();

            if(btn.hasClass("active")){//remove the class of active to the button so it drops down d menu
                $(".filter.open").find(".btn-title").text("Filter By");
                btn.removeClass("active");
            }else{ //add the class of active to close the filter button
                $(".filter.open").find(".btn-title").text("Close");
                btn.addClass("active");
            }


        })
    })
}
gMovie.getTypes = function(){

    var types = [];

    $.each(gMovie.database, function(index, elem){
        var typeValue = gMovie.database[index].type;
        types.push(typeValue);
        $('#categories').append('<option value=" '+ typeValue + '"> '+ typeValue + 
        '</option>')

    })

};

gMovie.loadAssets();