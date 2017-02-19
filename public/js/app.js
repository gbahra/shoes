$(function(){
  var i = 0;// changes this so you read it off the page
  $('#up').click(function(){
    console.log('yh')
    i++;
    $('#increment').html(i)
  })
  $('#down').click(function(){
    i--;
    $('#increment').html(i)
  })
})
