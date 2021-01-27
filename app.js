// Array with questions
const questPool = [
    "What advice would you give your 10-year younger self?",
    "Do you prefer planning or improvising? And why?",
    "What idea you can\'t stop thinking about recently?",
    "What is your dream job?",
    "What is your biggest fear?",
    "If you had to switch lives with someone, who would it be? Why?",
    "If you could have dinner with anyone in the world, who would it be? Why?",
    "Who is one of your heroes that inpire you? And why?",
    "What is one thing your admire on the person to your right?",
    "What have you learned from your last job or project?",
    "What do you like the most about yourself?",
    "Do you prefer to ask for permissions or forgiveness?",
    "What does the “meaning of life” mean to you?",
    "What have you learned from your last relationship?",
    "Would you like to re-live some part of your life?",
    "What would a really enjoyable day look like for you?",
    "What would you do if money wasn’t a thing?",
    "How do you like to start your day? And why?",
    "How much money would be enough for you?",
    "What do you think your 80-year old self would give you as an advice?",
    "If you could instantly fix one thing in your life, what would it be?",
    "What do you think everyone should know to have a better life?",
    "What is the person to your left better at than anyone else in the room?",
    "Would you rather be super-positive or super-negative about everything?",
    "What would you do if whatever you did, no one could know it was you?",
    "What jobs or things are you probably doing in close paralel universes?",
    "If you could learn one skill instantly, what would it be? And why?",
    "If you could speak fluently in one additional language, what would it be? And why?",
    "What is one thing you got from your family you are grateful for?",
    "Which 3 things do you like and don’t like about yourself?",
    "What activity gives you a surprising amount of energy?",
    "Do you want kids in the future? And why?",
    "What do you think is right even though it sounds wrong?",
    "What movie quotes do you use on a regular basis?",
    "What is the most uncomfortable place you have ever slept?",
    "What is quickly becoming obsolete?",
    "What is something common from your childhood that will seem strange to future generations?",
    "How much of your body would you cybernetically enhance if you could?",
    "What is the weirdest thing about modern life that people just accept as normal?",
    "What do you think you do worse than 90% of people?",
    "What do you think you do better than 90% of people?",
    "What profession doesn’t get enough credit or respect?",
    "What is the best and worst thing about the country you are from?",
    "What do you need help with most often?",
    "What were you completely certain of until you found out you were wrong?",
    "What job doesn’t exist now but will exist in the future?",
    "What is the most physically painful thing you’ve ever experienced?",
    "What topic could you spend hours talking about?",
    "What was a big recent realization you had about yourself?",
    "What is legal now, but probably won’t be in 20 years?",
    "What current trend makes no sense to you?",
    "What still makes you cringe when you think back on it?",
    "If you could airdrop anything you want, worth a million dollars or less, anywhere you want, what would you airdrop and where would you airdrop it?",
    "If you lived in a virtual reality world of your own creation, what would it look like?",
    "What always cheers you up when you think about it?",
    "What qualities do all your friends have in common?",
    "What is the dumbest thing someone has argued with you about?",
    "What are some misconceptions about your hobby?",
    "What is about to get much better?",
    "Who do you feel like you know even though you have never met them?",
    "What life skills are rarely taught but extremely useful?",
    "When was the last time you yelled at someone?",
    "What habit do you have now that you wish you started much earlier?",
    "What was the best thing that happened to you today?",
    "What bit of trivia do you know that is very interesting but also very useless",
    "What did you think was going to be amazing but turned out to be horrible?",
    "When was the last time you immediately regretted something you said?",
    "What was your most recent lie?",
    "What is your worst example of procrastination?",
    "Which of your vices or bad habits would be the hardest to give up?",
    "What is the hardest you have ever worked?",
    "What game have you spent the most hours playing?",
    "What problem are you currently grappling with?",
    "What is something people don’t worry about but really should?",
    "What are you interested in that most people aren\’t?",
    "What unethical experiment would have the biggest positive impact on society as a whole?",
    "When was the last time you got to tell someone: I told you so.?",
    "What do you think you are much better at than you actually are?",
    "What makes you roll your eyes every time you hear it?",
    "Who do you go out of your way to be nice to?",
    "What social stigma does society need to get over?",
    "What are you currently worried about?",
    "What’s something you really resent paying for?"
]

// Stuff
let count;
let questNumber;
let questText;
let questChosen = questPool[questNumber];
const button = document.querySelector(".btn");


// Chooses a random number from 0 to the number of questions - 1
function randomQuestion(count) {
    return Math.floor(Math.random() * count);
}


// Selects .text and replaces it with a chosen question
function showQuestion() {

    if(questPool.length > 0) {

        // Counts the number of questions left in the Array
        count = questPool.length;

        // Creates a random number
        questNumber = randomQuestion(count);

        // Picks a question based on the number
        questChosen = questPool[questNumber];

        // Selects question text from HTML
        questText = document.querySelector(".text");

        // Replaces text in the HTML
        questText.innerText = questChosen;

        // Removes the used question from the Array, tadaa
        questPool.splice(questNumber, 1);

    } else {

        // If the Array is empty, there is nothing left to say
        questText.innerText = "No questions. You did them all. Congrats.";
    }
}


window.onload = () => {
    showQuestion();
}


button.onclick = () => {
    showQuestion();
}