
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
    profession: "Whose was a ",
    height: "Whose height is",
    maiden_name: "Whose maiden name was ",
    aka: "Who is also know as ",
    books: "Who wrote ",
    quotes: "Who said ",
    number_of_siblings: "Who has this many siblings: ",
    school: "Who studied here: "
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
    famous_for: "being the first African-American actor to break the colour barrier and receive an Oscar in 1939 for playing 'Mammy' in 'Gone with the Wind'",
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

let person3 = {
  photo: "assets/Khan door.png",
  first_name: "Noor",
  last_name: "Inayat Khan",
  famous_for: "being the first Muslim female war hero, Khan was an undercover operative in France who was betrayed by her colleagues, tortured and executed but never gave away any Allied secrets",
  dob: Date("1914-01-01").toDateString,
  dod: Date("1944-09-13").toDateString,
  age_at_death: 30,
  famous_decade: "1940s",
  zodiac_sign: "Capricorn",
  birth_place: "Moscow",
  profession: "Radio operator for the Special Operations Executive (SEO)",
  height: null,
  maiden_name: null,
  aka: "'Madeleine'",
  books: "Twenty Jataka Tales",
  quotes: null,
  number_of_siblings: 3,
  school:  "Salle Cortot",
}

let person4 = {
  photo: "assets/Franklin door.png",
  first_name: "Rosalind",
  last_name: "Franklin",
  famous_for: "being a member of the team who discovered the double-helix structure of DNA",
  dob: Date("1920-07-25").toDateString,
  dod: Date("1958-04-16").toDateString,
  age_at_death: 37,
  famous_decade: "1950s",
  zodiac_sign: "Leo",
  birth_place: "Notting Hill",
  profession: "X-ray crystallographer",
  height: null,
  maiden_name: null,
  aka: null,
  books: "19 papers on coals and carbons, five on DNA and 21 on viruses",
  quotes: [
    "'What’s the use of doing all this work if we don't get some fun out of this?'",
    "'But science and everyday life cannot and should not be separated.'",
    "'In my view, all that is necessary for faith is the belief that by doing our best we shall succeed in our aims: the improvement of mankind'"
  ],
  number_of_siblings: 4,
  school:  "St Paul's Girls' School",
}

let person5 = {
  photo: "assets/Bamber door.png",
  first_name: "Helen",
  last_name: "Bamber",
  famous_for: "being a prominent anti-torture campaigner, who worked with Holocaust survivors in the 1940s and was the first president of Amnesty International in Britain",
  dob: Date("1925-05-01").toDateString,
  dod: Date("2014-08-21").toDateString,
  age_at_death: 89,
  famous_decade: "1960s",
  zodiac_sign: "Taurus",
  birth_place: "Amhurst Park, North London",
  profession: "psychotherapist and human rights activist",
  height: null,
  maiden_name: "'Balmuth'",
  aka: null,
  books: null,
  quotes: [
    "'There was nothing at times that I could do for the survivors, other than to listen and to bear witness to the rasping out of their story.'",
    "'There may be ways in which we can work for change. We don't have to do dramatic things or devote our entire lives to it. We can lead normal lives but at the same time try hard not to be bystanders.'",
    "'Our society will be judged by how we respond to those to whom we owe nothing.'"
  ],
  number_of_siblings: null,
  school:  "Tottenham High School",
}

let person6 = {
  photo: "assets/Tereshkova door.png",
  first_name: "Valentina",
  last_name: "Tereshkova",
  famous_for: "being the first and youngest women in space in 1963 and remains the only woman to have been on a solo space mission",
  dob: Date("1937-03-06").toDateString,
  dod: Date("2004-07-03").toDateString,
  age_at_death: null,
  famous_decade: "1960s",
  zodiac_sign: "Pisces",
  birth_place: "Bolshoye Maslennikovo, Russian SFSR, Soviet Union",
  profession: "cosmonaut",
  height: null,
  maiden_name: null,
  aka: null,
  books: null,
  quotes: [
    "'It doesn't matter what country or what political system you are from. Space brings you together.'",
    "'Once you've been in space, you appreciate how small and fragile the Earth is.",
    "'Hey sky, take off your hat, I'm on my way!'"
  ],
  number_of_siblings: 2,
  school:  "Zhukovsky Air Force Engineering Academy",
}

