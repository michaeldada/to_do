describe('ToDo', function() {
  it("should create an object with a list of things to do", function() {
    var testToDo = new ToDo();
    expect(testToDo.list).to.eql([]);
  });

  it('should add list items to the list', function() {
    var testToDo = new ToDo();
    expect(testToDo.addItem("shower")).to.eql(['shower']);
  });

  it('should display the list items in the list when added', function() {
    var testToDo = new ToDo();
    expect(testToDo.addItem("shower")).to.eql(['shower']);
  });

  it('should display multiple list items in the list when added', function() {
    var testToDo = new ToDo();
    expect(testToDo.addItem("shower", "clean", "eat")).to.eql(['shower', 'clean', 'eat']);
  });

  it('should copy the first item from list array and into done array', function() {
    var testToDo = new ToDo();
    testToDo.addItem('shower', 'clean');
    expect(testToDo.doneItems(0)).to.eql(['shower']);
  });

  it('should remove the targeted item from list array', function() {
    var testToDo = new ToDo();
    testToDo.list = (['shower', 'clean', 'eat']);
    testToDo.doneItems(1);
    expect(testToDo.list).to.eql(['shower', 'eat']);
  })

});
