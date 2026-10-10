/* 
	 ? Challenge
    * create an object called toDoList
    * give it the following properties:
        * urgent
        * todo
        * completed
    * all three should be assigned a value of an empty array
    * create a method called add
        * add will take one parameter
        * it will add said parameter to the todo list
    * create a method called checked
        * it will take one param
        * it needs to check if that param exists in todo array
        * if it does, move it to completed
    * create a method called removeToDo
        * it will take one param
        * it will check if the param exists inside todo array
        * if it does, it will remove it
        * EXTRA: return the removed item
        * assign it to a variable called removedItem
    * create a method called prioritize
        * it will take one param
        * it will check if todo array has said item
        * if it does, move it to urgent
    * create a method called clearAll
        * this method will clear all three of the arrays
*/

let toDoList = {
  urgent: [],
  todo: [],
  completed: [],

  add(item) {
    this.todo.push(item);
  },

  foundItem(item, toDoList) {
    let result = null;

    let exists = this[toDoList].filter((i) => i === item);

    if (exists.length) {
      result = exists;
    }

    return result;
  },

  checked(item) {
    let exists = this.foundItem(item, "todo");
    if (exists.length) {
      this.completed.push(item);
      this.todo = this.todo.filter((i) => i !== item);
    }
  },

  removeToDo(item) {
    let result = null;

    let getIndexOfItem = this.todo.indexOf(item);

    if (getIndexOfItem !== -1) {
      result = this.todo.splice(getIndexOfItem, 1)[0];
    }

    return result;
  },

  prioritize(item) {
    let exists = this.foundItem(item, "todo");

    if (exists) {
      this.urgent.push(item);
      this.todo = this.todo.filter((i) => i !== exists[0]);
    }
  },

  clearAll() {
    this.urgent = [];
    this.todo = [];
    this.completed = [];
  },
};

toDoList.add("get milk");
console.log(toDoList);
