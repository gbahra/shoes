$(function(){
  var url = window.location.pathname;
  var _id = url.substring(url.lastIndexOf('/') + 1);
  var likes;
  var id;
  var name = $('h3').text();
  $.get('api/shoes', function(data){
    console.log(data)
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
      url: "/api/shoes/" + _id,
      data: {
        up: true
      }
    }).catch(function(err){
      console.log(err);
    }).done(function(data) {
      console.log(data);
      $('#increment').html(data.likes)
    })
  })

  $('#down').click(function(){
    $.ajax({
      type: 'PATCH',
      url: "/api/shoes/" + _id,
      data: {
        up: false
      }
    }).catch(function(err) {
      console.log(err);
    }).done(function(data) {
      console.log(data);
      deadShoe(data);
      $('#increment').html(data.likes)
    })
  })
function deadShoe(data){
  if(data.likes == -10){
    console.log('deadd')
      $.ajax({
       type: 'DELETE',
       url: "/api/shoes/" + _id,
     }).done(function(data) {
       console.log("DELETE");
     })

   }
}
})

