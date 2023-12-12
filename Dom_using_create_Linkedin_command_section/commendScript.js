var replyspan, newDiv, inputFieldValue;
// container Div
newDiv = document.createElement("div");
newDiv.setAttribute("id", "newDiv");
newDiv.setAttribute("class", "newDiv");
document.body.appendChild(newDiv);

// Start Create Command Section

var textGrandParent = document.createElement("div");
textGrandParent.setAttribute("id", "textGrandParent");
textGrandParent.setAttribute("class", "textGrandParent");
document.body.appendChild(textGrandParent);

var textPatentDiv = document.createElement("div");
textPatentDiv.setAttribute("id", "textParentDiv");
textPatentDiv.setAttribute("class", "textParentDiv");

var textChildLeftDiv = document.createElement("div");
textChildLeftDiv.setAttribute("class", "textChildLeftDiv");

var textFieldImage = document.createElement("img");
textFieldImage.setAttribute("class", "textFieldImage");
textFieldImage.src = "image/2907 vishnu-min.jpg";

textChildLeftDiv.appendChild(textFieldImage);

var textChildRightDiv = document.createElement("div");
textChildRightDiv.setAttribute("class", "textChildRightDiv");

var textChildRightDivInput = document.createElement("input");
textChildRightDivInput.setAttribute("id", "inputField");
textChildRightDivInput.setAttribute("class", "textChildRightDivInput");

textChildRightDivInput.placeholder = "Add a commend...";

textChildRightDiv.appendChild(textChildRightDivInput);

textPatentDiv.append(textChildLeftDiv, textChildRightDiv);
textGrandParent.appendChild(textPatentDiv);


var button = document.createElement("button");
button.setAttribute("class", "button");
button.innerText = "Post";
textGrandParent.appendChild(button);

// Input field setup
var inputField = document.getElementById("inputField");
function textBox() {
    var inputField = document.getElementById("inputField");
    inputFieldValue = inputField.value;
    let newDiv = document.getElementById("newDiv");
    creatCommendBox(inputFieldValue, newDiv);
}

