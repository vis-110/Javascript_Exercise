// container Div
var newDiv = document.createElement("div");
newDiv.setAttribute("id", "newDiv");
newDiv.innerText = "Good";
newDiv.style.textAlign = "center";
newDiv.style.color = "blue";
newDiv.style.padding = "30px";
newDiv.style.backgroundColor = "gray";
newDiv.style.margin = "0px 0px 50px 0px";
document.body.appendChild(newDiv);


// Start Create Command Section bottom text box and button

var textGrandParent = document.createElement("div");
textGrandParent.setAttribute("id", "textGrandParent");
textGrandParent.style.textAlign = "center";
textGrandParent.style.display = "none";

var textPatentDiv = document.createElement("div");
textPatentDiv.setAttribute("id", "textParentDiv");
textPatentDiv.style.display = "inline-block";
textPatentDiv.style.width = "50%";
textPatentDiv.style.textAlign = "center";
textPatentDiv.style.margin = "0 auto";

var textChildLeftDiv = document.createElement("div");
textChildLeftDiv.style.width = "10%"
textChildLeftDiv.style.textAlign = "center";
textChildLeftDiv.style.height = "60px"
textChildLeftDiv.style.cssFloat = "left";

// var textFieldImage = document.createElement("img");
// textFieldImage.src = "image/2907 vishnu-min.jpg";
// textFieldImage.style.height = "auto";
// textFieldImage.style.width = "50px";
// textFieldImage.style.height = "50px";
// textFieldImage.style.margin = "0px 0px 0px 10px";
// textFieldImage.style.borderRadius = "50%";

textChildLeftDiv.appendChild(textFieldImage);

var textChildRightDiv = document.createElement("div");
textChildRightDiv.style.width = "90%";
textChildRightDiv.style.cssFloat = "left";
textChildRightDiv.style.height = "60px";

// bottom textBox
var textChildRightDivInput = document.createElement("input");
textChildRightDivInput.setAttribute("id", "inputField");
textChildRightDivInput.style.borderRadius = "50px";
textChildRightDivInput.style.height = "50px";
textChildRightDivInput.style.width = "100%";
textChildRightDivInput.style.padding = "0px 0px 0px 20px"
textChildRightDivInput.placeholder = "Add a commend...";

textChildRightDiv.appendChild(textChildRightDivInput);

textPatentDiv.append(textChildLeftDiv, textChildRightDiv);
textGrandParent.appendChild(textPatentDiv);
document.body.appendChild(textGrandParent);

// bottom button
var buttonDiv = document.createElement("div");
buttonDiv.style.textAlign = "center";
var button = document.createElement("button");
button.setAttribute("id", "button");
button.style.padding = "10px 20px ";
button.innerText = "commend";
button.style.backgroundColor = "blue";
button.style.borderRadius = "25px";
button.style.color = "white";
button.style.textAlign = "center";
buttonDiv.appendChild(button);
document.body.appendChild(buttonDiv);


// bottom input field enter value button click 

var inputField = document.getElementById("inputField");
inputField.addEventListener("change", createCommend);

