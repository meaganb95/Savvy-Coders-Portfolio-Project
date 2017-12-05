/* globals $ */

$( "#input" ).on(
    "keyup",
    ( event ) => {
        var value = $( event.target ).val();
        var $subheader = $( "#subheader" );

        $subheader.html( "<h3>Hello, " + value + "</h3>" );
    }
);

$( ".content ul" ).on( "mouseenter", ( event ) => {
    $( event.target ).css( "background-color", "red" );
} );

$( ".content ul" ).on( "mouseenter", ( event ) => {
    $( event.target ).css( "background-color", "transparent" );
} );

$( "h1" ).on( "dblclick", ( event ) => event.target.textContent );

// var hello = "Hello";
// var originalName = prompt( "What's your name?" );
// var checkUserName = function checkUserName( userName ){
//     if( !userName || userName === " " ){
//         userName = prompt( "Really, what's your name?" );
//         checkUserName( userName );
//     }
//     else{
//         originalName = userName;
//     }
// };
//
//
// checkUserName( originalName );
//
// document
//     .querySelector( "#subheader" )
//     .outerHTML = "<h3>Hello, " + originalName + "</h3>";

//
// document
//     .querySelector( "h1" )
//     .addEventListener(
//         "dblclick",
//         ( event ) => event.target.textContent = "I've been clicked!"
//     );

$( "h1" ).on( "dblclick" , ( event ) => event.target.textContent = "I've been clicked" );
