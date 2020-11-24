

const items = [];
let error = null;
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};



const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

function findAndUpdate(id, newData){
  const updateItem = this.items.find(item => item.id==id)
    Object.assign(updateItem, newData)
  }

  const setError = function (error) {
    this.error = error;
  };

export default {
  items,
  error,
  hideCheckeditems,
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate,
  setError,
};