$(document).ready(init);

function init() {
  $('#newEntry').on('click', getMarkdown);
}

function getMarkdown(event) {
event.preventDefault();

var markedD = $('#markEntry').val();
  $.post('/markdown', {markdown: markedD})
  .success(function(data) {
    // debugger;
    // console.log(data);
    $('#outputDiv').empty().append($.parseHTML(data));
  })
  .fail(function(err) {
    alert('fix me');
  });
}

// function removeText() {
//  $('input:checked').closest('tr').remove();
// }
