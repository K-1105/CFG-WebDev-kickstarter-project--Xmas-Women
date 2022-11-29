
let questions = {
    photo: null,
    first_name: null,
    last_name: null,
    famous_for: "Who is famous for ",
    dob: "Who was born on ",
    dod: "Who passed away on ",
    age_at_death: "Who lived to ",
    famous_decade: "Who was most famous during the ",
    zodiac_sign: "Whose zodiac sign is ",
    birth_place: "Who was born in ",
    profession: "Whose profession was a ",
    height: "Whose height is",
    maiden_name: "Whose maiden name was ",
    aka: "Who is also know as ",
    books: "Who wrote ",
    quotes: "Who said ",
    number_of_siblings: "Who has this many siblings: ",
    school: "Who went to this school: "
}



let person1 = {
    photo: "assets/Pankhurst door.png",
    first_name: "Emmeline",
    last_name: "Pankhurst",
    famous_for: "steering the suffragette movement that would lead to women being granted voting rights in 1918",
    dob: Date("1858-07-14").toDateString,
    dod: Date("1928-06-14").toDateString,
    age_at_death: 69,
    famous_decade: "1920s",
    zodiac_sign:  "Cancer",
    birth_place: "Manchester",
    profession: "politician",
    height: null,
    maiden_name:"'Goulden'",
    aka: "'Emily Goulden'",
    books: "'My Own Story'",
    quotes:  
    [
        "'We are here, not because we are law-breakers; we are here in our efforts to become law-makers.'",
        "'I am what you call a hooligan'",
        "'You have to make more noise than anybody else'"
    ],
    number_of_siblings: 9,
    school: "École Normale de Neuilly",
}

let person2 = {
    photo: "assets/McDaniel door.png",
    first_name: "Hattie",
    last_name: "McDaniel",
    famous_for: "being the first African-American actor to break the colour barrier and receive an Oscar in 1939 for playing 'Mammy' in 'Gone with the Wind' ",
    dob: Date("1893-06-10").toDateString,
    dod: Date("1952-10-26").toDateString,
    age_at_death: 59,
    famous_decade: "1930s",
    zodiac_sign: "Gemini",
    birth_place: "Wichita, Kansas",
    profession: "Actress, singer-songwriter and comedian",
    height: null,
    maiden_name: null,
    aka: null,
    books: null,
    quotes: 
    [
        "'I've learned by livin' and watchin' that there is only eighteen inches between a pat on the back and a kick in the seat of the pants...'",
        "'The entire race is usually judged by the actions of one man or woman'",
        "'I am proud of my standing as a woman interested in her race'"
    ],
    number_of_siblings: 12,
    school:  "Denver East High School",
}

// start some variables globally -outside of functions and loops etc- to populate inside the functions later

let people = [person1, person2];
let ques;
let ans;
let personRight;
let personWrong;


// Function to pick two random people and assign the 'right' and 'wrong' person*************************************************************************************************

function random_couple() {
    personRight = people[Math.floor(Math.random() * people.length)]         // random number between 0 and array length
    personWrong = people[Math.floor(Math.random() * people.length)]

    while (personRight == personWrong) {
        personWrong = people[Math.floor(Math.random() * people.length)]     // If personRight and personWrong are the same, make another random personWrong until they are not
    }

    wrongAns = [personWrong.first_name + " " + personWrong.last_name, personWrong.photo];
  
    
return personRight
return personWrong
return wrongAns;
};


// Function to grab a question and the name -ans- from the arrays at the top*************************************************************************************************

function getRandomQandA(personNum) {
    let questionKeys = Object.keys(questions).splice(3,15);      //get all the keys from the person1 object and list in an array, then splice the array starting at index 3 and taking the next 15 items
    randomQKey = questionKeys[Math.floor(Math.random() * questionKeys.length)];

    while (personNum[randomQKey] == null) {
        randomQKey = questionKeys[Math.floor(Math.random() * questionKeys.length)];
    }

    if (randomQKey == "quotes") {                      //  if the random question is the quotes, pick a random quote from the list
        ques = questions[randomQKey] + personNum[randomQKey][Math.floor(Math.random() * personNum.quotes.length)] + "?";
    } else {
        ques = questions[randomQKey] + personNum[randomQKey] + "?";
    }

    ans = [personNum.first_name + " " + personNum.last_name, personNum.photo];


       
return randomQKey
return ques;
return ans
};




random_couple()
getRandomQandA(personRight)
document.getElementById("answerAFigure").src= personRight.photo;
document.getElementById("answerBFigure").src= personWrong.photo;
// console.log(personRight.photo)
// console.log(personWrong.photo)
// console.log(randomQKey)
// console.log(ques)
// console.log(ans)




// quiz adapted from this CodePen https://codepen.io/savant/pen/gbaveO
//***********************************************************************************************************************


let answers = [];
let currentScore = 0;



// The DOMContentLoaded event fires when the HTML document has been completely parsed
document.addEventListener("DOMContentLoaded", function(event) { 
  NewQuestion();
});



// Function to shuffle any array- we will us eto shuffle the wright and wrong answers**************************************

function shuffle(array) {
    let currentIndex = array.length;  
    let randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
      return array;
}


// Function to refresh the question, shuffle the answers then put that info into the HTML**********************************

function NewQuestion() { 
    random_couple()
    getRandomQandA(personRight)
    answers = [ans, wrongAns];
    shuffle(answers);
    
    document.getElementById("question").innerHTML= ques;
    document.getElementById("answerA").value= answers[0][0];
    document.getElementById("answerA").innerHTML= answers[0][0];
    document.getElementById("answerAFigure").src= answers[0][1];
    document.getElementById("answerB").value= answers[1][0];
    document.getElementById("answerB").innerHTML= answers[1][0];
    document.getElementById("answerBFigure").src= answers[1][1];
}

// Function to deduct or add points and update the score in the HTML
function adjustScore(isCorrect) {
    debugger;
    if (isCorrect) {
      currentScore++;
    } else {
      if (currentScore > 0) {
        currentScore--;
        }
    }
    document.getElementById("score").innerHTML = currentScore;
  }


// Function to trigger update score and make a new question for correct answer or alert for a wrong answer
function checkAnswer(answer) {  
    if (answer == ans[0]) {
      adjustScore(true);
      NewQuestion();
    } else { 
      alert("Oops, try again");
      adjustScore(false);
    }	  
  }


// These functions are triggered via the HTML 'onclick' element, eg. <button id="answerA" onclick="answerA_clicked()"></button>
function answerA_clicked() {
  let answerA = document.getElementById("answerA").value;
  	checkAnswer(answerA);
}

function answerB_clicked() {
		let answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
}
