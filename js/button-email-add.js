$(document).keyup(function (e) {
  if ($(".input-emaill:focus") && (e.keyCode === 13)) {
     alert('ya!')
  }
});




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYpUFeztKUZvPorSACKXYImgtJS9_5-yI",
  authDomain: "email-database-53661.firebaseapp.com",
  databaseURL: "https://email-database-53661-default-rtdb.firebaseio.com",
  projectId: "email-database-53661",
  storageBucket: "email-database-53661.appspot.com",
  messagingSenderId: "609750102365",
  appId: "1:609750102365:web:8d6a7382bf0162de1838b4",
  measurementId: "G-3Z540RM4WS"
};

firebase.initializeApp(firebaseConfig);

document.getElementById("ValidateEmailButton").value;
 
var myDBcontact=firebase.database().ref();
var addRecord=myDBcontact.child('contact').push(); 
 
 
function insertRecord()
{ 
 var email1= document.getElementById("emailAddress").value; 
 window.alert("Successfully subscribed :)")
 {
  window.location.reload();

}
 
var myDBcontact=firebase.database().ref();
var addRecord=myDBcontact.child('contact').push(); 
 
 record= 
 { 
 "email" : email1, 
 
 } 
 addRecord.set(record); 
}

















// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
// document.getElementById("ValidateEmailButton").value;
 
// var myDBcontact=firebase.database().ref();
// var addRecord=myDBcontact.child('contact').push(); 
 
 
// function insertRecord()
 
// { 
//  var email1= document.getElementById("emailAddress").value; 
 
//  {
// window.location.reload();
// }
 
// var myDBcontact=firebase.database().ref();
// var addRecord=myDBcontact.child('contact').push(); 
 
//  record= 
//  { 
//  "email" : email1, 
 
//  } 
//  addRecord.set(record); 
// }
