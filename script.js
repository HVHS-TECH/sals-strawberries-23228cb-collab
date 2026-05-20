
console.log("Running Sal's Strawberries")

function writeForm() {
  // Get the form data
  const favoriteFruit = document.getElementById("favoriteFruit").value;
}
function UIdWrite() {
  let UID = GLOBAL_user.uid
  let DisName = GLOBAL_user.displayName
  const Name = document.getElementById("name").value
  const favoriteFruit = document.getElementById("favoriteFruit").value
  const fruitAmount = document.getElementById("fruitQuantity").value
  console.log("Running UIDWrite")

  firebase.database().ref('/users/' + UID).set(
    {
      Name: Name,
      Display_Name: DisName,
      fruit: favoriteFruit,
      fruitNum: fruitAmount,
    }
  )
}
function fb_error() {
  console.log(errorMessage)
}
function genEmail(){
  const Name = document.getElementById("name").value
  const favoriteFruit = document.getElementById("favoriteFruit").value
  const fruitAmount = document.getElementById("fruitQuantity").value
  console.log('hello '+ Name + ' we heard you like '+ favoriteFruit + ' and you eat '+ fruitAmount)
}