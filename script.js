alert("JS is connected");
function addSession() {
    const dateInput = document.getElementById("date");
    const kmInput = document.getElementById("km");
    const mInput = document.getElementById("m");
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const tableBody = document.getElementById("sessionList");

    if (!dateInput || !kmInput || !mInput || !hoursInput || !minutesInput || !tableBody) {
        alert("JavaScript is not connected properly");
        return;
    }

    const date = dateInput.value;
    const km = Number(kmInput.value) || 0;
    const m = Number(mInput.value) || 0;
    const hours = Number(hoursInput.value) || 0;
    const minutes = Number(minutesInput.value) || 0;

    if (!date || (km === 0 && m === 0) || (hours === 0 && minutes === 0)) {
        alert("Please enter valid date, distance and time");
        return;
    }

    const totalDistance = km * 1000 + m;
    const totalTime = hours * 60 + minutes;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${date}</td>
        <td>${totalDistance}</td>
        <td>${totalTime}</td>
        <td><button onclick="this.closest('tr').remove()">Delete</button></td>
    `;

    tableBody.appendChild(row);

    kmInput.value = "";
    mInput.value = "";
    hoursInput.value = "";
    minutesInput.value = "";
}

