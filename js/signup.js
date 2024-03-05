
  
  // Import the functions you need from the SDKs you need
            import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
            import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
            import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries

            
            // Your web app's Firebase configuration
            const firebaseConfig = {
            apiKey: "AIzaSyDw09HU3ksqHjukBRP26UZl8w9nvm553sM",
            authDomain: "lcproject-bae23.firebaseapp.com",
            projectId: "lcproject-bae23",
            storageBucket: "lcproject-bae23.appspot.com",
            messagingSenderId: "211134649587",
            appId: "1:211134649587:web:3ab21ba48b9f2f157d1386"
            };
        
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const db = getFirestore();
            const auth = getAuth(app);

            let EmailInp = document.getElementById('emailAddress');
            let PassInp = document.getElementById('password');
            let FnameInp = document.getElementById('firstName');
            let LnameInp = document.getElementById('lastName');
            let MainForm = document.getElementById('MainForm');
            let ButtonProp = document.getElementById('buttonsubmit');

            let alertbox = document.getElementById("alertbox");
            let alertform = document.getElementById('alertform');


            let RegisterUser = evt => {
                evt.preventDefault();

                ButtonProp.classList.add("process");
                createUserWithEmailAndPassword(auth, EmailInp.value, PassInp.value)
                .then(async (credentials)=> {
                    
                    var ref = doc(db, "UserAuthList", credentials.user.uid);
                    await setDoc(ref, {
                        firstname: FnameInp.value,
                        lastname: LnameInp.value
                    });
                    alert('Account Created Successfully! Please Login Now')
                    window.location.href='login.html';
                    
                })
                .catch((error)=>{
                    // alert(error.message);
                    console.log(error.code);
                    console.log(error.message);
                    ButtonProp.classList.remove("process");
                    alertbox.style.zIndex = "10";
                    setTimeout(function() {
                        alertbox.style.opacity = "1";
                    }, 200);
                })
            }


            let CheckCred = () =>{
                if (sessionStorage.getItem("user-creds")) {
                    window.location.href = "details.html";
                }
            }


            let CloseAlert = evt =>{
                evt.preventDefault();
                alertbox.style.opacity = "0";
                setTimeout(function(){
                    alertbox.style.zIndex = "-2";
                    }, 400);
                    }

            // const button1 = document.getElementById('buttonsubmit');
            
            // button1.addEventListener("click", RegisterUser); 
            
            MainForm.addEventListener( 'submit', RegisterUser );
            window.addEventListener( 'load', CheckCred);
            alertform.addEventListener('submit', CloseAlert);

              
    
            //     var ref = doc(db, "UserAuthList", "5YZG2KCheuTZQ8vbEs9TzeQIRP73", "Mood Check", "25.02");
            //     await setDoc(ref, {
            //         Mood: "Good"
            //     })

            // .catch((error)=>{
            //     alert(error.message);
            //     console.log(error.code);
            //     console.log(error.message);
            // })
              



            
            