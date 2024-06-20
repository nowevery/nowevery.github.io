
document.write("<button class=\"scrollToTop\" type=\"button\"><a href=\"javascript: void(0)\"><img src=\"images\/top.png\"><\/a><\/button>");

			
$(document).ready(function() {
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});


document.write("<footer> ");
document.write("    <div class=\"fbg\">");
document.write("      <div class=\"box-1\">");
document.write("        <div class=\"add\">");
document.write("          <li>電話：04-22378096<\/li>");
document.write("          <li>傳真：04-22378575<\/li>");
document.write("          <li>E-mail：<a href=\"mailto:info@jlweb.net\">info@jlweb.net<\/a><\/li>");
document.write("        <\/div>        ");
document.write("      <\/div>");
document.write("    <\/div> ");
document.write("    <div class=\"copyright\">");
document.write("      <div class=\"box-1 wow fadeIn\">");
document.write("          © 2021 捷羚機械有限公司 ALL RIGHTS RESERVED");
document.write("      <\/div>");
document.write("    <\/div>   ");
document.write("  <\/footer>");
document.write("<\/div>");
document.write("<!--\/\/wrapper-->");
document.write("<\/body>");
document.write("<\/html>");
