// Function to open the booking form
function openBookingForm(packageName) {
    // Display the booking form
    var bookingForm = document.getElementById("booking-form");
    bookingForm.style.display = "block";

    // Set the selected package name in the form
    var packageSelect = document.getElementById("package-select");
    for (var i = 0; i < packageSelect.options.length; i++) {
        if (packageSelect.options[i].value === packageName) {
            packageSelect.selectedIndex = i;
            break;
        }
    }
}

// Function to close the booking form
function closeBookingForm() {
    // Hide the booking form
    var bookingForm = document.getElementById("booking-form");
    bookingForm.style.display = "none";
}

// Function to validate the login form
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return false;
    }

    return true;
}

// Function to validate the sign up form
function validateSignup() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;

    if (name === "" || email === "" || password === "" || confirm === "") {
        alert("Please fill out all fields.");
        return false;
    }

    if (password !== confirm) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}

// Function to submit the booking form
function submitBookingForm() {
    // Perform form validation here if needed

    // Example: Submit form via AJAX
    var form = document.getElementById("booking-form");
    var formData = new FormData(form);

    // Example: Send formData to server using fetch API
    fetch('submit_booking.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        // Handle success response
        console.log(data);
    })
    .catch(error => {
        // Handle error
        console.error('There was a problem with the fetch operation:', error);
    });
}