var button = document.querySelector(".button");
button.addEventListener("click", buttonClick);
function buttonClick() {
    var inputField = document.getElementById("inputField");
    inputFieldValue = inputField.value;
    if (inputFieldValue == "") {
        alert("Enter the content");
        inputField.focus();
    }
    else {
        let newDiv = document.getElementById("newDiv");
        creatCommendBox(inputFieldValue, newDiv);
    }

}
// above button click then pass the argumet get paremeter create pop div
function creatCommendBox(inputFieldValue, newDiv) {

    var firstCommendParent = document.createElement("div");
    firstCommendParent.setAttribute("id", "firstCommendParent");
    firstCommendParent.setAttribute("class", "firstCommendParent");

    // Grant parent Div
    var firstCommend = document.createElement("div");
    firstCommend.setAttribute("id", "firstCommen");
    firstCommend.setAttribute("class", "firstCommen");

    //Parent Div 
    var firstCommendInside = document.createElement("div");
    firstCommendInside.setAttribute("class", "firstCommendInside");

    // Parent Div Left side div
    var firstCommendInsideLeft = document.createElement("div");
    firstCommendInsideLeft.setAttribute("class", "firstCommendInsideLeft");

    let profileImage = document.createElement("img");
    profileImage.setAttribute("class", "profileImage");
    profileImage.src = "image/2907 vishnu-min.jpg";

    firstCommendInsideLeft.appendChild(profileImage);

    // parent Div Right side div
    var firstCommendInsideright = document.createElement("div");
    firstCommendInsideright.setAttribute("class", "fistCommandInsideright");

    var firstCommendInsiderightinside = document.createElement("div");
    firstCommendInsiderightinside.setAttribute("class", "firstCommendInsiderightinside");

    var insiderightDivLeft = document.createElement("div");
    insiderightDivLeft.setAttribute("class", "insiderightDivleft");

    var boldTagChild = document.createElement("B");
    boldTagChild.innerText = "Vishnu R";


    var pTag = document.createElement("p");
    pTag.setAttribute("class", "pTag");
    pTag.innerText = "Web Developer";

    var insertDataPtag = document.createElement("div");
    insertDataPtag.setAttribute("class", "insertData");
    insertDataPtag.innerText = inputFieldValue;
    insertDataPtag.style.overflowWrap = "anywhere";




    var insertDataPtagVal = inputFieldValue;
    var zz = insertDataPtagVal.length;
    if (zz > 50) {
        var truncated = insertDataPtagVal.substring(0, 50) + "...";
        insertDataPtag.innerText = truncated;
        var seemoreBut = document.createElement("p");
        seemoreBut.setAttribute("class", "seemoreButton");
        seemoreBut.innerText = "see More";
        seemoreBut.style.display = "inline";
        seemoreBut.style.width = "100px";
        seemoreBut.style.height = "20px";
        seemoreBut.style.color = "blue";
        insertDataPtag.appendChild(seemoreBut);

        seemoreBut.addEventListener("click", seemore);
        function seemore() {

            insertDataPtag.innerText = insertDataPtagVal;
            var seelessBut = document.createElement("p");
            seelessBut.style.display = "inline";
            seelessBut.innerText = "see Less";
            seelessBut.style.width = "100px";
            seelessBut.style.padding = "0px 0px 0px 10px"
            seelessBut.style.height = "20px";
            seelessBut.style.color = "blue";
            insertDataPtag.appendChild(seelessBut);

            seelessBut.addEventListener("click", function () {
                insertDataPtag.innerText = truncated;
                var seemoreBu = document.createElement("p");
                seemoreBu.setAttribute("id", "seemoreButton");
                seemoreBu.innerText = "see More";
                seemoreBu.style.display = "inline";
                seemoreBu.style.width = "100px";
                seemoreBu.style.height = "20px";
                seemoreBu.style.color = "blue";
                insertDataPtag.appendChild(seemoreBu);

                seemoreBu.addEventListener("click", function () {
                    seemore();
                });
            });
        }
    }

    insiderightDivLeft.append(boldTagChild, pTag, insertDataPtag);
    inputField.value = "";
    var insiderightDivright = document.createElement("div");
    insiderightDivright.innerText = "...";
    insiderightDivright.setAttribute("class", "optionDivClass");

    var timeset = document.createElement("p");
    timeset.setAttribute("class","timeset");
    var time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
    timeset.innerText= time;
    insiderightDivright.appendChild(timeset);
    insiderightDivright.addEventListener("click", optionBtn);

    firstCommendInsiderightinside.append(insiderightDivLeft, insiderightDivright);
    firstCommendInsideright.appendChild(firstCommendInsiderightinside);

    firstCommendInside.append(firstCommendInsideLeft, firstCommendInsideright);


    var likeSectionDiv = document.createElement("div");
    likeSectionDiv.setAttribute("class", "likesection");

    var likesectionfirstChild = document.createElement("div");
    likesectionfirstChild.setAttribute("class", "likesectionfirstChild");

    var likediv = document.createElement("div");
    likediv.innerText = "Like";
    likediv.setAttribute("id", "like");
    likediv.setAttribute("class", "like");

    var likeCount = document.createElement("span");
    likeCount.setAttribute("class", "count");

    var likeImage = document.createElement("span");
    likeImage.setAttribute("id", "likeImage");
    likeImage.setAttribute("class", "likeImage");

    var profileImagelike = document.createElement("img");
    profileImagelike.setAttribute("class", "replyProfileImg");
    profileImagelike.src = "image/like.png";

    likeImage.appendChild(profileImagelike);

    likediv.append(likeImage, likeCount);

    likediv.addEventListener("click", likeclick);

    var seperate = document.createElement("div");
    seperate.innerText = "|"
    seperate.setAttribute("class", "seperate");

    var reply = document.createElement("div");
    reply.setAttribute("id", "reply");
    reply.setAttribute("class", "replyClass");

    replyspan = document.createElement("span");
    replyspan.innerText = "reply";
    replyspan.setAttribute("class", "replyspan");
    reply.appendChild(replyspan);

    likeSectionDiv.appendChild(likesectionfirstChild);
    likeSectionDiv.appendChild(likediv);
    likeSectionDiv.appendChild(seperate);
    likeSectionDiv.appendChild(reply);

    var likesectionBottomDiv = document.createElement("div");
    likesectionBottomDiv.setAttribute("class", "likesectionBottomDiv");

    var likesectionBottomDivinsideLeft = document.createElement("div");
    likesectionBottomDivinsideLeft.setAttribute("class", "likesectionBottomDivinsideLeft");

    var likesectionBottomDivinsideRight = document.createElement("div");
    likesectionBottomDivinsideRight.setAttribute("class", "likesectionBottomDivinsideRight");

    likesectionBottomDiv.append(likesectionBottomDivinsideLeft, likesectionBottomDivinsideRight);

    firstCommend.append(firstCommendInside, likeSectionDiv, likesectionBottomDiv);
    firstCommendParent.appendChild(firstCommend);
    newDiv.appendChild(firstCommendParent);

    replyspan.addEventListener("click", replyRes);

}

function optionBtn(event) {

    let optionDiv = document.createElement("div");
    optionDiv.setAttribute("class", "optionDiv");

    let editOpt = document.createElement("p");
    editOpt.setAttribute("class", "edit");
    editOpt.innerText = "Edit";

    editOpt.addEventListener("click", editOptaction);

    let deleteOpt = document.createElement("p");
    deleteOpt.setAttribute("class", "edit");
    deleteOpt.innerText = "Delete";
    optionDiv.append(editOpt, deleteOpt);

    let optionDivPosition = event.target;
    let parentPosition = optionDivPosition.closest(".fistCommandInsideright");
    parentPosition.appendChild(optionDiv);
    let optionDivClass = document.getElementsByClassName("optionDivClass");

    deleteOpt.addEventListener("click", deleteAction);

}

