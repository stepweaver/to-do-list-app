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

// Establish crossOut function.
function crossOut() {
  li.toggleClass("strike");
}

// Execute crossOut to the <li> on double click.
li.on("dblclick", function crossOut() {
  li.toggleClass("strike");
});

// Create crossOut button "X".
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

function deleteListItem() {
  li.addClass("delete");
}
crossOutButton.on("click", deleteListItem);

$('#list').sortable();
