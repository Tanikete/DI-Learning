let zipCode = prompt("Enter your zip code:");
let zipCodePattern = /^\d{5}$/;

if (zipCode.match(zipCodePattern)) {
  alert("success");
} else {
  alert("error");
}