function newItem() {
  let li = $('<li></li>');  // Create li HTML.
  let inputValue = $('#input').val(); // Create inputValue with id '#input'.
  li.append(inputValue); // Append inputValue as <li>.

  // Conditional. If inputValue is blank - alert, else - append inputValue as <li>.
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
}