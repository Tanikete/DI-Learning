let zipCode = prompt("Enter your zip code:");
if (zipCode.length === 5 && !isNaN(zipCode) && !zipCode.includes(" ")) {
    alert("success");
  } else {
    alert("error");
  }