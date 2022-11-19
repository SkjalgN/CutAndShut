function getInformation(){
    var ordername = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var datetime = document.getElementById("dateinput").value;
    var haircut = document.getElementById("haircut").value;
    return [ordername, phone, email, datetime, haircut];

}

function openConfirmation(){
    var order = getInformation();
    var date = new Date(order[3]).toLocaleDateString();
    var time = new Date(order[3]).toLocaleTimeString();
    confirmationMessage.showModal();
    var dialogMessage = document.getElementById("dialogMessage");
    dialogMessage.innerHTML = "Takk for din bestilling, " + order[0] + ". Vi tar kontakt med deg på " + order[1] + " eller " + order[2] + " innen 24 timer. \n \n Dette er en bekreftelse på timen din den " + date + " kl " + time + ".";
}
function closeConfirmation(){
    confirmationMessage.close();
}
function DateTimeNow(){
    var now = new Date().toDateString();
    console.log(now)
    document.getElementById("dateinput").setAttribute("min", now);
}
DateTimeNow();