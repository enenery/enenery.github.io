

function main(){
  $('.list').hide();
  $('.list').fadeIn(1000);
  
  $('.list').hide();
  $('.day-button').on('click', function() {
    $(this).next().slideToggle(400);
  $(this).toggleClass('active');
  
});
}

$(document).ready(main);