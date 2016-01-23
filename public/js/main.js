$(document).ready(init);

var markContent;
var htmlContent;

function init() {
  $('#newEntry').on('click', getMarkdown);
}

function getMarkdown(event) {
event.preventDefault();


var markedD = $('#markEntry').val();
  $.post('/markdown', {markdown: markedD})
  .success(function(data) {
    debugger;
    // console.log(data);
    // console.log($.parseHTML(data));
    $('#outputDiv').append($.parseHTML(data));
  })
  .fail(function(err) {
    alert('fix me');
  });
}

// function removeText() {
//  $('input:checked').closest('tr').remove();
// }
