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
}