function editOptaction(event) {
    let v = event.target;
    let vv = event.target.parentNode;
    vv.style.display = "none";
    let vvv = vv.parentNode;
    let edituserValue = vvv.querySelector(".insertData");
    let edituserValueget = edituserValue.innerText;
    let vvvv = vvv.parentNode;
    let edituserValuev = vvvv.parentNode;
    let p = edituserValuev.parentNode;
    let edituserValuevvv = edituserValuev.parentNode;
    let parentDiveditfun = v.closest(".likesectionBottomDivinsideRight");
    edituserValuev.remove();

    if (parentDiveditfun == null) {
        let firstTextBox = document.getElementById("inputField");
        firstTextBox.value = edituserValueget;
    }

    else {
        var editPop = document.createElement("div");
        editPop.setAttribute("class", "replyPop");

        var editFieldImage = document.createElement("img");
        editFieldImage.setAttribute("class", "editFieldImage");
        editFieldImage.src = "image/2907 vishnu-min.jpg";

        var eidttextBoxcreate = document.createElement("textarea");
        eidttextBoxcreate.setAttribute("class", "eidttextBoxcreate");
        eidttextBoxcreate.innerHTML = edituserValueget;

        var editreplyBtn = document.createElement("button");
        editreplyBtn.setAttribute("class", "reply");
        editreplyBtn.innerText = "submit";

        editreplyBtn.addEventListener("click", function (event) {
            let eidttextBoxcreateValue = eidttextBoxcreate.value;
            let edittextBoxposition = event.target;
            let edittextBoxpositionParent = edittextBoxposition.parentNode;
            if (eidttextBoxcreateValue == "")
                alert("Enter the content");
            else {
                edittextBoxpositionParent.style.display = "none";
                creatCommendBox(eidttextBoxcreateValue, edituserValuevvv);
            }
        });
        editPop.append(editFieldImage, eidttextBoxcreate, editreplyBtn);
        edituserValuevvv.parentNode.appendChild(editPop);
    }
}
function deleteAction(event) {
    let r = confirm("OK to delete?");

    if (r == false) {
        // It will prevent visit to 'https://google.com'
        return event.preventDefault();
    } else {
        let deleteParent = event.target;
        let findDeleteParent = deleteParent.closest(".fistCommandInsideright");
        let findDeleteGrandParent = findDeleteParent.parentNode;
        let findDeleteGrandGrandParent = findDeleteGrandParent.parentNode;
        findDeleteGrandGrandParent.remove();
    }
}

function likeclick(event) {
    let tag = event.target;
    let likeImage = tag.querySelector("#likeImage");
    likeImage.style.display = "block";
    likeImage.style.display = "inline";
    let tagChild = tag.querySelector(".count");
    let tagChildValue = tagChild.innerText;

    if (tagChildValue != "") {
        let tagChildValuenumber = parseInt(tagChildValue);
        tagChildValuenumber++;
        let likeCo = tag.lastElementChild;
        likeCo.innerHTML = tagChildValuenumber;
        console.log("yes");
    }
    else {
        tagChildValue = 1;
        console.log(tagChildValue);
        let tagChildValuenumber = parseInt(tagChildValue);
        console.log(tagChildValuenumber);
        let likeCo = tag.lastElementChild;
        likeCo.innerHTML = tagChildValuenumber;
        console.log("noo");
    }
}

function replyRes(e) {
    var replyPop = document.createElement("div");
    replyPop.setAttribute("class", "replyPop");

    var textFieldImage = document.createElement("img");
    textFieldImage.setAttribute("class", "textFieldImageinside");
    textFieldImage.src = "image/2907 vishnu-min.jpg";

    var create = document.createElement("textarea");
    create.setAttribute("class", "create");

    var replyBtn = document.createElement("button");
    replyBtn.setAttribute("class", "reply");
    replyBtn.innerText = "post";

    var replyset = e.target;
    var replysetparent = replyset.parentNode;
    console.log(replysetparent);
    // var replysetgranparent = replysetparent.closest(".firstCommen");
    var replysetgranparent = replysetparent.parentNode;
    console.log(replysetgranparent);
    var ww = replysetgranparent.nextElementSibling;
    console.log(ww);
    // let firstCommend = document.querySelector(".firstCommen");
    var cloastTwo = ww.querySelector(".likesectionBottomDivinsideRight");

    replyPop.append(textFieldImage, create, replyBtn);
    replysetgranparent.appendChild(replyPop);

    replyBtn.addEventListener("click", replycomValue);
    function replycomValue() {
        var createValue = create.value;
        if (createValue == "") {
            alert("Enter the value");
            create.focus();
        }
        else {
            replyPop.style.display = "none";
            replyPop.remove();
            creatCommendBox(createValue, cloastTwo);
        }
    }
}