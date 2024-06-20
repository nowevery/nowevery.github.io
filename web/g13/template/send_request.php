<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <table  style="border:5px #cccccc solid;" rules="all" cellpadding='5' border='1'>
    <tr>
      <td><font size="3" fa10ce="Arial">Company Name:</font></td>
      <td><font size="3" face="Arial"><?php echo $company_name; ?></font></td>
    </tr>
    <tr>
      <td cols="2"><font size="3" face="Arial">Contact Name:</font></td>
      <td cols="2"><font size="3" face="Arial"><?php echo $name; ?></font></td>
    </tr>
    <tr>
      <td cols="2"><font size="3" face="Arial">Phone:</font></td>
      <td cols="2"><font size="3" face="Arial"><?php echo $tel; ?></font></td>
    </tr>
    <tr>
      <td cols="2"><font size="3" face="Arial">Email:</font></td>
      <td cols="2"><font size="3" face="Arial"><?php echo $email; ?></font></td>
    </tr>      
    <tr>
      <td cols="2"><font size="3" face="Arial">How do you know GIGATEK?</font></td>
      <td cols="2"><font size="3" face="Arial">
        <?php
        foreach (json_decode($fromWhare,true) as $key => $value)
        {
          if($key != 0)
          {
            echo ',';
          }
          echo $value;
        }
        echo '<hr>';
        echo $oth_comment;
        ?>
      </font></td>
    </tr>
    <tr>
      <td cols="2"><font size="3" face="Arial">Please describe the application for this product.</font></td>
      <td cols="2"><font size="3" face="Arial"><?php echo $applyProduct; ?></font></td>
    </tr>      
    <tr>
      <td cols="2"><font size="3" face="Arial">Expectation business method with Gigatek :</font></td>
      <td cols="2"><font size="3" face="Arial">
        <?php
        foreach (json_decode($business_method,true) as $key => $value)
        {

          if($key != 0)
          {

            echo '<br />';
          }
          echo $value;                

        }
        ?>
      </font></td>
    </tr>
    <tr>
      <td cols="2"><font size="3" face="Arial">Is this project a new developing product in your firm ?</font></td>
      <td cols="2"><font size="3" face="Arial">
        <?php 
         if( $IsNewdevPdt == 'Y'){
            echo 'Yes';
          }else{
            echo 'No';
          }
        ?>            
      </font></td>
    </tr>       
    <tr>
      <td cols="2"><font size="3" face="Arial">Please select which kind engineering information would be provided:</font></td>
      <td cols="2"><font size="3" face="Arial">
        <?php
        foreach (json_decode($whkind_engineering,true) as $key => $value)
        {

         if($key != 0)
         {
          echo '<br />';                 
        }

        echo $value;                
      }
      ?>
    </font></td>
  </tr>
  <tr><font size="3" face="Arial">
    <td colspan="2" text-align="left">
      Comments:
      <br /><br />
      <?php echo nl2br($content); ?></font>
    </td>
  </tr>
</table>
</body>
</html>
