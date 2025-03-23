let x = 5;
let y = 7;

let z = x + y;

console.log(z);

let A = "Hello ";
let B = "World!";

let C = A + B;

console.log(C);

function SumNPrint(x1, x2) {
    let x3 = x1 + x2; 
    console.log(x3); 
}

SumNPrint(x, y); 

SumNPrint(A, B); 


if (C.length > z){
    console.log(C);
} else if (C.length < z){
    console.log(z);
}else{
    console.log("good job!");
}


let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array) {
    array.forEach(item => {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

// findTheBanana(L1);
// findTheBanana(L2);



function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greetingMessage = "";

    if (h < 12) {
        greetingMessage = "Good morning!";
    } else if (h >= 12 && h < 18) {
        greetingMessage = "Good afternoon!";
    } else if (h >= 18 && h < 20) {
        greetingMessage = "Good evening!";
    } else {
        greetingMessage = "Good night!";
    }

    let greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.innerHTML = greetingMessage;
    }
}



function addYear() {
    const year = new Date().getFullYear();
    document.getElementById("copyYear").textContent = `${year}`;
}


function showList() {
    let listElement = document.getElementById("funList");
    let buttonElement = document.getElementById("showButton");

    if (listElement && buttonElement) {
        listElement.style.display = "block";
        buttonElement.style.display = "none";
    }
}

$(document).ready(function() {
    $("#readMore").click(function() {
        $("#fullBio").slideDown();  // Show full bio
        $("#readMore").hide();      // Hide "Read More" button
        $("#readLess").show();      // Show "Read Less" button
    });

    $("#readLess").click(function() {
        $("#fullBio").slideUp();    // Hide full bio
        $("#readMore").show();      // Show "Read More" button
        $("#readLess").hide();      // Hide "Read Less" button
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        let isValid = true;

        // Get input fields
        let nameField = document.getElementById("name");
        let emailField = document.getElementById("email");
        let messageField = document.getElementById("message");

        // Get error message fields
        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let messageError = document.getElementById("messageError");

        // Clear previous errors
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        // Name Validation
        if (!nameField.checkValidity()) {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        // Email Validation
        if (!emailField.checkValidity()) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Message Validation
        if (!messageField.checkValidity()) {
            messageError.textContent = "Please enter a message.";
            isValid = false;
        }

        // Prevent form submission if invalid
        if (!isValid) {
            event.preventDefault();
        }
    });
});




window.onload = function() {
    addYear();
    greetingFunc();
};