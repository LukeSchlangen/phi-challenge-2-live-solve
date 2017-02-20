console.log('client.js was sourced correctly');

$(document).ready(function(){
  console.log('jquery was sourced correctly');

  $('.color-button').on('click', function(){
    console.log('$(this).data().color', $(this).data().color);
    // Add a red cube to the DOM
    var newCubeColor = $(this).data().color;
    $('.container').append('<div class="color-cube ' + newCubeColor + '"></div>');
    var colorSelector = '#' + newCubeColor;
    var currentBlockCount = $(colorSelector).text();
    currentBlockCount++;
    $(colorSelector).text(currentBlockCount);
  });
});
