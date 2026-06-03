import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document
    .getElementById("loginBtn")
    .addEventListener("click", async () => {

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            window.location.href =
                "dashboard.html";

        } catch (error) {

            document.getElementById("message")
                .textContent =
                "Connexion refusée";
        }

    });
