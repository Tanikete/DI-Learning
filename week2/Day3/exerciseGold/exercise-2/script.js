let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
    let studentName = prompt("Please enter your name");
    if (studentName in guestList)
    alert("Hi! I'm " + studentName + " and I'm from " + guestList[studentName]);
else {
    alert("Hi! I'm a guest.");
}