//Animation


function moveBall() {
    var isMoving = true;
    var ball = document.getElementById('ball');
    var position = 0;
    var direction = 1;
    var speed = 1.5;

    function move() {
        if (isMoving) {
            position += direction * speed;
            ball.style.left = position + 'px';

            if (position >= window.innerWidth - ball.clientWidth || position <= 0) {
                direction = -direction;
            }

            requestAnimationFrame(move);
        }
    }

    ball.addEventListener('click', function () {
        direction = -direction;
    });

    move();
}
moveBall();


//Card
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        alert('click the button for detailed information');
    });
});

//Category
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// Todo list
document.addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const taskLabel = document.createElement("label");
        taskLabel.textContent = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        checkbox.onchange = function () {
            if (checkbox.checked) {
                taskLabel.style.textDecoration = "line-through";
            } else {
                taskLabel.style.textDecoration = "none";
            }
        };

        li.appendChild(checkbox);
        li.appendChild(taskLabel);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = "";
    }
})




//registration
$(document).ready(function () {
    $('#message').keyup(function () {
        var maxLength = $(this).attr('maxlength');
        var currentLength = $(this).val().length;
        var charactersRemaining = maxLength - currentLength;
        $('#charCount').text(charactersRemaining);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Form');
    const messageInput = document.getElementById('message');
    const emailInput = document.getElementById('email');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', function (event) {
        let errors = [];

        if (messageInput.value.trim() === '') {
            errors.push('Message is required');
        }

        if (emailInput.value.trim() === '') {
            errors.push('Email is required');
        } else if (!isValidEmail(emailInput.value)) {
            errors.push('Invalid email format');
        }

        if (errors.length > 0) {
            event.preventDefault(); // Prevent form submission
            errorMessages.innerHTML = errors.join('<br>');
        } else {
            errorMessages.innerHTML = ''; // Clear any previous error messages
        }
    });

    function isValidEmail(email) {
        // This is a simple email validation function, you can use a more complex one if needed.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

$(document).ready(function () {
    $('#textarea').keyup(function () {
        var maxLength = $(this).attr('maxlength');
        var currentLength = $(this).val().length;
        var charactersRemaining = maxLength - currentLength;
        $('#charCount').text(charactersRemaining);
    });
});


$("body").on('click', '.toggle-password', function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $("#password");
    if (input.attr("type") === "password") {
        input.attr("type", "text");
        document.getElementById("pass").innerHTML = "Hide";
    } else {
        input.attr("type", "password");
        document.getElementById("pass").innerHTML = "Show";
    }


});

$(document).ready(function () {
    $('#agreeCheckbox').on('change', function () {
        if ($(this).is(':checked')) {
            $('#submitButton').prop('disabled', false);
        } else {
            $('#submitButton').prop('disabled', true);
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', function (event) {
        let errors = [];

        if (nameInput.value.trim() === '') {
            errors.push('Name is required');
        }

        if (emailInput.value.trim() === '') {
            errors.push('Email is required');
        } else if (!isValidEmail(emailInput.value)) {
            errors.push('Invalid email format');
        }

        if (passwordInput.value.trim() === '') {
            errors.push('Password is required');
        }

        if (errors.length > 0) {
            event.preventDefault(); // Prevent form submission
            errorMessages.innerHTML = errors.join('<br>');
        } else {
            alert("Confirm submitting the form"); // Clear any previous error messages
        }
    });

    function isValidEmail(email) {
        // This is a simple email validation function, you can use a more complex one if needed.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});



//timer

let countdownInterval;
let currentTime = 0;
const timerDisplay = document.getElementById('timer');
const durationInput = document.getElementById('duration');

function startTimer() {
    clearInterval(countdownInterval);

    const duration = parseInt(durationInput.value);

    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid duration.');
        return;
    }

    currentTime = duration;
    updateTimerDisplay();
    countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (currentTime > 0) {
        currentTime--;
        updateTimerDisplay();
    } else {
        clearInterval(countdownInterval);
        alert('Timer has ended!');
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
}

//Script for accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Function for tab
function openCity(evt, playerName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(playerName).style.display = "block";
    evt.currentTarget.className += " active";
}
//Audio
const x = document.getElementById("myAudio");
x.loop = true;
function playAudio() {
    x.play();
}
function pauseAudio() {
    x.pause();
}