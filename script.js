function SUBMIT() {
  var d = new Date();
  var date = parseInt(document.getElementById("Day").value);
  var month = parseInt(document.getElementById("Month").value) - 1;
  var year = parseInt(document.getElementById("Year").value);

  if (day < 0 || day > 31) {
    document.getElementsByClassName("invalid day").innerHtml = "Enter valid Date";
    return false;
  } else if (date == "") {
    document.getElementsByClassName("invalid day").innerHtml = "insert field";
    return false;
  } else {
    d.setDate(date);
  }
  if (month < 0 || day > 12) {
    document.getElementsByClassName("invalid month").innerHtml = "Enter a valid Month";
    return false;
  } else if (month == "") {
    document.getElementsByClassName("invalid month").innerHtml = "insert field";
    return false;
  } else {
    d.setMonth(month);
  }
  if (year < 0) {
    document.getElementsByClassName("invalid year").innerHtml = "Enter valid Year";
    return false;
  } else if (year == "") {
    document.getElementsByClassName("inalid year").innerHtml = "insert field";
    return false;
  } else {
    d.setYear(year);
  }
  var day = d.getDay();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var female = ["Akosua", "Adwoa", " Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  function getAkan() {
    var ismale = document.getElementById('male').checked;
    var isfemale = document.getElementById('female').checked;
    if (ismale == true && isfemale == false)
      if (day == 0) {
        alert("your name is" + male[0]);
      }
    else if (day == 1) {
      alert("your name is" + male[1]);
    } else if (day == 2) {
      alert("your name is" + male[2]);
    } else if (day == 3) {
      alert("your name is" + male[3]);
    } else if (day == 4) {
      alert("your name is" + male[4]);
    } else if (day == 5) {
      alert("your name is" + male[5]);
    } else if (day == 6) {
      alert("your name is" + male[6]);
    }
  }
  if (isfemale == true && ismale == false) {
    if (day == 0) {
      alert("your name is" + female[0]);
    } else if (day == 1) {
      alert("your name is" + female[1]);
    } else if (day == 2) {
      alert("your name is" + female[2]);
    } else if (day == 3) {
      alert("your name is" + female[3]);
    } else if (day == 4) {
      alert("your name is" + female[4]);
    } else if (day == 5) {
      alert("your name is" + female[5]);
    } else if (day == 6) {
      alert("your name is" + Female[6]);
    }
  }
}
}
