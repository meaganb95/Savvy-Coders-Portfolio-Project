var story = {
    "start": "You're faced with a maze, a labyrinth with no end in sight. You've got to start somewhere, and two options: left or right?",
    "left": "You travel down the left side of the first pathway, with towering, vine-covered walls on either side of you. At the end of the path, you find two large wooden doors, one new and painted a royal purple, the other made of cracked, old wood. Which door do you go through?",
    "right": "You travel down the left side of the first pathway, with towering, vine-covered walls on either side of you. The path splits to a fork; you can go the path on the left into a fog-covered forest, or right into a maze of shrubbery Do you go left or right?",
    "purple door": "something happens"
    "old door": "the end",
};

var runStory = function runStory(){
    var choice = prompt( story.start );

    if( choice === "left" ){
        prompt( story[choice] );

        if( choice === "purple door" ){

        }
        else if( choice === "old door" ){
          document
              .querySelector( "#output" )
              .textContent = story[choice];
        }
        else{

        }
    }
    else if( choice === "right" ){
        document
            .querySelector( "#output" )
            .textContent = story[choice];
    }
    else{
        runStory();
    }
};

runStory();
