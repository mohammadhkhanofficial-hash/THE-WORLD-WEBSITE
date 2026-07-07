const text = "THE WORLD - By Muhammad Khan";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = function() {
    // Website khulte hi typewriter animation chal jaye
    typeWriter();
};