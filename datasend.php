<?php
$name=$_REQUEST['uname'];
$email=$_REQUEST['email'];
$phone=$_REQUEST['ph_no'];
$country=$_REQUEST['country'];
$subject='Enquiry from $name';
 $message = "Instant Enquiry Detail,\n\n  Name:$name, \n\n Email: $email, \n\n Phone number: $phone";

	 $toemail = "rachnapant199@gmail.com";
		//$toemail = "pankaj.btech@gmail.com";
         $from = "$name";
         $headers = "From: $email\r\n";
         $mailrslt=mail($toemail, $subject, $message, $headers . "Return-Path: $email <$email>\n");
		 if ($mailrslt) {
		 		  print "<script>";
			      print "window.location='index.html';";
				  print "</script>";

		 }
	
?>