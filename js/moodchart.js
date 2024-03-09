import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, doc, getDoc, getDocs, where, query, orderBy, limit , setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// import { Chart } from "https://cdn.jsdelivr.net/npm/chart.js";
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
const q = query(collection(db, "UserAuthList", UserId, "Mood state"), orderBy('timestamp', "desc"), limit(10));

// const w = q.orderBy('timestamp');

// console.log(q);
const date = [];

const moodval = [];


function updatelist(doc) {
    date.push(doc.id);
    moodval.push(parseFloat(doc.data().moodlvl));
}

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  updatelist(doc);
    // console.log(doc.id)
});

const moodave = document.getElementById('moodave');
const moodrec = document.getElementById('moodrec');

setTimeout( function () {
    date.reverse();
    moodval.reverse();


    new Chart("myChart", {
        type: "line",
        // width: "60%",
        data: {
          labels: date,
          datasets: [{
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(27,54,92,1.0)",
            borderColor: "rgba(27,54,92,0.1)",
            data: moodval
          }]
        },
        options: {
          legend: {display: false},
          maintainAspectRatio: false,
          responsive: false,
        //   width: "60%",
          scales: {
            yAxes: [{ticks: {min: 0, max:10}}],
            xAxes: [{
                ticks: {
                    display: false
                }
            }]
          }
        }
      });
      console.log(moodval);
      const sum = moodval.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const average = sum / moodval.length;
        const fixave =Math.round((average + Number.EPSILON) * 100) / 100


    console.log(fixave);
    moodave.textContent = `Your average mood value is ${fixave}`

    if (fixave < 4) {
        moodrec.textContent = "Your average mood value is too low. You may need to see a psychologist!"
    }

    if (fixave >= 4) {
        if (fixave < 8 )
        moodrec.textContent = "Your average mood value is okay. But you should probably fill your days with a little bit of happiness!"
    }

    if (fixave >= 8) {
        moodrec.textContent = "Your average mood value is excellent. Keep enjoying life like this!"
    }

    // const data = {
    //     labels: labels,
    //     datasets: [{
    //       label: 'My First Dataset',
    //       data: [65, 59, 80, 81, 56, 55, 40],
    //       fill: false,
    //       borderColor: 'rgb(75, 192, 192)',
    //       tension: 0.1
    //     }]
    //   };
    //   const config = {
    //     type: 'line',
    //     data: data,
    //   };
},200);




