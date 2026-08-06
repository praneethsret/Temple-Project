const membersArea=document.getElementById("membersArea");

const addMember=document.getElementById("addMember");

let totalMembers=0;

function createMember(){

totalMembers++;

const input=document.createElement("input");

input.type="text";

input.placeholder="Family Member "+totalMembers;

input.className="member";

membersArea.appendChild(input);

}

createMember();

addMember.onclick=function(){

createMember();

};

document.getElementById("issueTicket").onclick=function(){

alert("Ticket feature will connect to Firebase in next step.");

};
