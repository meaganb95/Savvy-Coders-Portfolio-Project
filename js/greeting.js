var hello = "Hello";
var userName = prompt( "What's your name?" );
var checkUserName = function checkUserName(){
    if( !userName || userName === " " ){
        userName = prompt( "Really, what's your name?" );
        checkUserName();
    }
};


checkUserName();

alert( hello + " " + userName );
