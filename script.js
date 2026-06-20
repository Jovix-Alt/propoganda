document.getElementById("predict-btn").onclick = () => {

    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    const today = new Date();

    const tomorrowIndex = (today.getDay() + 1) % 7;

    const tomorrow = days[tomorrowIndex];

    document.getElementById("prediction-text").innerText =
        `By hacking NASA and stealing data from CIA, I predict tomorrow will be ${tomorrow}.`;
};
const toggle = document.getElementById("theme-toggle");

const circle = document.querySelector(".toggle-circle");

toggle.onclick = () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        circle.innerHTML = "☀️";
        profileImg.src = "images/light.png";

    } else {

        circle.innerHTML = "🌙";
        profileImg.src = "images/profile.jpg";
    }
};
const dateBox = document.getElementById("date-box");

function updateDateTime() {

    const today = new Date();

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const day = days[today.getDay()];

    const date = today.getDate();

    const month = months[today.getMonth()];

    let hours = today.getHours();

    let minutes = today.getMinutes();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    hours = hours ? hours : 12;

    minutes = minutes < 10
        ? "0" + minutes
        : minutes;

    const time =
        `${hours}:${minutes} ${ampm}`;

    dateBox.innerHTML =
        `${day}, ${date} - ${month}<br>${time}`;
}

updateDateTime();

setInterval(updateDateTime, 1000);
const profileImg = document.getElementById("profile-img");
const text =
    "Computer + Lathes";

const typingElement =
    document.getElementById("typing-text");

let index = 0;

function typeText() {

    if (index < text.length) {

        typingElement.innerHTML +=
            text.charAt(index);

        index++;

        setTimeout(typeText, 80);
    }
}
typeText();
const hiddenElements =
    document.querySelectorAll(".hidden");

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
            }
        });
    });

hiddenElements.forEach((el) =>
    observer.observe(el));
const aboutMessage =
    "<I do coding./>";

const aboutElement =
    document.getElementById("about-text");

let aboutIndex = 0;

function typeAbout() {

    if (aboutIndex < aboutMessage.length) {

        aboutElement.innerHTML +=
            aboutMessage.charAt(aboutIndex);

        aboutIndex++;

        setTimeout(typeAbout, 35);
    }
}

typeAbout();
const qualificationMessage =
    "C,Java,Python,Solidworks,Ansys";

const qualificationElement =
    document.getElementById("qualification-text");

let qualificationIndex = 0;

function typeQualification() {

    if (
        qualificationIndex <
        qualificationMessage.length
    ) {

        qualificationElement.innerHTML +=
            qualificationMessage.charAt(
                qualificationIndex
            );

        qualificationIndex++;

        setTimeout(typeQualification, 35);
    }
}

typeQualification();
const educationMessage =
    "MIT, Manipal - 29";

const educationElement =
    document.getElementById("education-text");

let educationIndex = 0;

function typeEducation() {

    if (
        educationIndex <
        educationMessage.length
    ) {

        educationElement.innerHTML +=
            educationMessage.charAt(
                educationIndex
            );

        educationIndex++;

        setTimeout(typeEducation, 35);
    }
}

typeEducation();
