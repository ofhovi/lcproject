import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, doc, getDoc, getDocs, where, query, orderBy, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDw09HU3ksqHjukBRP26UZl8w9nvm553sM",
    authDomain: "lcproject-bae23.firebaseapp.com",
    projectId: "lcproject-bae23",
    storageBucket: "lcproject-bae23.appspot.com",
    messagingSenderId: "211134649587",
    appId: "1:211134649587:web:3ab21ba48b9f2f157d1386"
    };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// console.log(UserId)
const q = query(collection(db, "UserAuthList", UserId, "Mood state"), orderBy('timestamp', "desc"))



// const myList = document.getElementById("loglist");
const verymyList = document.getElementById("theexactlist");

const lognotestext = document.getElementById('lognotestext');

const lognotestitle = document.getElementById('lognotestitle');

function renderDoc(doc) {
    // let formm = document.createElement('form');
    // let id = document.createElement('span');
    // let moodlvl = document.createElement('span');

    let buttoncr = document.createElement('button');
    let parcr = document.createElement('p');
    

    buttoncr.textContent = `${doc.id}   -   ${doc.data().moodlvl}   -   ${doc.data().moodState}`;
    // buttoncr.setAttribute('id', "verybutton");
    buttoncr.setAttribute('id', doc.id);
    buttoncr.setAttribute('type', 'button');
    buttoncr.setAttribute("class", "buttonlogtest");

    // parcr.textContent = `${doc.data().moodlvl} - ${doc.data().moodState}`
    // buttoncr.setAttribute('onclick', "refreshdata()")
    
    

    // formm.setAttribute("data-id", doc.id);
    // formm.setAttribute('id', "veryform");
    // id.textContent = doc.id;
    // moodlvl.textContent = doc.data().moodlvl;

    // formm.appendChild(buttoncr);
    // li.appendChild(moodlvl);
    // myList.appendChild(li);
    verymyList.appendChild(buttoncr);
}

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  renderDoc(doc);
    // console.log(doc.id)
});

let buttons = document.getElementsByTagName("button");

let buttonPressed = e => {
  console.log(e.target.id);
  var textsourceid = e.target.id;
  sessionStorage.setItem("tempid", JSON.stringify(textsourceid));
  updatelogtext();
  
  
//   let docSnap = await getDoc(docRef);

// return docRef
   
  
//   console.log(textsourceid);  // Get ID of Clicked Element
}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

async function updatelogtext() {
    let textsourceid = JSON.parse(sessionStorage.getItem("tempid"));
    let docRef = doc(db, "UserAuthList", UserId, "Mood state", textsourceid);
    var docSnap = await getDoc(docRef);

    lognotestitle.textContent = docSnap.id;
    lognotestext.textContent = docSnap.data().moodNotes;
    // if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    //   } else {
    //     // docSnap.data() will be undefined in this case
    //     console.log("No such document!");
    //   }

    // console.log(textsourceid);
}




// let dummy = evt => {
//     evt.preventDefault();
//     console.log('It worked!');
//     console.log(evt.target.id);
// }

// // let formlisten = document.getElementById("veryform");


// verymyList.addEventListener("submit", dummy);

// // getDoc(db, "UserAuthList", UsedId, "MoodState")
