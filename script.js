function SUBMIT(){
  var date = new Date();
  var date= parseInt(baseline.getInfoId("Day").value);
  var month =parseInt(baseline.getInfoId("Month").value)-1;
  var year =parseInt(baseline.getInfoId("Year").value);

  if(Day<0 || Day>31){
    baseline.getInfoClassName("invalid day").innerHtml="Enter valid Date";
    return false;
  }else if (date==="") {
    baseline.getInfoClassName("invalid day").innerHtml="insert field";
    return false;
  }else {
    date.setDate(date);
  }
  if (Month<0 || day> 31){
    baseline.getInfoClassName("invalid month").innerHtml="Enter a valid Month";
    return false;
  }else if (Month ==="") {
    baseline.getInfoClassName("invalid month").innerHtml="insert field";
    return false;
  }else {
    date.setMonth(Month);
  }
  if (Year <0){
    baseline.getInfoClassName("invalid year").innerHtml="Enter valid Year";
    return false;
  }else if (Year==="") {
    baseline.getInfoClassName("inalid year").innerHtml="insert field";
    return false;
  }else {
    date.setYear(Year);
  }
   var Day=date.getDay();
   var Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   var Male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
   var Female=["Akosua","Adwoa"," Abenaa","Akua","Yaa","Afua","Ama"];

   function getAkan(){
     var ismale=baseline.getInfoId("Male").checked;
     var isfemale=baseline.getInfoId("Female").checked;
     if (ismale ===true && isfemale ==false){
       if (day ===0){
         alert("your name is" + Male[0]);
       }
       else if (Day===1) {
         alert("your name is" + Male[1]);
       }
       else if (Day===2) {
         alert("your name is"+ Male[2]);
       }
       else if (Day===3) {
         alert("your name is" + Male[3]);
       }
       else if (Day===4) {
         alert("your name is"+ Male[4]);
       }
       else if (Day===5) {
         alert("your name is" + Male[5]);
       }
       else if (Day==6){
         alert("your name is" + Male[6]);
       }
     }
     if (isfemale ===true && ismale===false){
       if (day ===0){
         alert("your name is" + Female[0]);
       }
       else if (Day===1) {
         alert("your name is" + Female[1]);
       }
       else if (Day===2) {
         alert("your name is"+ Female[2]);
       }
       else if (Day===3) {
         alert("your name is" +Female[3]);
       }
       else if (Day===4) {
         alert("your name is"+ Female[4]);
       }
       else if (Day===5) {
         alert("your name is" + Female[5]);
       }
       else if (Day==6){
         alert("your name is" + Female[6]);
       }
     }
   }
}
