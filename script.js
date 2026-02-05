const sessionList = document.getElementById("sessionList");

let sessions = JSON.parse(localStorage.getItem("sessions")) || [];

function renderSessions() {
    sessionList.innerHTML = "";

    sessions.forEach((session, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${session.date}</td>
            <td>${session.distance}</td>
            <td>${session.time}</td>
            <td>
                <button onclick="deleteSession(${index})">❌</button>
            </td>
        `;
        sessionList.appendChild(row);
    });

    localStorage.setItem("sessions", JSON.stringify(sessions));
}

function addSession() {
    function addSession() {
    const date = document.getElementById("date").value;

    const km = parseFloat(document.getElementById("km").value) || 0;
    const m = parseFloat(document.getElementById("m").value) || 0;

    const hours = parseFloat(document.getElementById("hours").value) || 0;
    const minutes = parseFloat(document.getElementById("minutes").value) || 0;

    if (!date || (km === 0 && m === 0) || (hours === 0 && minutes === 0)) {
        alert("Please enter valid values");
        return;
    }

    // Convert everything to base units
    const totalDistanceMeters = (km * 1000) + m;
    const totalTimeMinutes = (hours * 60) + minutes;

    const table = document.getElementById("sessionTable");
    const row = table.insertRow();

    row.innerHTML = `
        <td>${date}</td>
        <td>${totalDistanceMeters}</td>
        <td>${totalTimeMinutes}</td>
        <td><button onclick="this.parentElement.parentElement.remove()">Delete</button></td>
    `;

    // Clear inputs
    document.getElementById("km").value = "";
    document.getElementById("m").value = "";
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
}

}

function deleteSession(index) {
    sessions.splice(index, 1);
    renderSessions();
}

renderSessions();
