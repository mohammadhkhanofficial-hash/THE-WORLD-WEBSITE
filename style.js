const text = "THE WORLD - By Muhammad Khan";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Button interaction
const downloadBtn = document.querySelector('.btn');
downloadBtn.addEventListener('click', function() {
    this.innerText = "Downloading...";
    setTimeout(() => {
        alert("Thanks for your cooperation! May you like this book.");
        this.innerText = "Download PDF";
    }, 1000);
});

window.onload = typeWriter;