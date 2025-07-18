// STEP 1: Make an object called movieRecs
// This object should have 3 keys: happy, sad, excited
// Each key has an array of movie title strings
const movieRecs = {
    happy: ["Failure To Launch", "How to Lose A Guy In 10 Days", "The Wedding Planner"],
    sad: ["The Notebook", "Sleepless In Seattle", "Divine Secretes Of The Ya-Ya Sisterhood"],
    excited: ["Top Gun", "Jurassic Park", "Bourne Identity"],
};

// STEP 2: Select all 3 buttons and the <ul> from the HTML using getElementById
const happyBtn = document.getElementById("happy");
const sadBtn = document.getElementById("sad");
const excitedBtn = document.getElementById("excited");
const movieList = document.getElementById("movie-list");

// STEP 3: Create a function called showMovies
// It should accept one argument called mood
function showMovies(mood){
    // STEP 4: Inside the function, clear the old list using innerHTML = ""
    movieList.innerHTML = "";
    // STEP 5: Loop through the movies for that mood using forEach
    movieRecs[mood].forEach(function(movies) {
    
        // STEP 6: For each movie:
    // - create a <li> element
    // - set its textContent to the movie title
    // - append it to the movie list
        const movieRec = document.createElement("li");
        movieRec.textContent = movies;
        movieList.appendChild(movieRec);

        });

    };
    
    // STEP 7: Add click events to each button
    // Each one should call showMovies with the appropriate mood string

    happyBtn.addEventListener("click", function() {
        showMovies("happy");
    });

    sadBtn.addEventListener("click", function() {
         showMovies("sad");
    });

    excitedBtn.addEventListener("click", function() {
        showMovies("excited");
    });

//Questions answered: 
// 1. How did mood work correctly? mood is a placeholder for either "happy", "sad", or 
//"excited". When showMovies is called passing "happy" (due to the happy button being clicked), 
//the function takes the string "happy" and matches a key in the movieRecs object 
//and then movieRecs[mood] looks up the array for that key

//2. How did movie work correctly? movie is a parameter for the function inside forEAch
//forEach goes through each item in the array, one at a time and 
//for each item, it calls your function and passes the current movie title as the movie 
//parameter. 

//3. Why use an anonymous function necessary? allows you to pass the correct argument when the button
//is clicked. If you just use showMovies("happy") without anonymous function first, it would run immediately.




