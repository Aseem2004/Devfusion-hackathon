// variables declared
// about section variabes
let name;
let role;
let email;
let phone;
let address;
let linkedin;
//education section variable
let BoardHighSchool;
let percentageHighSchool;
let BoardIntermediate;
let percentageIntermediate;
let skills;

let resumw=document.querySelector(".resumw");

//projects section variables
let projectname;
let projectsDescription;
let githubrepolink;
let startDateProject;
let endDateProject;

//work
let organization;
let responsibility;
let locationWork;
let endDateWork;
let deswork;



let aboutsave = document.querySelector("#aboutsave");
let nameabout= document.querySelector("#name");
let roleabout=document.querySelector("#role");
let emailabout=document.querySelector("#email");
let phoneabout = document.querySelector("#phone");
let addressabout =document.querySelector("#address");
let linkedinabout=document.querySelector("#linkedin");

// about section in reume div
let resumeabout=document.querySelector(".aboutres")

let namejs=document.querySelector("#namejs");

let rolejs=document.querySelector("#rolejs");
let emailjs=document.querySelector("#emailjs");
let adderessjs=document.querySelector("#addressjs");
let phonejs=document.querySelector("#phonejs");
let linkedinjs=document.querySelector("#linkedinjs");
aboutsave.addEventListener('click',()=>{
    resumw.style.visibility="visible";
    namejs.innerHTML=`${nameabout.value}`;
    rolejs.innerHTML=`${roleabout.value}`;
    emailjs.innerHTML=`${emailabout.value}`;
    phonejs.innerHTML=`${phoneabout.value}`;
    adderessjs.innerHTML=`${addressabout.value}`;
    linkedinjs.innerHTML=`${linkedinabout.value}`
})


//educational details
let percentagejs = document.querySelector("#percentagejs");
let boardjs=document.querySelector("#boardjs");
let datejs=document.querySelector("#datejs");

let percentagejsitit = document.querySelector("#percentagejsit");
let boardjsit=document.querySelector("#boardjsit");
let datejsit=document.querySelector("#datejsit");

//educational details input
let X_board= document.querySelector("#X_board");
let X_percentage=document.querySelector("#X_percentage");

let XII_board=document.querySelector("#XII_board");
let XII_percentage=document.querySelector("#XII_percentage");


let skill= document.querySelector('#skills');
let skillsjs=document.querySelector("#skillsjs")
let sameline=document.querySelector(".sameline")
let edubutton=document.querySelector("#edubutton");

edubutton.addEventListener('click',()=>{
    percentagejs.innerHTML=`${X_percentage.value}`;
    boardjs.innerHTML=`${X_board.value}`;

    boardjsit.innerHTML=`${XII_board.value}`;
    percentagejsitit.innerHTML=`${XII_percentage.value}`;
    sameline.style.visibility="visible"
    skillsjs.innerHTML=`${skill.value}`;

});

