// style.js — THE WORLD website ke liye small interactive touches
 
// Ek chota "toast" message dikhane ke liye helper function
function showToast(message) {
    let toast = document.querySelector('.toast');
 
    // Agar toast element pehle se nahi hai to bana lo
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
 
    toast.textContent = message;
    toast.classList.add('show');
 
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
 
// Download button click hone par thank-you toast dikhao
const downloadBtn = document.getElementById('downloadBtn');
 
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        showToast('Thanks for downloading THE WORLD! 📖');
    });
}