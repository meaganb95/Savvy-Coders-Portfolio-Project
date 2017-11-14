var hello = "Hello";
var originalName = prompt( "What's your name?" );
var checkUserName = function checkUserName( userName ){
    if( !userName || userName === " " ){
        userName = prompt( "Really, what's your name?" );
        checkUserName( userName );
    }
    else{
        originalName = userName;
    }
};


checkUserName( originalName );

var node = document.querySelector( "#subheader" ).textContent = "Hello, " + originalName;

alert( node );
