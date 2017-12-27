function createStore() {

  const listeners = [];
  const data = {};

  //#4
  function emitChange() {
    
    listeners.forEach(listener => listener());
  }

  function subscribe(callback) {

    listeners.push(callback);
  }

  //#3
  function setData(key, value) {

    data[key] = value;
    emitChange();
  }

  function getData() {

    return data;
  }

  return {
    subscribe,
    setData,
    getData,
  };
}

//#1
const store = createStore();
// {subscribe: ƒ, setData: ƒ, getData: ƒ}

store.subscribe(function () {

  const storeData = store.getData(); //storeData = {flavor: "chocolate"}
  console.log('Updated store data:', storeData);
});

//#2
store.setData('flavor', 'chocolate');
store.setData('quantity', '24');
// CONSOLE: Updated store data: {flavor: "chocolate"}
