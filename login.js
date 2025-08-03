import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const loginBtn = document.querySelector('.login-btn');

function setLoading(loading) {
  if (loading) {
    loginBtn.disabled = true;
    loginBtn.textContent = "Signing in...";
  } else {
    loginBtn.disabled = false;
    loginBtn.textContent = "Login";
  }
}

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  setLoading(true);

  const email = emailInput.value.trim();
  const password = passInput.value;

  if (!email || !password) {
    alert("Email and password are required.");
    setLoading(false);
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Optionally check emailVerified: userCredential.user.emailVerified
    window.location.href = "home.html";
  } catch (error) {
    let msg = "Login failed. Please try again.";
    switch (error.code) {
      case "auth/user-not-found":
        msg = "No user found with this email.";
        break;
      case "auth/wrong-password":
        msg = "Incorrect password.";
        break;
      case "auth/too-many-requests":
        msg = "Too many failed attempts. Try again later.";
        break;
      case "auth/invalid-email":
        msg = "Invalid email format.";
        break;
      case "auth/network-request-failed":
        msg = "Network error. Check your connection.";
        break;
      default:
        msg = error.message;
    }
    alert(msg);
  }
  setLoading(false);
});
