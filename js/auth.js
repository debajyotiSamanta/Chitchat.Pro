import {
    loginWithEmail,
    loginWithGoogle,
    monitorAuthState,
    signupWithEmail
} from '../js/firebase.js';

// DOM Elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const showSignupText = document.getElementById('show-signup-text');
const showLoginText = document.getElementById('show-login-text');

// Toggle between forms
showSignup.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.add('hidden-form');
  signupForm.classList.remove('hidden-form');
  showSignupText.classList.add('hidden');
  showLoginText.classList.remove('hidden');
});

showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  signupForm.classList.add('hidden-form');
  loginForm.classList.remove('hidden-form');
  showLoginText.classList.add('hidden');
  showSignupText.classList.remove('hidden');
});

// Login handler
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  try {
    await loginWithEmail(email, password);
    window.location.href = '../html/chat.html';
  } catch (error) {
    showError(error.message);
  }
});

// Signup handler
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  
  try {
    await signupWithEmail(name, email, password);
    window.location.href = '../html/chat.html';
  } catch (error) {
    showError(error.message);
  }
});

// Google auth
document.getElementById('google-auth').addEventListener('click', async () => {
  try {
    await loginWithGoogle();
    window.location.href = '../html/chat.html';
  } catch (error) {
    showError(error.message);
  }
});

// Error handling
function showError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  
  const currentError = document.querySelector('.error-message');
  if (currentError) {
    currentError.replaceWith(errorDiv);
  } else {
    const activeForm = document.querySelector('.active-form');
    activeForm.appendChild(errorDiv);
  }
  
  setTimeout(() => {
    errorDiv.style.opacity = '0';
    setTimeout(() => errorDiv.remove(), 300);
  }, 5000);
}

// Check auth state
monitorAuthState((user) => {
  if (user) {
    window.location.href = '../html/chat.html';
  }
});