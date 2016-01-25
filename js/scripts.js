function ToDo() {
  this.list = [];
  this.done = [];
}

ToDo.prototype.addItem = function() {
  for (var i = 0; i < arguments.length; i++ ) {
  this.list.push(arguments[i]);
  }
  return this.list;
}

ToDo.prototype.doneItems = function(index) {
  this.done = this.list.slice(index, index+1);
  var beforeCut = this.list.slice(0,index);
  var afterCut = this.list.slice(index+1, this.list.length);
  this.list = beforeCut.concat(afterCut);

  return this.list && this.done;
}

$(document).ready(function() {
  $('form#toDoForm').submit(function(event) {
    event.preventDefault();

    var listInput = $('#input').val();
    var newList = new ToDo()
    newList.addItem(listInput);

    $('ol#toDoList').append('<li class="listItems">' + listInput + '</li>');

    $('li.listItems').last().click(function() {
      var completedItem = $(this).text();
      $('ol#completedList').append('<li class="doneItems">' + completedItem + '</li>');
      $('li.listItems').last().remove();

    });
    $('input#input').val("");
  });

});
