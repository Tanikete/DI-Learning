let family = {
    father: "sailesh",
    mother: "kowshalya",
    son: "Yu",
    daughter: "Pri",
  };
  
  // 1. Loop through the object and print out the property names and values

  for (let key in family) {
    console.log(key);
  }
  
  // 2. Loop through the object and print out the property values

  for (let key in family) {
    console.log(family[key]);
  }