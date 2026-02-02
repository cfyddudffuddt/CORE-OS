// TEXT TO TYPE
const text = "System Active. Engaging Robotics Protocol...";
const typingElement = document.getElementById('typing-text');
let index = 0;

// TYPING EFFECT FUNCTION
function typeWriter() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Speed of typing (ms)
    } else {
        // Optional: Add a blinking cursor after typing finishes
        typingElement.innerHTML += '<span class="blink">|</span>';
    }
}

// BLINKING CURSOR STYLE (Managed via JS/CSS Class)
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .blink { animation: blinker 1s linear infinite; }
    @keyframes blinker { 50% { opacity: 0; } }
`;
document.head.appendChild(styleSheet);

// START ON LOAD
window.onload = typeWriter;

// CONSOLE WELCOME MESSAGE (For developers checking Inspect Element)
console.log("%c C.O.R.E SYSTEM ONLINE ", "color: #00F3FF; background: #050505; font-size: 20px; padding: 10px; border: 2px solid #00F3FF;");

// MODAL LOGIC
const modal = document.getElementById('login-modal');
const loginBtn = document.querySelector('.btn-login');

// Open Modal
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

// Close Modal Function
function closeLogin() {
    modal.style.display = 'none';
}

// Close if clicking outside the box
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}