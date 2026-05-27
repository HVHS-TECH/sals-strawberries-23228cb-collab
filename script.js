
const HTML_OUTPUT =document.getElementById('statusMessage')
console.log("Running Sal's Strawberries")

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
//function fb_error() {
//  console.log(errorMessage)
//}

 async function genEmail(){
  let UID = GLOBAL_user.uid
  var snapshot = await firebase.database().ref('/users/' + UID).orderByValue().once('value')
  let Name = snapshot.val()['Name']
  let Fruit = snapshot.val()['fruit']
  let fruitAmount = snapshot.val()['fruitNum']
  HTML_OUTPUT.innerHTML = "Hello " + Name + " your favorite fruit is " + Fruit + " and you eat " + fruitAmount + "per week"
}
//function displayEmail(snapshot){
 //let Name = snapshot.val()['Name']
 //let Fruit = snapshot.val()['fruit']
 //let fruitAmount = snapshot.val()['fruitNum']
 // HTML_OUTPUT.innerHTML = "Hello " + Name + " your favorite fruit is " + Fruit + " and you eat " + fruitAmount + "per week"
//}

 
