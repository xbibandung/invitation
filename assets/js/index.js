const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const listOfInvitation = ["XBI Jabar"]

let invName = urlParams.get('to');
if (invName === null) invName = '';
else if (!listOfInvitation.includes(invName)) invName = '';

document.getElementById('invitation-guest').innerHTML = invName;
