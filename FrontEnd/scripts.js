function addMovie(){
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
    console.log('successfully added');
    getMovieList();
  },
  error: function( jqXhr, textStatus, errorThrown ){
    console.log( errorThrown );
  }
  });
  resetFields();
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
                "<button class='btn-small' onclick='updateMovie(" + returnedList[i].Id + ")'>Update Entry</button>" +
                "<a class='btn-float btn-small' onclick='deleteMovie(" + returnedList[i].Id + ")'><i class='material-icons'>delete_forever</i></a>" +
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
      getMovieList();
    },
    error: function( jqXhr, textStatus, errorThrown ){
      console.log( errorThrown );
    }
  });
  resetFields();
}

function retrieveIndividualMovie(id){
  $('#submit-new-movie').addClass('hide');
  $('#update-movie-button').removeClass('hide');
  $.ajax({
    url: 'https://localhost:44384/api/movies/' + id,
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function( data, textStatus, jQxhr ){
      $('#movie-title').val(data.Title);
      $('#movie-genre').val(data.Genre);
      $('#movie-director').val(data.DirectorName);
      $('.movie-input').next('label').addClass('active');
      $('#update-movie-button').attr('onclick', 'updateMovie(' + id + ')');
      $('#update-movie-button button').addClass('pulse');
      $('#submit-new-movie').addClass('hide');
    },
    error: function(jqXhr, textStatus, errorThrown){
      console.log(errorThrown);
    }
  });
}

function updateMovie(id){
  retrieveIndividualMovie(id);
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
      getMovieList();
    },
    error: function(jqXhr, textStatus, errorThrown){
      console.log(errorThrown);
    }
  });
  resetFields();
}

function resetFields(){
  $('.movie-input').val('').delay(800);
  $('.movie-input').next('label').removeClass('active');
  $('#movie-table').empty();
  $('#submit-new-movie').removeClass('hide');
}

$(document).ready(getMovieList());
