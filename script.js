let sessions = [];

// Load stored data when page opens
window.onload = function () {
    const storedData = localStorage.getItem("swimSessions");
    if (storedData) {
        sessions = JSON.parse(storedData);
        sessions.forEach(addRowToTable);
    }
};

function addSession() {
    const date = document.getElementById("date").value;
    const km = Number(document.getElementById("km").value) || 0;
    const m = Number(document.getElementById("m").value) || 0;
    const hours = Number(document.getElementById("hours").value) || 0;
    const minutes = Number(document.getElementById("minutes").value) || 0;

    if (!date || (km === 0 && m === 0) || (hours === 0 && minutes === 0)) {
        alert("Please enter valid values");
        return;
    }

    const session = {
        date: date,
        distance: km * 1000 + m,
        time: hours * 60 + minutes
    };

    sessions.push(session);
    localStorage.setItem("swimSessions", JSON.stringify(sessions));

    addRowToTable(session);

    // Clear inputs
    document.getElementById("km").value = "";
    document.getElementById("m").value = "";
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
}

function addRowToTable(session) {
    const tableBody = document.getElementById("sessionList");

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${session.date}</td>
        <td>${session.distance}</td>
        <td>${session.time}</td>
        <td>
            <button onclick="deleteSession(${sessions.indexOf(session)})">
                Delete
            </button>
        </td>
    `;

    tableBody.appendChild(row);
}

function deleteSession(index) {
    sessions.splice(index, 1);
    localStorage.setItem("swimSessions", JSON.stringify(sessions));
    location.reload(); // simplest safe refresh
}

