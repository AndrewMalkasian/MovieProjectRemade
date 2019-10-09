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
    title : this["title"].value, 
    genre : this["genre"].value,
    director : this["director"].value 
  }
  
  $.ajax({
    url: 'https://localhost:44384/api/movies',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify(newMovie),
    success: function( data, textStatus, jQxhr ){
      Console.Log('SUCCESSSSSS');
      // $('#response pre').html( data );
    },
    error: function( jqXhr, textStatus, errorThrown ){
      console.log( errorThrown );
    }
  })
}
