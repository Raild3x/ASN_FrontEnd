const str = "id=\"active\"";
var dict = {};
dict["Home"] = "";
dict["FAQ"] = "";
dict["Bot Control"] = "";
dict["About Us"] = "";
dict["Contact Us"] = "";
dict["Profile"] = "";
dict["Login"] = "";
// Set the current page to have the active id
var currentPage = document.title;
for (var key in dict) {
    // check if the property/key is defined in the object itself, not in parent
    if (dict.hasOwnProperty(key)) {           
        if(currentPage.search(key) >= 0){
            dict[key] = str;
        }
    }
}

//https://antisocialnorm.net/ASN_Rat.png

document.write( '<link rel="icon" href="NewASNLogo.png">');
document.write( '<div class=\"header\">\n' );
document.write( '		<img class=\"icon\" src=\"Pictures/NewASNLogo.png\" alt=\"RAT\">\n' );
document.write( '		<div class=\"navbar\">\n' );
document.write( '			<a class=\"navbar-item\"'+dict.Home+' href=\"index.html\">HOME</a>\n' );
document.write( '			<a class=\"navbar-item\"'+dict.FAQ+' href=\"\">FAQ</a>\n' );
document.write( '			<a class=\"navbar-item\"'+dict["Bot Control"]+' href=\"\">BOT CONTROL</a>\n' );
document.write( '			<div class=\"navbar-dropdown\">\n' );
document.write( '				<a class=\"navbar-item\"'+dict["About Us"]+' href=\"\">ABOUT US</a>\n' );
document.write( '				<div>\n' );
document.write( '					<div>\n' );
document.write( '						<a>Server History</a>\n' );
document.write( '						<a>Logan</a>\n' );
document.write( '						<a>Michael</a>\n' );
document.write( '					</div>\n' );
document.write( '				</div>\n' );
document.write( '			</div>\n' );
document.write( '			<a class=\"navbar-item\"'+dict["Contact Us"]+' href=\"\">CONTACT US</a>\n' );
document.write( '\n' );
document.write( '			<a class=\"navbar-item\"'+dict.Login+' style=\"float:right;right:50px;position:relative;\" href=\"login.html\">LOGIN</a>\n' );
document.write( '			<a class=\"navbar-item\"'+dict.Profile+' style=\"float:right;right:50px;position:relative;\" href=\"profile.html\">UserProfile</a>\n' );
document.write( '		</div>\n' );
document.write( '	</div>' );


