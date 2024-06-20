<?php
// header("Cache-Control: no-cache");
function setLastModified($last_modified=NULL)
{
    $page_modified=getlastmod();
    if(empty($last_modified) || ($last_modified < $page_modified))
    {
        $last_modified=$page_modified;
    }
    $header_modified=filemtime(__FILE__);
    if($header_modified > $last_modified)
    {
        $last_modified=$header_modified;
    }
    header('Last-Modified: ' . date("r",$last_modified));
    return $last_modified;
}
function exitIfNotModifiedSince($last_modified)
{
    if(array_key_exists("HTTP_IF_MODIFIED_SINCE",$_SERVER))
    {
        $if_modified_since=strtotime(preg_replace('/;.*$/','',$_SERVER["HTTP_IF_MODIFIED_SINCE"]));
        if($if_modified_since >= $last_modified)
        {
            header("HTTP/1.0 304 Not Modified");
            exit();
        }
    }
}
exitIfNotModifiedSince(setLastModified());
$website = $this->db->get($this->front_lang.'_website')->row_array();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1,user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="<?php echo base_url('public/front/'.$this->front_lang.'/images/favicons/ms-icon-144x144.png')?>">
    <meta name="theme-color" content="#ffffff">
    <meta name="author" content="<?php echo $website['author']; ?>">
    <meta name="description" content="<?php echo $website['description']; ?>">
    <meta name="keywords" content="<?php echo $website['keywords']; ?>">
    <meta name="url" content="<?php echo $website['url']; ?>">
    <title><?php echo $website['website_name']?></title>
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo base_url('public/front/'.$this->front_lang.'/images/favicons/apple-touch-icon-144x144-precomposed.png')?>" />
    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo base_url('public/front/'.$this->front_lang.'/images/favicons/apple-icon-57x57.png')?>"/>
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo base_url('public/front/'.$this->front_lang.'/images/favicons/apple-icon-72x72.png')?>"/>
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo base_url('public/front/'.$this->front_lang.'/images/favicons/apple-icon-114x114.png')?>"/>
    <link rel="icon" sizes="192x192" href="<?php echo base_url('public/front/'.$this->front_lang.'/images/favicons/android-icon-192x192.png')?>" type="image/png"/>
    <link rel="shortcut icon" href="<?php echo base_url('public/front/'.$this->front_lang.'/images/favicons/favicon.ico')?>" type="image/x-icon"/>
    <!--== all css ==-->
    <link href="<?php echo base_url('public/front/'.$this->front_lang.'/css/bootstrap.css')?>" rel="stylesheet" type="text/css">
    <link href="<?php echo base_url('public/front/'.$this->front_lang.'/css/master.css')?>" rel="stylesheet" type="text/css">
    <link href="<?php echo base_url('public/front/'.$this->front_lang.'/css/layout.css')?>" rel="stylesheet" type="text/css">
    <link href="" rel="stylesheet" type="text/css">
    <link href="" rel="stylesheet" type="text/css">
    <link href="" rel="stylesheet" type="text/css">
    <link href="" rel="stylesheet" type="text/css">
    <link href="" rel="stylesheet" type="text/css">
    <!--== all js ==-->
    <script type="text/javascript" src="<?php echo base_url('public/front/'.$this->front_lang.'/js/jquery-3.1.1.js')?>"></script>
    <script type="text/javascript" src="<?php echo base_url('public/front/'.$this->front_lang.'/js/wow.js')?>"></script>
</head>
<body>
    <header>
        <section class="header">
            <div class="logo">
                <a href="<?php echo base_url($this->front_lang.'/home')?>">
                    <div class="logo_img"><img src="<?php echo base_url('public/front/'.$this->front_lang.'/images/logo.png')?>" alt=""></div>
<!--
                    <div class="name_box">
                        <div>Since 2001</div>
                        <div>夏爾歐語線上學習中心</div>
                        <div>Charles online studying center</div>
                    </div>
