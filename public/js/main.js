$(document).ready(init);

function init() {
  $('#newEntry').on('click', getMarkdown);
  // $input.on('keyup', getMarkdown);
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
