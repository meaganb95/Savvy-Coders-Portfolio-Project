/* globals $ */
var story = {
    "start": {
        "text": "You're faced with a maze, a labyrinth with no end in sight. You've got to start somewhere, and two options: left or right?",
        "choices": [ "left", "right" ]
    },
    "left": {
        "text": "You travel down the left side of the first pathway, with towering, vine-covered walls on either side of you. At the end of the path, you find two large wooden doors, one new and painted a royal purple, the other made of cracked, old wood. Will you go through the purple door or the old door?",
        "choices": [ "purple door", "old door" ]
    },
    "right": {
        "text": "You turn right and are brought to a bridge. As you're walking over a bridge, the wood cracks under you and fall into the river below and drown.",
    },
    "purple door": {
        "text": "You go through the door and fall into a seemingly endless pit. Until you meet the end, quite painfully.",
    },
    "old door": {
        "text": "You go through the door and meet a dead end. You try to turn back, but the door has closed and locked behind you. You're stuck."
    }
};

function validateChoice( choice, choices ){
    var isValidChoice = false;

    for( let i = 0; i < choices.length; i++ ){
        if( choice === choices[i] ){
            isValidChoice = true;
        }
    }

    return isValidChoice;
}

function handleChoices( chapter, branch ){
    var choice = prompt( chapter.text );

    if( validateChoice( choice, chapter.choices ) ){
        runStory( choice );
    }
    else{
        runStory( branch );
    }
}

function runStory( branch ){
    var chapter = story[branch];

    if( chapter.choices ){
        handleChoices( chapter, branch );
    }
    else{
        document
            .querySelector( "#output" )
            .textContent = chapter.text;
    }
}

runStory( "start" );

// function validateChoice( choice, choices ){
//     var isValidChoice = false;
//
//     choices.forEach( ( validChoice ) => {
//       if(choice === validChoice ){
//         isValidChoice = true;
//       }
//     ) };
//
//     return isValidChoice;
// }

// function validateChoice( choice, choices ){
//     var isValidChoice = false;
//
//     for( let i = 0; i < choices.length; i++ ){
//         if( choice === choices[i] ){
//             isValidChoice = true;
//         }
//     }
//
//     return isValidChoice;
// }

// function handleChoices( chapter, branch ){
//     var choice = prompt( chapter.text );
//
//     if( chapter.choices.some ( ( validChoice ) => choice === validChoice)
//       runStory (choice);
//     }
//     else{
//         runStory( branch );
//     }
// }
//
// function runStory( branch ){
//     var chapter = story[branch];
//
//     if( chapter.choices ){
//         handleChoices( chapter, branch );
//     }
//     else{
//         document
//             .querySelector( "#output" )
//             .textContent = chapter.text;
//     }
// }

// $( "#input" ).on(
//     "keyup",
//     ( event ) => {
//         var value = $( event.target ).val();
//         var $subheader = $( "#subheader" );
//
//         $subheader.html( "<h3>Hello, " + value + "</h3>" );
//     }
// );

// runStory( "start" );
