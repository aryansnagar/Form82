const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxLIW6-H3hlxEwJqG0ZvljJ_MMm2_KZv6r2bOmjA-GZ-QbrpoXLs82x_ZfA_hWuXfT8yQ/exec";

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("status");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    submitBtn.disabled = true;
    statusEl.textContent = "Sending...";
    statusEl.style.color = "black";

    fetch(SCRIPT_URL, {
        method: "POST",
        body: formData
    })
        .then(res => res.json())
        .then(() => {
            statusEl.textContent = "Message sent successfully!";
            statusEl.style.color = "green";
            form.reset();
        })
        .catch(error => {
            statusEl.textContent = "Something went wrong. Try again.";
            statusEl.style.color = "red";
            console.error(error);
        })
        .finally(() => {
            submitBtn.disabled = false;
        });
});
