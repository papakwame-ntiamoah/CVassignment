const firstName= localStorage.getItem("firstname")
const middleName= localStorage.getItem("middleName")
const lastName= localStorage.getItem("lastName")
const home= localStorage.getItem("address")
const number= localStorage.getItem("telephone")
const emailaddress= localStorage.getItem("email")

document.getElementById("NAME").innerHTML = firstName + " " + middleName + " " + lastName
document.getElementById("Postal Address").innerHTML= home
document.getElementById("Phone Number").innerHTML= number
document.getElementById("Email Address").innerHTML= emailaddress