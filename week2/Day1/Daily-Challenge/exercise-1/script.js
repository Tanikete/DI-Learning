const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//find banana index
bananaIndex = fruits.indexOf("Banana")

// Remove "Banana" using splice
if (bananaIndex !== -1) {
    
    fruits.splice(bananaIndex, 1);
  }
  console.log(fruits);

  //sort in order
  fruits.sort();
  console.log(fruits);
  
  //add kiwi at end
  fruits.push("Kiwi");

  //remove apple without splice
  let fruitsWithoutApples = fruits.filter(fruits => fruits !== "Apples");
  console.log(fruitsWithoutApples)

  //reverse
  fruitsWithoutApples.reverse()
  console.log(fruitsWithoutApples)