const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const listOfInvitation = ["Pengurus Nasional XSR Brotherhood Indonesia", "Pengutus Regional XBI Jabar", "Seluruh Member XBI Regional Jabar", "Seluruh Member XBI Chapter Bandung"]

let invName = urlParams.get('to');
if (invName === null) invName = '';
else if (!listOfInvitation.includes(invName)) invName = '';

document.getElementById('invitation-guest').innerHTML = invName;
