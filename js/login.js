            // Import the functions you need from the SDKs you need
            import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
            import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
            import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
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
            let MainForm = document.getElementById('MainForm');

            const buttonsubmit = document.getElementById('buttonsubmit');

            let SignInUser = evt => {
                evt.preventDefault();


                signInWithEmailAndPassword(auth, EmailInp.value, PassInp.value)
                .then(async (credentials)=> {
                    var ref = doc(db, "UserAuthList", credentials.user.uid);
                    const docSnap = await getDoc(ref);

                    if(docSnap.exists()) {
                        sessionStorage.setItem('user-info', JSON.stringify({
                            firstname: docSnap.data().firstname,
                            lastname: docSnap.data().lastname,
                        }))
                        sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                        sessionStorage.setItem("user-id", JSON.stringify(credentials.user.uid));
                        // console.log(credentials.user.uid)
                        window.location.href="details.html";
                        }
                    })
                .catch((error)=>{
                    alert(error.message);
                    console.log(error.code);
                    console.log(error.message);
                })
            }

            // const button1 = document.getElementById('buttonsubmit');

            // button1.addEventListener("click", SignInUser);

            MainForm.addEventListener( 'submit', SignInUser )
            