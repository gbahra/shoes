$(function(){
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
    likes++;
    //update database
    $('#increment').html(likes)
  })
  $('#down').click(function(){
    likes--;
    //update database
    $('#increment').html(likes)
  })
  if(likes === -10){
    //delete shoe
  }
})
