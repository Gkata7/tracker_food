// App Controller
const App = (function(itemController, uiController){
  // Load Event Listeners
  const loadEventListeners = function(){
    // get UI selectors
    const UISelectors = uiController.getSelectors();
    // Add Item Event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }
  // Add Item Submit
  const itemAddSubmit = function(e){
    const input = uiController.getItemInput();
    if(input.name !== '' && input.calories !== ''){
      const newItem = itemController.addItem(input.name, input.calories);
    }
    e.preventDefault();
  }
  // Public Methods
  return {
    init: function(){
      // Fetch items from data structure
      const items = itemController.getItems();
      uiController.populateItemList(items);
      loadEventListeners();
    }
  }
})(itemController, uiController);


// Initialize the App
App.init();