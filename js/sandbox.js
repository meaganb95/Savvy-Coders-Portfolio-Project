/* globals $ */
var $output = $( "#output" );
var $subtitle = $( "<h2>Subtitle</h2>" );

$output
    .html( "<h3>Hello Again World!</h3>" )
    .css( {
        "color": "blue",
        "font-size": "200%",
        "margin-left": "300px"
    } )
    .append( $subtitle )
    .css( "color", "hotpink" )
    .fadeOut( 3000 )
    .fadeIn()
    .animate( {
        "margin-top": "200%"
    }, {
        "duration": "5000",
        "ease": "ease-in",
        "complete": function changeSubtitle(){
            $subtitle.css( "color", "hotpink" );
        }
    } );
