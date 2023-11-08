const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  // Expected Output: 'my name is Rudolf the raindeer'
  let sentense = "";
    for (let key in details) {
        sentense += key + " " + details[key] + " ";
    }
    console.log(sentense);