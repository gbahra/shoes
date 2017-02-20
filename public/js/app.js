$(function(){
  var url = window.location.pathname;
  var _id = url.substring(url.lastIndexOf('/') + 1);
  console.log(_id)
  var likes;
  var id;
  var name = $('h3').text();
  $.get('api/shoes', function(data){
    for(var i =0; i<data.shoes.length; i++){
      if(data.shoes[i].name == name){
        likes = data.shoes[i].likes;
        id = data.shoes[i].id;
      }
    }
  $('#increment').html(likes)
  });

  $('#up').click(function(){
    $.ajax({
      type: 'PATCH',
      url: "/" + _id,
      likes: likes++
      })
    $('#increment').html(likes)
  })

  $('#down').click(function(){
    $.ajax({
      type: 'PATCH',
      url: "/" + _id,
      likes: likes--
      }).done({

      })
    $('#increment').html(likes)
  })

  if(likes === -10){
    //delete shoe
  }
})