let person7 = {
  photo: "assets/Desai door.png",
  first_name: "Jayaben",
  last_name: "Desai",
  famous_for: "leading the worker strikes in the Grunwick factory dispute, where groups of workers of predominately South Asian heritage went on strike to protest unfair working conditions",
  dob: Date("1933-04-02").toDateString,
  dod: Date("2010-12-23").toDateString,
  age_at_death: 77,
  famous_decade: "1970s",
  zodiac_sign: "Aries",
  birth_place: "Dharmaj, Gujarat, India",
  profession: "film processor",
  height: null,
  maiden_name: null,
  aka: null,
  books: null,
  quotes: [
    "'What you are running is not a factory, it is a zoo. But in a zoo there are many types of animals. Some are monkeys who dance on your fingertips. Others are lions who can bite your head off. We are the lions, Mr Manager.'",
    "'We have shown that workers like us, new to these shores, will never accept being treated without dignity and respect.",
    "'A person like me, I am never scared of anybody.'"
  ],
  number_of_siblings: null,
  school:  null,
}

let person8 = {
  photo: "assets/Maathai door.png",
  first_name: "Wangari",
  last_name: "Maathai",
  famous_for: "being the first African woman to receive a Nobel Peace Prize, which was for 'contribution to sustainable development, democracy and peace",
  dob: Date("1910-04-01").toDateString,
  dod: Date("2011-09-25").toDateString,
  age_at_death: 71,
  famous_decade: "1980s",
  zodiac_sign: "Aries",
  birth_place: "Ihithe village, Tetu, Nyeri District, Kenya Colony",
  profession: "social, environmental and political activist and author",
  height: null,
  maiden_name: "'Muta'",
  aka: null,
  books: "'The Green Belt Movement: Sharing the Approach and the Experience'",
  quotes: [
    "'Human rights are not things that are put on the table for people to enjoy. These are things you fight for and then you protect'",
    "'The generation that destroys the environment is not the generation that pays the price. That is the problem.",
    "'There are opportunities even in the most difficult moments.'"
  ],
  number_of_siblings: null,
  school:  "Mount St. Scholastica",
}

let person9 = {
  photo: "assets/Bechdel door.png",
  first_name: "Alison",
  last_name: "Bechdel",
  famous_for: "exposing the inequality on screen between men and women",
  dob: Date("1960-09-10").toDateString,
  dod: null,
  age_at_death: null,
  famous_decade: "1980s",
  zodiac_sign: "Virgo",
  birth_place: "Beech Creek, Pennsylvania",
  profession: "cartoonist and author",
  height: null,
  maiden_name: null,
  aka: null,
  books: "'The Essential Dykes to Watch Out for'",
  quotes: [
    "'The secret subversive goal of my work is to show that women, not just lesbians, are regular human beings.'",
    "'I'll watch a movie only if it meets the following criteria: 1. It has to have at least two women in it. 2. Who talk to each other. 3. About something besides a man.'",
    "'It's our very capacity for self-consciousness that makes us self-destructive!'"
  ],
  number_of_siblings: null,
  school:  "Simon's Rock College",
}

let person10 = {
  photo: "assets/Navratilova door.png",
  first_name: "Martina",
  last_name: "Navrátilová",
  famous_for: "being considered among the greatest tennis players of all time and a an outspoken supporter of LGBT rights",
  dob: Date("1956-10-18").toDateString,
  dod: null,
  age_at_death: null,
  famous_decade: "1980s",
  zodiac_sign: "Libra",
  birth_place: "Prague, Czechoslovakia",
  profession: "professional tennis player",
  height: "1.73m",
  maiden_name: "Šubertová",
  aka: null,
  books: "'Being Myself'",
  quotes: [
    "'The mark of great sportsmen is not how good they are at their best, but how good they are their worst.'",
    "'The better I get, the more I realize how much better I can get.'",
    "'Just go out there and do what you have to do.'"
  ],
  number_of_siblings: 2,
  school:  null,
}


