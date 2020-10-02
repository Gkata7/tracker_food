// Item Controller
const itemController = (function(){
  // Creating item constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
  const data = {
    items: [
      {id:0, name: 'Steak', calories: 1200},
      {id:1, name: 'Sandwich', calories: 800},
      {id:2, name: 'Pizza', calories: 600}
    ],
    currentItem: null,
    totalCalories: 0
  }
  return {
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      let ID;
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      calories = parseInt(calories);
      newItem = new Item(ID, name, calories);
      data.items.push(newItem);
      return newItem;
    },
    logData: function(){
      return data;
    }
  }
})();