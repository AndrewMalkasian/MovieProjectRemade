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
    title : document.getElementById('movie-title').value, 
    genre : document.getElementById('movie-genre').value,
    director : document.getElementById('movie-director').value 
  }
  
  $.ajax({
    url: 'https://localhost:44384/api/movies',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify(newMovie),
    success: function( data, textStatus, jQxhr ){
      console.log('SUCCESSSSSS');
      $('#response pre').html( data );
    },
    error: function( jqXhr, textStatus, errorThrown ){
      console.log('FAIL FAIL FAIL');
      console.log( errorThrown );
    }
  })
}