let person11 = {
  photo: "assets/Ginsburg door.png",
  first_name: "Ruth",
  last_name: "Bader Ginsburg",
  famous_for: "spending a lifetime flourishing in the face of adversity before being appointed a Supreme Court justice, where she successfully fought against gender discrimination",
  dob: Date("1933-03-15").toDateString,
  dod: Date("2020-09-18"),
  age_at_death: 87,
  famous_decade: "1990s",
  zodiac_sign: "Pisces",
  birth_place: "Washington, D.C., United States",
  profession: "Associate justice of the Supreme Court",
  height: null,
  maiden_name: null,
  aka: null,
  books: "'My own words'",
  quotes: [
    "'Fight for the things that you care about, but do it in a way that will lead others to join you.'",
    "'Real change, enduring change, happens one step at a time'",
    "'Justices continue to think and can change. I am ever hopeful that if the court has a blind spot today, its eyes will be open tomorrow'"
  ],
  number_of_siblings: null,
  school:  "Columbia Law School",
}



// Quiz code start*******************************************************************************************************************************************************************
// *****************************************************************************************************************************************************************************
// start some variables globally -outside of functions and loops etc- to populate inside the functions later

let people = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10, person11];
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
  
    
return personRight, personWrong, wrongAns;
};

// Function to grab a question and the name -ans- from the arrays at the top*************************************************************************************************

function getRandomQandA(personRightNum, PersonWrongNum) {
    let questionKeys = Object.keys(questions).splice(3,15);      //get all the keys from the person1 object and list in an array, then splice the array starting at index 3 and taking the next 15 items
    randomQKey = questionKeys[Math.floor(Math.random() * questionKeys.length)];

    while (personRightNum[randomQKey] == null) {
        randomQKey = questionKeys[Math.floor(Math.random() * questionKeys.length)];
    }

    while (personRightNum[randomQKey] == PersonWrongNum[randomQKey]) {
      randomQKey = questionKeys[Math.floor(Math.random() * questionKeys.length)];
    }

    if (randomQKey == "quotes") {                      //  if the random question is the quotes, pick a random quote from the list
        ques = questions[randomQKey] + personRightNum[randomQKey][Math.floor(Math.random() * personRightNum.quotes.length)] + "?";
    } else {
        ques = questions[randomQKey] + personRightNum[randomQKey] + "?";
    }

    ans = [personRightNum.first_name + " " + personRightNum.last_name, personRightNum.photo];


       
return randomQKey, ques, ans;
};


random_couple()
getRandomQandA(personRight, personWrong)

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
    getRandomQandA(personRight, personWrong)
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
// ***************************************************************************************
function adjustScore(isCorrect) {
  debugger;
  if (isCorrect) {
    currentScore++;

    // make score flash green when correct 
    document.getElementById("score").style.color = "green";
    setTimeout(() => {
      document.getElementById("score").style.color = "rgb(252, 189, 0)";}, 300);
  
    
  } else {
    if (currentScore > 0) {
      currentScore--;

      document.getElementById("score").style.color = "red";
      setInterval(function() {
        document.getElementById("score").style.color = "rgb(252, 189, 0)";}, 300);
      }
  }
  // edit the HTML score value
  document.getElementById("score").innerHTML = currentScore;
  // make progress bar increase 1/12 fraction
  document.getElementById("progressbar").style.width = currentScore*8.33 + "%";


  // Code to new page when score of 12 is reached***************************************************************************
  if (currentScore == 12) {
    alert("You win! let's go to your bonus bio...");

    setInterval(() => {
      window.location.href = "bonus.html";
    }, 1000);

  } 
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





// SEARCH BAR ******************************************************************************************************
// *****************************************************************************************************************
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'mollyrushton.github.io/christmas-cfg-project';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);