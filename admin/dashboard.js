import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {

    if (!user) {

        window.location.href =
            "login.html";
    }

});

document
    .getElementById("logoutBtn")
    .addEventListener("click", async () => {

        await signOut(auth);

        window.location.href =
            "login.html";

    });
