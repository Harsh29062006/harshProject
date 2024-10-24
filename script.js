function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    return re.test(String(email).toLowerCase());
}

// Usage
const email = "example@gmail.com";
if (validateEmail(email)) {
    console.log("Valid email address.");
} else {
    console.log("Invalid email address.");
    
}

