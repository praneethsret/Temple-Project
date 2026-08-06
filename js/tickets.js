const membersArea = document.getElementById("membersArea");
const addMember = document.getElementById("addMember");

let totalMembers = 0;

function createMember(value = "") {

    totalMembers++;

    const input = document.createElement("input");

    input.type = "text";

    input.className = "member";

    input.placeholder = "Family Member " + totalMembers;

    input.value = value;

    membersArea.appendChild(input);

}

createMember();

addMember.onclick = function () {

    createMember();

};

// Search devotee

document.getElementById("searchBtn").onclick = function () {

    const mobile = document.getElementById("mobile").value;

    if (mobile == "") {

        alert("Enter Mobile Number");

        return;

    }

    const devotees = JSON.parse(localStorage.getItem("devotees") || "{}");

    if (!devotees[mobile]) {

        alert("New Devotee");

        return;

    }

    const d = devotees[mobile];

    document.getElementById("headName").value = d.head;

    document.getElementById("gotram").value = d.gotram;

    document.getElementById("nakshatram").value = d.nakshatram;

    membersArea.innerHTML = "<h3>Family Members</h3>";

    totalMembers = 0;

    d.members.forEach(m => createMember(m));

};

// Save Ticket

document.getElementById("issueTicket").onclick = function () {

    const mobile = document.getElementById("mobile").value.trim();

    const head = document.getElementById("headName").value.trim();

    const gotram = document.getElementById("gotram").value.trim();

    const nakshatram = document.getElementById("nakshatram").value.trim();

    const payment = document.getElementById("payment").value;

    const notes = document.getElementById("notes").value;

    const members = [];

    document.querySelectorAll(".member").forEach(x => {

        if (x.value.trim() != "")

            members.push(x.value.trim());

    });

    if (mobile == "" || head == "" || gotram == "") {

        alert("Please fill required fields.");

        return;

    }

    // Save devotee

    let devotees = JSON.parse(localStorage.getItem("devotees") || "{}");

    devotees[mobile] = {

        head,

        gotram,

        nakshatram,

        members

    };

    localStorage.setItem("devotees", JSON.stringify(devotees));

    // Save ticket

    let tickets = JSON.parse(localStorage.getItem("tickets") || "[]");

    let receipt = "SSMG-" + String(tickets.length + 1).padStart(6, "0");

    tickets.push({

        receipt,

        mobile,

        head,

        members,

        gotram,

        nakshatram,

        payment,

        amount: 500,

        notes,

        date: new Date().toLocaleString()

    });

    localStorage.setItem("tickets", JSON.stringify(tickets));

    alert("Ticket Issued\nReceipt : " + receipt);

    location.reload();

};
