function ToDo(list) {
  this.list = [];
}

ToDo.prototype.addItem = function() {
  for (var i = 0; i < arguments.length; i++ ) {
  this.list.push(arguments[i]);
  }
  return this.list;
}
