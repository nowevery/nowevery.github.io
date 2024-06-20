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
      <td cols="2"><font size="3" face="Arial">Phone:</font></td>
      <td cols="2"><font size="3" face="Arial"><?php echo $tel; ?></font></td>
    </tr>
    <tr>
      <td cols="2"><font size="3" face="Arial">Email:</font></td>
      <td cols="2"><font size="3" face="Arial"><?php echo $email; ?></font></td>
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
