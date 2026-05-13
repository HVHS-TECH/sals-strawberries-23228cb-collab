
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
  