function createCommend() {
    var inputField = document.getElementById("inputField");
    var firstCommendParent = document.createElement("div");
    firstCommendParent.setAttribute("id","firstCommendParent");
    firstCommendParent.style.borderRadius = "15px";
    firstCommendParent.style.width = "40%"
    firstCommendParent.style.margin = "40px auto";
    firstCommendParent.style.backgroundColor = "yellow";

    // Grant parent Div
    var firstCommend = document.createElement("div");
    firstCommend.setAttribute("id", "firstCommen");


    //Parent Div 
    var firstCommendInside = document.createElement("div");
    firstCommendInside.style.display = "inline-block";
    firstCommendInside.style.width = "100%";
    firstCommendInside.style.padding = "20px 10px"

    // Parent Div Left side div
    var firstCommendInsideLeft = document.createElement("div");
    firstCommendInsideLeft.style.width = "10%";
    firstCommendInsideLeft.style.textAlign = "center";
    firstCommendInsideLeft.style.cssFloat = "left";

    var profileImage = document.createElement("img");
    profileImage.src = "image/2907 vishnu-min.jpg";
    profileImage.style.height = "auto";
    profileImage.style.width = "40px";
    profileImage.style.height = "40px";
    profileImage.style.margin = "0px 0px 0px 10px";
    profileImage.style.borderRadius = "50%";

    firstCommendInsideLeft.appendChild(profileImage);

    // parent Div Right side div
    var firstCommendInsideright = document.createElement("div");
    firstCommendInsideright.style.width = "90%";

    var insiderightDivLeft = document.createElement("div");
    insiderightDivLeft.style.textAlign = "left";
    insiderightDivLeft.style.cssFloat = "left";
    var boldTagChild = document.createElement("B");
    boldTagChild.innerText = "Vishnu R";

    var pTag = document.createElement("p");
    pTag.innerText = "Web Developer";
    pTag.style.fontSize = "12px";

    var insertDataPtag = document.createElement("p");
    insertDataPtag.setAttribute("id", "insertData");
    insertDataPtag.innerText = inputField.value;

    insiderightDivLeft.append(boldTagChild, pTag, insertDataPtag);

    var insiderightDivright = document.createElement("p");
    insiderightDivright.innerText = "...";
    insiderightDivright.style.fontSize = "25px";
    insiderightDivright.style.cssFloat = "right";
    insiderightDivright.style.margin = "0";


    firstCommendInsideright.append(insiderightDivLeft, insiderightDivright);

    firstCommendInside.append(firstCommendInsideLeft, firstCommendInsideright);

    // parent div next div
    var likeSectionDiv = document.createElement("div");
    likeSectionDiv.style.display = "liline-block";
    likeSectionDiv.style.width = "100%";
    var likediv = document.createElement("p");
    likediv.innerText = "like";
    likediv.setAttribute("id", "like");
    likediv.style.cssFloat = "left";
    likediv.style.width = "10%";

    var seperate = document.createElement("div");
    seperate.innerText = "|"
    seperate.style.padding = "0px 10px";
    seperate.style.cssFloat = "left";
    seperate.style.width = "10%";
    var likeCount = document.createElement("span");
    // likeCount.innerText = "";
    likeCount.setAttribute("class", "count");
    likediv.appendChild(likeCount);
    var replay = document.createElement("p");
    replay.setAttribute("id", "replay");
    replay.innerText = "Replay";
    replay.style.cssFloat = "left";
    replay.style.width = "10%";

    likeSectionDiv.append(likediv, seperate, replay);


    firstCommend.append(firstCommendInside, likeSectionDiv);
    firstCommendParent.appendChild(firstCommend);
    newDiv.appendChild(firstCommendParent);

    likediv.addEventListener("click", function (event) {

        let tag = event.target;
        console.log(tag);
        let tagChild = tag.querySelector(".count");
        console.log(tagChild);
        let tagChildValue = tagChild.innerText;
        console.log(tagChildValue);
        if (tagChildValue != "") {
            let tagChildValuenumber = parseInt(tagChildValue);
            tagChildValuenumber++;
            likeCount.innerHTML = tagChildValuenumber;
            console.log("yes");
        }
        else {
            tagChildValue = 1;
            console.log(tagChildValue);
            let tagChildValuenumber = parseInt(tagChildValue);
            console.log(tagChildValuenumber);
            likeCount.innerHTML = tagChildValuenumber;
            console.log("noo");
        }
    });
    
    // replay section
    let replayCopy = firstCommend.querySelector("#replay");
    replayCopy.addEventListener("click", function () {
        let firstCommend = newDiv.querySelector("#firstCommendParent");
        firstCommend.style.margin = "0px 0px 0px 200px";
        document.getElementById("firstCommen").appendChild(createCommend());
    });
}


buttonDiv.addEventListener("click", function () {
    var textGrandParent = document.getElementById("textGrandParent");
    textGrandParent.style.display = "block";
});
