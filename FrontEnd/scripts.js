function submitForm(){

  let newMovie = {
    Title : document.getElementById('movie-title').value, 
    Genre : document.getElementById('movie-genre').value,
    DirectorName : document.getElementById('movie-director').value,
  }

  $.ajax({
    url: 'https://localhost:44384/api/movies',
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(newMovie),
    success: function( data, textStatus, jQxhr ){
      $('#movie-table').prepend(
        "<tr>" +
          "<td>" + newMovie.Title +"</td>" + 
          "<td>" + newMovie.Genre + "</td>" + 
          "<td>" + newMovie.DirectorName + "</td>" +
          "<td>" + 
            "<a href='#' onclick='getMovieList()'>" + 
              "<button class='btn-small'>Update Entry</button>" + 
            "</a>" + 
            "<button class='btn-small' onclick='deleteMovie(" + returnedList[i].Id + ")'>Delete Entry</button>" +
          "</td>" + 
        "</tr>");
      alert('movie successfully added');
    },
    error: function( jqXhr, textStatus, errorThrown ){
      console.log( errorThrown );
    }
  });
}

function getMovieList(){
  let returnedList = [];
  $.ajax({
    url: 'https://localhost:44384/api/movies',
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function( data, textStatus, jQxhr ){
      $('#movie-table').each(function(){
        for(i = 0; i < data.length; i++){
          returnedList[i] = data[i];
          $('#movie-table').append(
          	"<tr id = 'movie-id-" + returnedList[i].Id + "'>" +
              "<td>" + returnedList[i].Title + "</td>" +
              "<td>" + returnedList[i].Genre + "</td>" + 
              "<td>" + returnedList[i].DirectorName + "</td>" + 
              "<td>" +
                "<button class='btn-small'>Update Entry</button>" +
                "<button class='btn-small' onclick='deleteMovie(" + returnedList[i].Id + ")'>Delete Entry</button>" +
              "</td>" +
            "</tr>");
        }
      })
    },
    error: function(jqXhr, textStatus, errorThrown){
      console.log(errorThrown);
    }
  })
}

function deleteMovie(id){
  $.ajax({
    url: 'https://localhost:44384/api/movies/' + id,
    type: 'delete',
    contentType: 'application/json',
    success: function( data, textStatus, jQxhr ){
      console.log('DELETED THAT SHIT');
    },
    error: function( jqXhr, textStatus, errorThrown ){
      console.log( errorThrown );
    }
  });
}

// function updateMovie(){
  // $.ajax({
  //   url: 'https://localhost:44384/api/movies/',
  //   type: 'post',
  //   dataType: 'json',
  //   contentType: 'application/json',
  //   data: JSON.stringify(newMovie),
  //   success: function( data, textStatus, jQxhr ){
  //     $('#response pre').html( JSON.stringify(newMovie) );
  //   },
  //   error: function( jqXhr, textStatus, errorThrown ){
  //     console.log( errorThrown );
  //   }
  // });
// }

// function updateMovie(){

// let newMovie = {
// 	Title: document.getElementById('movie-title').value,
// 	Genre: document.getElementById('movie-genre').value,
// 	DirectorName: document.getElementById('movie-director').value
// }

// $.ajax({
//   url: 'https://localhost:44384/api/movies',
//   type: 'get',
//   dataType: 'json',
//   contentType: 'application/json',
//   success: function(data, textStatus, jqxhr){
//   	$('#').on('click', function(){
//   		"</td><td>" + newMovie.Title +
//   		"</td><td>" + newMovie.Genre + 
//   		"</td><td>" + newMovie.DirectorName +
//   		}
//   	}
//   }
// })
// }