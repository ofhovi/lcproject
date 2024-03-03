
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDw09HU3ksqHjukBRP26UZl8w9nvm553sM",
    authDomain: "lcproject-bae23.firebaseapp.com",
    projectId: "lcproject-bae23",
    storageBucket: "lcproject-bae23.appspot.com",
    messagingSenderId: "211134649587",
    appId: "1:211134649587:web:3ab21ba48b9f2f157d1386"
    };

const app = initializeApp(firebaseConfig);
const db = getFirestore();

// const docRef = db.collection("UserAuthList").doc(UserId).collection("Mood State").doc("02.03"); 

let MainForm = document.getElementById('moodbuttonsubmit');
let moodval = barset;
let moodword = document.getElementById("invisiblenum");
let moodnotes = document.getElementById("notestothemood");

let CreateMoodState = evt => {
  evt.preventDefault();

  const now = new Date();
  const utcDate = now.toUTCString();
     // Extract the UTC hours and minutes
  const utcHours = now.getUTCHours().toString().padStart(2, '0');
  const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
  const utcDay = now.getUTCDate();
  const utcMonth = now.getUTCMonth();
  const utcYear = now.getUTCFullYear().toString().padStart(2, "0");
  // const utcMonth = now.getUTCMonth();
  // const utcMonth = 11;
  const actMonth = utcMonth + 1;
  const utcDaystring = utcDay.toString().padStart(2, '0');
  
  const Months = actMonth.toString().padStart(2, '0');

  // if (actMonth < 10) {
  //   var actMonthstring = actMonth.toString().padStart(2, '0');
  //   // var Months = "0"+ actMonthstring;
  //   var Months = actMonthstring;
  // }
  // else {
  //   var Months = actMonth.toString().padStart(2, '0');
  // }
    // Format the UTC hours and minutes as a string
  const dateString = `${utcHours}:${utcMinutes}`;
  const dateString2 = `${utcDaystring}.${Months}.${utcYear}`;
  const dateComb = `${dateString} ${dateString2}`
  const dataGen = serverTimestamp();
  // async () => {
    // console.log(dateString);
    // console.log(dateString2);
    // console.log(dataGen);
    // console.log(moodword.innerText);
    
    var ref = doc(db, "UserAuthList", UserId, "Mood state", dateComb);
      setDoc(ref, {
        moodlvl: moodval,
        moodState: moodword.innerText,
        moodNotes: moodnotes.value,
        date: utcDaystring,
        month: Months,
        year: utcYear,
        hour: utcHours,
        minute: utcMinutes,
        timestamp: dataGen
      });
    console.log("Success");
}






  // db.collection("UserAuthList").doc(UserId).collection("Mood").setDoc({
  //   mood: "Good"
  // })

//     async () => {
//       await docRef.set({
//         Mood: "Good"
//     });

//     console.log("Success");
//   }
// }

MainForm.addEventListener('submit', CreateMoodState);
