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

  let testView = JSON.stringify(newMovie);
  console.log(testView);
  $('#response pre').html(testView);

  $.ajax({
    url: 'https://localhost:44384/api/movies',
    type: 'post',
    dataType: 'json',
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
  });
  // $('#response pre').Append(newMovie)
  // .Append($('#response pre'))
}

// $.ajax({
//   url: 'https://localhost:44384/api/movies',
//   type: 'get',
//   dataType: 'json',
//   contentType: 'application/json',
//   data: MediaError
// }).then(function(){
//   for(i = 0; i < data.Length(); i++){
//     this.Title = data[i][0];
//     this.Genre = data[i][1];
//     this.DirectorName = data[i][2]
//   }
// })
// $('#movie-table').html(<tr><td></td></tr>)