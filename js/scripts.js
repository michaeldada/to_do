function ToDo(list) {
  this.list = [];
}

ToDo.prototype.addItem = function(input1) {
  this.list.push(input1);
  return this.list;
}
