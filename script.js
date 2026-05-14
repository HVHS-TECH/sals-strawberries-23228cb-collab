
console.log("Running Sal's Strawberries")

function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
}
function UIdWrite() {
  let UID = GLOBAL_user.uid
  const Name = document.getElementById("name").value
  const favoriteFruit=document.getElementById("favoriteFruit").value
   const fruitAmount=document.getElementById("fruitQuantity").value
  console.log("Running UIDWrite")
  
  firebase.database().ref('/users/'+UID).set(
  {  
    Name:Name,
    fruit:favoriteFruit,
    fruitNum:fruitAmount,
  }
  )
    }
  function simpleRead() {
    let UID = GLOBAL_user.uid
  console.log("Reading message");
  firebase.database().ref('/users/'+UID).child('fruit').once('value', display, fb_error);
  console.log("Leaving simpleRead")

}
  function display(snapshot) {
  var dbData = snapshot.val();
  if (dbData == null) { // if there is no data, dbData will be null.
  console.log('There was no record when trying to read the message');
  }
  else {
  console.log("The message is: " + dbData)
  }
}
  function fb_error() {
  console.log(errorMessage)
}