-->
                </a>
            </div>
            <nav class="menu">
                <a href="<?php echo base_url($this->front_lang.'/course')?>">
                    <div class="ch_butt">夏爾課程</div>
                    <div class="en_butt">COURSE</div>
                </a>
                <a href="<?php echo base_url($this->front_lang.'/news')?>">
                    <div class="ch_butt">最新消息</div>
                    <div class="en_butt">NEWS</div>
                </a>
                <a href="<?php echo base_url($this->front_lang.'/feature')?>">
                    <div class="ch_butt">學習特色</div>
                    <div class="en_butt">FEATURE</div>
                </a>
                <a href="<?php echo base_url($this->front_lang.'/teacher')?>">
                    <div class="ch_butt">夏爾師資</div>
                    <div class="en_butt">TEACHER</div>
                </a>
                <a href="<?php echo base_url($this->front_lang.'/contact')?>">
                    <div class="ch_butt">聯絡我們</div>
                    <div class="en_butt">CONTACT</div>
                </a>
                <a href="<?php echo base_url($this->front_lang.'/qa')?>">
                    <div class="ch_butt">Q&A</div>
                    <div class="en_butt">Q&A</div>
                </a>
            </nav>

            <div class="mobile_menu">
                <div id="toggle">
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                </div>
                <div id="menu">
                    <a href="<?php echo base_url($this->front_lang.'/course')?>">
                        <div class="ch_butt">夏爾課程</div>
                        <div class="en_butt">COURSE</div>
                    </a>
                    <a href="<?php echo base_url($this->front_lang.'/news')?>">
                        <div class="ch_butt">最新消息</div>
                        <div class="en_butt">NEWS</div>
                    </a>
                    <a href="<?php echo base_url($this->front_lang.'/feature')?>">
                        <div class="ch_butt">學習特色</div>
                        <div class="en_butt">FEATURE</div>
                    </a>
                    <a href="<?php echo base_url($this->front_lang.'/teacher')?>">
                        <div class="ch_butt">夏爾師資</div>
                        <div class="en_butt">TEACHER</div>
                    </a>
                    <a href="<?php echo base_url($this->front_lang.'/contact')?>">
                        <div class="ch_butt">聯絡我們</div>
                        <div class="en_butt">CONTACT</div>
                    </a>
                    <a href="<?php echo base_url($this->front_lang.'/qa')?>">
                        <div class="ch_butt">Q&A</div>
                        <div class="en_butt">Q&A</div>
                    </a>
                    <div>
                        <a href="javascript:void(0)" class="ly_butt">
                            <div>免費試讀</div>
                        </a>
                        <a href="<?php echo $website['website_line']?>" target="_blank">
                            <div>LINE好友</div>
                        </a>
                        <a href="<?php echo $website['website_link']?>" target="_blank">
                            <div>夏爾官網</div>
                        </a>
                        <a href="<?php echo $website['website_fb']?>" target="_blank">
                            <div>FB連結</div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </header>
    <?php echo $content; ?>

    <footer>
        <div class="foot">
            <div class="foot_logo">
                <a href="<?php echo base_url($this->front_lang.'/home')?>"><img src="<?php echo base_url('public/front/'.$this->front_lang.'/images/foot_logo.png')?>" alt=""></a>
            </div>
            <div class="foot_menu">
                <?php for ($i=0; $i < 3; $i++):?>
                <div class="school">
                    <ul class="school_name"><?php echo (!empty($website['company_name'.$i]))?$website['company_name'.$i]:''?></ul>
                    <a href="<?php echo (!empty($website['company_google'.$i]))?$website['company_google'.$i]:''?>" target="_blank"><?php echo (!empty($website['company_address'.$i]))?$website['company_address'.$i]:''?></a>
                    <ul class="school_tel"><?php echo (!empty($website['company_tel'.$i]))?$website['company_tel'.$i]:''?></ul>
                </div>
                <?php endfor;?>
            </div>
            <div class="copyright">Copyright © 2019  Charles Language Center. All Rights Reserved. <a href="https://www.jddt.tw/" target="_blank">Designed by JDDT.</a></div>
        </div>
    </footer>
</body>
</html>
<?php if(isset($_SESSION['error']) && !empty($_SESSION['error'])): ?>
<script>
  alert("<?php echo $_SESSION['error']?>");
</script>
<?php endif;?>
<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script> -->

<script type="text/javascript">
  function loadStyleSheet(src){
      if (document.createStyleSheet) document.createStyleSheet(src);
      else {
          var stylesheet = document.createElement('link');
          stylesheet.href = src;
          stylesheet.rel = 'stylesheet';
          stylesheet.type = 'text/css';
          document.getElementsByTagName('head')[0].appendChild(stylesheet);
      }
  }


  loadStyleSheet("<?php echo base_url('public/front/'.$this->front_lang.'/css/mobile_menu.css')?>");
  loadStyleSheet("<?php echo base_url('public/front/'.$this->front_lang.'/css/reset.css')?>");
  loadStyleSheet("<?php echo base_url('public/front/'.$this->front_lang.'/css/fonts.css')?>");
  loadStyleSheet("<?php echo base_url('public/front/'.$this->front_lang.'/css/animate.css')?>");
  loadStyleSheet("<?php echo base_url('public/front/'.$this->front_lang.'/css/_lybox.css')?>");
</script>


<script type="text/javascript">
    var element = document.createElement("script");
    myScript = document.getElementById("myScript");
    if(myScript)
    {
      var myStr = myScript.innerHTML.replace(/&amp;/g, "&");
      myStr = myStr.replace(/&gt;/g, ">");
      myStr = myStr.replace(/&lt;/g, "<");
      myStr = myStr.replace(/&quot;/g, "\"");
      myStr = myStr.replace(/&#039;/g, "'");
      element.text = myStr;
      $('#myScript').remove();
      document.body.appendChild(element);
    }
</script>

<script>
$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});
new WOW().init();
</script>


