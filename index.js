// Create a constructor function for each of the following:
// -Scooter with year, color, and model properties
//  let samson = new Scooter(2015, "red", "swoosh");
// -Driver with name, age, and experience properties
//  let allison = new Driver("Allison", "16 years", "2 years");
// -PickupLocation with address and city properties
//  let poshHotel = new PickupLocation("123 Broadway", "New York City");

function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}
