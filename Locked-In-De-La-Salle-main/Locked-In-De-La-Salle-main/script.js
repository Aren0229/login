function attempt() {
    var loggedin = false;
    var attempt = 3;
    var emailField = document.getElementById("email");
    var passwordField = document.getElementById("pass");

    while (attempt > 0) {
        var userName = emailField.value;
        var passWord = passwordField.value;

        if (userName === "" && passWord === "") {
            alert("Please enter both email and password.");
            return;
        } else if (userName === "") {
            alert("Please enter your email.");
            return;
        } else if (passWord === "") {
            alert("Please enter your password.");
            return;
        }

        if (!userName.includes("@dlsud.edu.ph")) {
            alert("Email must contain '@dlsud.edu.ph'.");
            return;
        }

        if (passWord.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        if (userName !== "" && passWord !== "") {
            loggedin = true;
            alert('Success! You are logged in.');
            playJumpscare();
            break;
        } else {
            attempt--;
            alert("You have " + attempt + " attempt(s) left.");
            if (attempt === 0) {
                alert('You are blocked. Too many failed attempts.');
            }
        }
    }
}

function toggleRememberMe() {
    var rememberMeCheckbox = document.getElementById("remember");

    if (rememberMeCheckbox.checked) {
        alert("You will be kept logged in.");
    } else {
        alert("You will not be kept logged in.");
    }
}

function playJumpscare() {
    var jumpscareAudio = document.getElementById("jumpscare");
    var jumpscareAudio2 = document.getElementById("jumpscare2");
    var glitch_effect = document.getElementById("glitch");

    jumpscareAudio.volume = 1;
    jumpscareAudio2.volume = 0.2;
    jumpscareAudio.play();
    jumpscareAudio2.play();

    glitch_effect.style.display = "block";
    setTimeout(function() {
        glitch_effect.style.display = "none";
    }, 1000);
}
