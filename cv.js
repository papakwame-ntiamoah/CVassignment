const form = document.getElementById("Formfill");

function onSubmitbutton(event){
    event.preventDefault();
    const firstName = form.elements["firstName"].value;
    const middleName = form.elements["middleName"].value;
    const lastName = form.elements["lastName"].value;
    const home = form.elements["address"].value;
    const number = form.elements["telephone"].value;
    const emailaddress = form.elements["email"].value;

    // alert(firstName)

    function letters1(){
        const letters = /^[A-Za-z ]+$/;
        if (firstName.match(letters))
            {
                return true;
            }
        else
            {
                alert("Invalid First Name");
                return false;
            }

    }
    letters1()

    function letters2(){
        const letters = /^[A-Za-z ]+$/;
        if (middleName.match(letters))
            {
                return true;
            }
        else
            {
                alert("Invalid Middle Name");
                return false;
            }

    }
    letters2()

    function letters3(){
        const letters = /^[A-Za-z]+$/;
        if (lastName.match(letters))
            {
                return true;
            }
        else
            {
                alert("Invalid Last Name");
                return false;
            }

    }
    letters3()

    function number1(){
        var tel =  /^\d{10}$/;
        if((number.match(tel))){
            return true;
        }
        else {
            alert("Incorrect Phone Number");
            return false;
        }

    }
    number1()

    function email1(){
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailaddress))
        {
            return true
        }
        else {
            alert("Invalid email address")
            return false
        }
    }
    email1()

    if(home == ""){
        alert("Kindly enter your home address")
    }

    localStorage.setItem("firstname",firstName);
    localStorage.setItem("middleName",middleName);
    localStorage.setItem("lastName",lastName);
    localStorage.setItem("address",home);
    localStorage.setItem("telephone",number);
    localStorage.setItem("email",emailaddress);

    
}

form.addEventListener("submit", onSubmitbutton)

