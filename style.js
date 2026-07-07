const text = "THE WORLD - By Muhammad Khan";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Automatic Button Generation and Interaction
window.onload = function() {
    // Typewriter chalaen
    typeWriter();

    // Pehle button ko HTML container ke andar create karein
    const container = document.getElementById("button-container");
    if (container) {
        const btn = document.createElement("button");
        btn.className = "btn";
        btn.innerText = "Download PDF";
        
        // Click Event Listener lagaein
        btn.addEventListener('click', function() {
            this.innerText = "Downloading...";
            setTimeout(() => {
                alert("Thanks for your cooperation! May you like this book.");
                this.innerText = "Download PDF";
                // Agar aapka asli pdf file ka link ho toh niche wali line se download shuru ho sakta hai:
                 window.location.href = "THE WORLD.pdf"; 
            }, 1000);
        });

        // Button ko container mein shamil karein
        container.appendChild(btn);
    }
};