const questions=[
    {
        question:"What is Git?",
        optiona:"A version control system",
        optionb:"A programming language",
        optionc:"A remote repository platform",
        optiond:"A nickname for Github",
        correct:"A version control system",
    },

    {
        question:"Command to get the installed version of Git?",
        optiona:"gitVersion",
        optionb:"getGitVersion",
        optionc:"git help version",
        optiond:"git --version",
        correct:"git --version",
    },

    {
        question:"Command to add all files to the staging area?",
        optiona:"git add -all",
        optionb:"git add -A",
        optionc:"git Add",
        optiond:"git addition",
        correct:"git add -A",
    },

    {
        question:"Command to get the current status of the Git repository?",
        optiona:"--status",
        optionb:"git state",
        optionc:"git --status",
        optiond:"git status",
        correct:"git status",
    },

    {
        question:"Git commit history is automatically deleted:",
        optiona:"Every 2 weeks",
        optionb:"Every month",
        optionc:"Every year",
        optiond:"Commit history is never deleted",
        correct:"Commit history is never deleted",
    }
];

let qno=document.querySelector('.qno');

let question=document.querySelector('.question');

let getoption_a=document.getElementById('optiona');
let getoption_b=document.getElementById('optionb');
let getoption_c=document.getElementById('optionc');
let getoption_d=document.getElementById('optiond');


var i=0;
var count=0;
function removenadd()
{
    document.querySelector('#start').remove();
    document.querySelector('.box').style.display="flex";

    
    let getquestion=questions[i];

    qno.innerText+=" " +(i+1)+"/5";
    question.innerText=getquestion.question;

    getoption_a.innerText=getquestion.optiona;
    getoption_b.innerText=getquestion.optionb;
    getoption_c.innerText=getquestion.optionc;
    getoption_d.innerText=getquestion.optiond;

}

function nexter()
{
    i++;
    if(i<(questions.length)-1)
    {
        let getquestion=questions[i];

        qno.innerText="Q " +(i+1)+"/5";
        question.innerText=getquestion.question;

        getoption_a.innerText=getquestion.optiona;
        getoption_b.innerText=getquestion.optionb;
        getoption_c.innerText=getquestion.optionc;
        getoption_d.innerText=getquestion.optiond;
    }

    else if(i==(questions.length)-1)
    {
        let getquestion=questions[i];
        qno.innerText="Q " +(i+1)+"/5";
        question.innerText=getquestion.question;

        getoption_a.innerText=getquestion.optiona;
        getoption_b.innerText=getquestion.optionb;
        getoption_c.innerText=getquestion.optionc;
        getoption_d.innerText=getquestion.optiond;

        document.getElementById('next').style.borderRadius="10px";
        document.getElementById('next').style.width="60px";
        document.getElementById('next').innerText="Submit";
    }
    else if(i>(questions.length)-1)
    {
        document.querySelector('.box').innerHTML="";
        document.querySelector('.box').innerHTML+=`<div class="resultcontainer">
        You Scored &nbsp;<span class="colorchange">${count}</span>&nbsp; points!!!
    </div>`;
    }

}

function previous()
{
    document.getElementById('next').innerText="Next";
    i-=2;
    nexter();
}


function clickedA()
{
    console.log("clicked a");

    if(questions[i].correct==getoption_a.innerText)
    {
        count++;
        console.log("correct");
    }
    else
    {
        console.log("false");
    }
}

function clickedB()
{
    console.log("clicked b");

    if(questions[i].correct==getoption_b.innerText)
    {
        count++;
        console.log("correct");
    }
    else
    {
        console.log("false");
    }
}

function clickedC()
{
    if(questions[i].correct==getoption_c.innerText)
    {
        count++;
        console.log("correct")
    }
    else
    {
        console.log("false");
    }
}

function clickedD()
{
    console.log("clicked d");

    if(questions[i].correct==getoption_d.innerText)
    {
        count++;
        console.log("correct")
    }
    else
    {
        console.log("false");
    }
}

