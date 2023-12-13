

var submit = document.getElementById("submit-button");

// window.addEventListener("keypress",(event)=>{
//     let p = document.createElement("p");
//     p.setAttribute("id","pTag");
//     let pcontent = document.createTextNode("dfjdfkldjfklj");
//     p.textContent = `key= '${event.key}'|code= '${event.code}'`;
//     p.appendChild(pcontent);
//     document.body.appendChild(p);
// })

// check Name input field
// console.log("dfghfgfsfg");

// if (nameValue == "") {
//     document.getElementById("Name-error").innerText = "Fill the input box";
// }
// else {

//     for (var i = 0; i < nameValue.length; i++) {
//         var ascii = nameValue.charCodeAt(i);
//         if (((ascii >= 65) && (ascii <= 90)) || ((ascii >= 97) && (ascii <= 120))) {
//             var nameValue = nameValue;
//             document.getElementById("Name-error").innerText = "";
//         }
//         else
//             document.getElementById("Name-error").innerText = "Input Characters only";
//     }

function namefield(event) {
    var keyCode = event.which;
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 124)) {
        document.getElementById("Name-error").innerText = "";

    }
    else {
        document.getElementById("Name-error").innerText = "Input Characters only";
        alert("Input Character Only");
        return false;
    }

}
document.querySelector(".input").addEventListener("blur", named1);
function named1() {

    var name = document.getElementsByClassName("input");
    var nameValue = name[0].value;
    if (nameValue == "") {
        document.getElementById("Name-error").innerText = "Fill the input field";

    }
    return nameValue;

}


// document.querySelector(".Age").addEventListener("blur", agefun);
//     // check Age input field
//     function agefun(){
//     var age = document.getElementsByClassName("Age");
//     var ageValue = age[0].value;
//     if (ageValue == "") {
//         document.getElementById("Age-error").innerText = "Fill the input box";

//     }
//     else {
//         if (ageValue > 120) {
//             document.getElementById("Age-error").innerText = "Over age correct the age";
//         }
//         else {
//             if (ageValue <= 120) {

//                 document.getElementById("Age-error").innerText = "";
//                 return ageValue;
//             }
//             else {
//                 document.getElementById("Age-error").innerText = "Number only allowed";
//             }
//         }
//     }    
function agefield(event) {
    var keyCode = event.which;
    if (keyCode >= 48 && keyCode <= 57) {
        document.getElementById("Age-error").innerText = "";

    }
    else {
        document.getElementById("Age-error").innerText = "Enter Numbers only";
        return false;
    }
}


document.querySelector(".Age").addEventListener("blur", agefun);
// check Age input field
function agefun() {
    var age = document.getElementsByClassName("Age");
    var ageValue = age[0].value;
    if (ageValue == "") {
        document.getElementById("Age-error").innerText = "Fill the input field";

    }
    return ageValue;
}


document.querySelector(".Date").addEventListener("blur", Datefun);
function Datefun() {
    // check Date field only
    var Date = document.getElementsByClassName("Date");
    var DateValue = Date[0].value;
    if (DateValue == "") {
        document.getElementById("dob-error").innerText = "Select the date of berth";

    }

    else
        document.getElementById("dob-error").innerText = "";
    return DateValue;

}
// // document.querySelector(".Email").addEventListener("blur", function () {
// // var Email = document.getElementsByClassName("Email");
// // var EmailValue = Email[0].value;


// // });


document.getElementById("country-dropdown").addEventListener("blur", countryfun);
function countryfun() {
    var country = document.getElementById("country-dropdown");
    var selectcountry = country.value;
    return selectcountry;
}


document.getElementById("state-dropdown").addEventListener("blur", statefun);

function statefun() {
    var state = document.getElementById("state-dropdown");
    var stateselect = state.value;
    return stateselect;
}

document.querySelector(".Email").addEventListener("blur", Emailfun);
function Emailfun() {
    var Email = document.getElementsByClassName("Email");
    var EmailValue = Email[0].value;
    var EmailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (EmailValue == "") {
        document.getElementById("Email-error").innerText = "Fill the Email field"

    }
    else {
        if (EmailValue.match(EmailFormat)) {
            document.getElementById("Email-error").innerText = "";
            return EmailValue;

        }
        else {
            document.getElementById("Email-error").innerText = "Enter valid Email"

        }
    }

}

document.getElementById("Radio-button-select").addEventListener("click", radiofun);
function radiofun() {
    var radio = document.getElementsByName("radiobtn");
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radioValue = radio[i].value;
            console.log("the correct" + radioValue);
            return radioValue;
        }
    }

}

document.getElementById("textarea").addEventListener("blur", textAreafun);
function textAreafun() {
    var Address = document.getElementById("textarea");
    var AddressValue = Address.value;
    if (AddressValue == "") {
        document.getElementById("Address-error").innerText = "Fill the input field";

    }
    else {
        document.getElementById("Address-error").innerText = "";
        return AddressValue;
    }

}


submit.addEventListener("click", function () {

    var nameValue = named1();
    if (nameValue === undefined) {
        var name = document.getElementsByClassName("input");
        name[0].style.border = "";
    }
    else


        var ageValue = agefun();
    if (ageValue === undefined) {
        var AGE = document.getElementsByClassName("age");
        AGE[0].style.border = "";

    }
    else


        var DateValue = Datefun();
    if (DateValue === undefined) {
        var Date = document.getElementsByClassName("Date");
        Date[0].style.border = "";

    }
    else


        var EmailValue = Emailfun();
    if (EmailValue === undefined) {
        var Email = document.getElementsByClassName("Email");
        Email[0].style.border = "";

    }
    else


        var stateselect = statefun();
    var selectcountry = countryfun();
    var radioValue = radiofun();

    var AddressValue = textAreafun();
    if (AddressValue === undefined) {
        var textarea = document.getElementById("textarea");
        textarea.style.border = "";
    }
    else


        document.getElementById("output").append(nameValue, ageValue, DateValue, EmailValue, selectcountry, stateselect
            , radioValue, AddressValue);
    console.log(nameValue);
    //         console.log(ageValue); 
    //         console.log(DateValue);
    //         console.log(selectcountry);
    //         console.log(stateselect);
    //         console.log(EmailValue);
    //         console.log(radioValue);
    //         console.log(AddressValue);
});




