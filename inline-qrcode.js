function qrcode_code() {
  var url = document.querySelector("#copylink").value;
  var qrcimg = 'http://chart.apis.google.com/chart?chs=150x150&cht=qr&chld=M&chl='+url;
  var qrcimglnk = 'http://chart.apis.google.com/chart?chs=500x500&cht=qr&chld=M&chl='+url;
  var insertimg = "<div id='qrcode2' class='share'><a href="+qrcimglnk+"><img id='myid' src='" + qrcimg + "' /></a></div>"
  console.log(url);
  if ( $( '#qrcode2' ).length > 0 ) {
    $( '#qrcode2' ).remove( );
  }
  if ($( "#shareboxes" )) {
    $( "#shareboxes" ).append( insertimg );        // Append new elements
    $( "div#qrcode2 img" ).css( "width", "100px" );
    $( "div#qrcode2 img" ).css( "height", "100px" );
  }

}

$(document).ready( function( ){
    // Share button behavior
    $( '.button_share' ).on("click", function( ){
        qrcode_code( );
    });

    // Tab behavior on stats page
    $("a[href='#stat_tab_share']").on("click", function( ){
        qrcode_code( );
    });
});
