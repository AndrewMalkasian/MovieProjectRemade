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
                "<button class='btn-small' onclick='retrieveIndividualMovie(" + returnedList[i].Id + ")'>Update Entry</button>" +
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
      console.log('deleted');
    },
    error: function( jqXhr, textStatus, errorThrown ){
      console.log( errorThrown );
    }
  });
}

function retrieveIndividualMovie(id){
  $('#submitNewMovie').addClass('hide');
  $('#updateMovieButton').removeClass('hide');
  $.ajax({
    url: 'https://localhost:44384/api/movies/' + id,
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function( data, textStatus, jQxhr ){
      $('#movie-table').empty();
        $('#movie-table').append(
          "<tr id = 'movie-id-" + data.Id + "'>" +
            "<td>" + data.Title + "</td>" +
            "<td>" + data.Genre + "</td>" + 
            "<td>" + data.DirectorName + "</td>" + 
            "<td>" +
              "<button class='btn-small' onclick='deleteMovie(" + data.Id + ")'>Delete Entry</button>" +
            "</td>" +
          "</tr>");

      $('#movie-title').val(data.Title);
      $('#movie-genre').val(data.Genre);
      $('#movie-director').val(data.DirectorName);
      $('#updateMovieButton').attr('onclick', 'updateMovie(' + id + ')')
    },
    error: function(jqXhr, textStatus, errorThrown){
      console.log(errorThrown);
    }
  })
}

function updateMovie(id){

  let updatedMovie = {
    Title : document.getElementById('movie-title').value, 
    Genre : document.getElementById('movie-genre').value,
    DirectorName : document.getElementById('movie-director').value,
  }
  
  $.ajax({
    url: 'https://localhost:44384/api/movies/' + id,
    type: 'put',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(updatedMovie),
    success: function( data, textStatus, jQxhr ){
      console.log('success');
    },
    error: function(jqXhr, textStatus, errorThrown){
      console.log(errorThrown);
    }
  });
  $('#movie-table').empty();
  getMovieList();
  $('#movie-title').val('');
  $('#movie-genre').val('');
  $('#movie-director').val('');
}
