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

document
    .querySelector( "#subheader" )
    .outerHTML = "<h3>Hello, " + originalName + "</h3>";
