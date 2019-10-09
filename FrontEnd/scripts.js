// PROVIDED DEMO CODE
// (function($){
//   function processForm( e ){
//       var dict = {
//         Title : this["title"].value,
//         Director: this["director"].value
//       };

//       $.ajax({
//           url: 'https://localhost:44352/api/movie',
//           dataType: 'json',
//           type: 'post',
//           contentType: 'application/json',
//           data: JSON.stringify(dict),
//           success: function( data, textStatus, jQxhr ){
//               $('#response pre').html( data );
//           },
//           error: function( jqXhr, textStatus, errorThrown ){
//               console.log( errorThrown );
//           }
//       });

//       e.preventDefault();
//   }
//   $('#my-form').submit( processForm );
// })(jQuery);
// END PROVIDED DEMO CODE
function submitForm(){

  let newMovie = {
    Title : document.getElementById('movie-title').value, 
    Genre : document.getElementById('movie-genre').value,
    DirectorName : document.getElementById('movie-director').value 
  }

  $.ajax({
    url: 'https://localhost:44384/api/movies',
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(newMovie),
    success: function( data, textStatus, jQxhr ){
      $('#response pre').html( JSON.stringify(newMovie) );
    },
    error: function( jqXhr, textStatus, errorThrown ){
      console.log( errorThrown );
    }
  });
  // $('#response pre').Append(newMovie)
  // .Append($('#response pre'))
}

function genericFunction(){
  let returnedList = [];
  $.ajax({
    url: 'https://localhost:44384/api/movies',
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data, textStatus, jQxhr){
      $(data).each(function(){
        for(i = 0; i < data.length; i++){
          returnedList[i] = data[i];
        }
      })
    },
    error: function(){
      console.log('ERRRORRRRR');
    }
  })
  console.log(returnedList);
  // $('#movie-table').html()
}


// .then(function(){
//   for(i = 0; i < data.Length(); i++){
//     this.Title = data[i][0];
//     this.Genre = data[i][1];
//     this.DirectorName = data[i][2]
//   }