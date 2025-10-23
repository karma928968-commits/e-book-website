// --- When user clicks the Download button ---
const downloadBtn = document.querySelector(".btn");

// Function to run when button is clicked

downloadBtn.addEventListener("click", () => {
    alert("Thank you for downloading the eBook!");
})
// --- Email Form Submission ---

const form = document.getElementById("ebookform");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Page reload hone se rokta hai

    const email = document.getElementById("userEmail").value;

    // Simple email validation
    if(email.includes("@")) {
        message.textcontent =  "✅ Thank you! Your eBook link has been sent to " + email;
    message.style.color = "green"
    form.reset();
    } else{
        message.textContent =  "Please enter a valid email address.";
        message.style.color = "red"
    }
});