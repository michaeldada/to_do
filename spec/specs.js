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
});
