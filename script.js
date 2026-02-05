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
    const date = document.getElementById("date").value;
    const distance = document.getElementById("distance").value;
    const time = document.getElementById("time").value;

    if (date && distance && time) {
        sessions.push({ date, distance, time });
        renderSessions();

        document.getElementById("date").value = "";
        document.getElementById("distance").value = "";
        document.getElementById("time").value = "";
    }
}

function deleteSession(index) {
    sessions.splice(index, 1);
    renderSessions();
}

renderSessions();
