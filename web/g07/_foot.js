document.write("  <footer class=\"wow fadeIn\"> ");
document.write("    <div class=\"box-foot\">");
document.write("      <div class=\"logo\"><a href=\"index.html\"><img src=\"images\/logo.svg\" alt=\"捷羚機械\" title=\"捷羚機械\"><\/a><div class=\"copyright\">© 2021 捷羚機械有限公司 ALL RIGHTS RESERVED<\/a><\/div>  <\/div>");
document.write("      <div class=\"flist\"> ");
document.write("        <ul>");
document.write("          <li><a href=\"about.html\">關於我們<\/a><\/li>");
document.write("          <li><a href=\"products.html\">產品系列<\/a><\/li>");
document.write("          <li><a href=\"news.html\">最新消息<\/a><\/li>");
document.write("          <li><a href=\"download.html\">檔案下載<\/a><\/li>");
document.write("          <li><a href=\"faq.html\">常見問題<\/a><\/li>");
document.write("          <li><a href=\"video.html\">影音專區<\/a><\/li>          ");
document.write("          <li><a href=\"contact.html\">聯絡資訊<\/a><\/li>");
document.write("        <\/ul>");
document.write("        ");
document.write("      <\/div>");
document.write("    <\/div> ");
document.write("  <\/footer>");
document.write("  <div class=\"top\">TOP<\/div>");
document.write("<\/div>");
document.write("<!--\/\/wrapper-->");
document.write("<\/body>");
document.write("<\/html>");
document.write("");
document.write("<script src=\"js\/jquery-1.8.3.min.js\"><\/script>");
document.write("<script src=\"js\/jquery.scrollbar.min.js\"><\/script>");
document.write("<script src=\"js\/venobox\/venobox.min.js\"><\/script>");
document.write("<script src=\"js\/main.js\"><\/script>");
document.write("<!--[if lt IE 9]>");
document.write("<script src=\"js\/IE9.js\"><\/script>");
document.write("<script src=\"js\/html5shiv.min.js\"><\/script>");
document.write("<script src=\"js\/respond.min.js\"><\/script>");
document.write("<![endif]-->");
document.write("");
document.write("<!--fadeIn -->");
document.write("<script type=\"text\/javascript\" src=\"js\/effect.js\"><\/script>");


      // WOW JS
      new WOW().init();
      $(document).ready(function() {
        
      });
      $(function(){
      $('.top').click(function(){
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
      $body.animate({
         scrollTop: 0
          }, 800);
      return false;
      });
      $(window).scroll(function() {
        if ($(this).scrollTop() > 0){
          $('.top').addClass('open');
        }else{
          $('.top').removeClass('open');
        }
      });

  })
