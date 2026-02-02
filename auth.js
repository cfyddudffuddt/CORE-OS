// DOM ELEMENTS
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const modalTitle = document.querySelector('.modal-title');
const modalSub = document.querySelector('.modal-subtitle');
const switchBtn = document.querySelector('.switch-auth a');
const actionBtn = document.querySelector('.full-width');

// STATE: Are we logging in or signing up?
let isSignUp = false;

// 1. TOGGLE SIGN UP / LOGIN MODE
function toggleSignup() {
    isSignUp = !isSignUp; // Flip the switch
    
    if (isSignUp) {
        modalTitle.innerText = "NEW RECRUIT REGISTRATION";
        modalSub.innerText = "CREATE YOUR CORE IDENTITY";
        actionBtn.innerText = "INITIALIZE ACCOUNT";
        switchBtn.innerText = "ALREADY A MEMBER? LOGIN";
    } else {
        modalTitle.innerText = "IDENTITY VERIFICATION";
        modalSub.innerText = "ENTER CORE CREDENTIALS";
        actionBtn.innerText = "AUTHENTICATE";
        switchBtn.innerText = "REQUEST CLEARANCE";
    }
}

// 2. HANDLE FORM SUBMISSION
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page reload
    
    const email = emailInput.value;
    const password = passwordInput.value;

    if(isSignUp) {
        // --- SIGN UP LOGIC ---
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("WELCOME TO C.O.R.E. | IDENTITY CREATED");
                window.location.href = "dashboard.html"; // Redirect
            })
            .catch((error) => {
                alert("ERROR: " + error.message);
            });
            
    } else {
        // --- LOGIN LOGIC ---
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("ACCESS GRANTED");
                window.location.href = "dashboard.html"; // Redirect
            })
            .catch((error) => {
                alert("ACCESS DENIED: " + error.message);
            });
    }
});

// 3. CHECK AUTH STATE (Security Guard)
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("USER IS LOGGED IN:", user.email);
    } else {
        console.log("NO USER DETECTED");
    }
});