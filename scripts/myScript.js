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

    $.getJSON("/db/movies.json",function(data){ //load the db, initiate the app, get the types of mvies, and sort drectrs
       
        gMovie.database = data;
        gMovie.init();
        // gMovie.getTypes ();
        // gMovie.getDirectors();
    });
}
gMovie.init = function(){
    gMovie.filterSlider();
    gMovie.getTypes ();
    gMovie.getDirectors();
    gMovie.generateMarkup();
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
gMovie.getTypes = function(){ //this function will sort out the types of movies and push them into the types empty array

    var types = [];

    $.each(gMovie.database, function(index, elem){
       
        if($.inArray(gMovie.database[index].type, types)){ //go to theoug type of movie, and sort thru types of movies. 
            
            var typeValue = gMovie.database[index].type;//then push the type of movie with into the type variable
        
        types.push(typeValue);
        $('#categories').append('<option value=" '+ typeValue + '"> '+ typeValue + 
        '</option>')

        }
        
        

    })

};
gMovie.getDirectors = function(){
    var db = gMovie.database;
    var directors = [];

    $.each(db, function(index, elem){
       
        if($.inArray(db[index].director, directors)){ //go to through Directrs, and sort thru. 
            
            var directorValue = db[index].director;
        
        directors.push(directorValue);//to push and append directors into the array directors
        
        $('#directors').append('<option value=" '+ directorValue + '"> '+ directorValue + 
        '</option>')
        }
    })
};
gMovie.generateMarkup = function(){
   
    var template = "";
   
    $.each(gMovie.database, function(index){

        var db = gMovie.database;
  
  
  template +=     '<div class="movie-item">';
  template +=       '<div class="header">';
  template +=           '<div class="left">';
  template +=               '<img src="images/movies/'+ db[index].img +'">';
  template +=           '</div>';
  template +=           '<div class="right">';
  template +=               '<h2>'+ db[index].title +'</h2>';
  template +=           '<div class="node">';
  template +=                  '<span> Year: </span>' + db[index].year +'';//the quotes b4 the coma r neccessary
  template +=               '</div>';
  template +=              '<div class="node">';
  template +=                   '<span> Director: </span> '+ db[index].director +'';
  template +=               '</div>';
  template +=               '<div class="node">';
  template +=                   '<span> Type: </span> Action'+ db[index].type +'';
  template +=              '</div>';
  template +=              '<div class="show-desc">See Description..</div>';
  template +=           '</div>';

  template +=       '</div>';
  template +=       '<div class="description">';
  template +=           '<strong>Description:</strong>' + db[index].desc +'';    
  template +=       '</div>';
  template +=      '</div>';

   });


 $(".movies-content").append(template)

   gMovie.showDescription();

   gMovie.startFiltrer();

};
gMovie.showDescription = function (){

    $('.show-desc').on('click', function(){

        var $this = $(this);
        var parent = $(this).parents().eq(2);
        var element = parent.find('.description');

        element.slideToggle(350, function(){

            if($this.hasClass('active')){
                $this.text('See Description').removeClass('active');
            }else{
                $this.text('Hide Description').addClass('active');

            }
         });
    });
};

gMovie.loadAssets();