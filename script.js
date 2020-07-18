function SUBMIT() {
  var date = document.getElementById('date').value;
  var month = document.getElementById('month').value;
  var yearOfBirth = document.getElementById('year').value;

  if (date === "" || date < 1 || date > 31) {
    alert("Date must be between 1 and 31");
  } else if (month === "" || month < 1 || month > 12) {
    alert("Date must be between 1 and 12");
  } else if (year === "") {
    alert("Enter year");
  } else {
    return false;
  }
}
function getAkan() {
  var date = document.getElementById('date').value;
  var month = document.getElementById('month').value;
  var yearOfBirth = document.getElementById('year').value;
  var century = yearOfBirth.slice(0, 2);
  var year = yearOfBirth.slice(2, 4);

  var genders = document.getElementById("gender");
  var gender = genders.options[genders.selectedIndex].text;

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var female = ["Akosua", "Adwoa", " Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  var dayOfBirth = (((century / 4) - 2 * year - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7;
  var dayOfBirth = Math.floor(dayOfBirth);

  if (ismale === true && isfemale === false)
    if (day === 0) {
      alert("your name is" + male[0]);
    } else if (day === 1) {
    alert("your name is" + male[1]);
  } else if (day === 2) {
    alert("your name is" + male[2]);
  } else if (day === 3) {
    alert("your name is" + male[3]);
  } else if (day === 4) {
    alert("your name is" + male[4]);
  } else if (day === 5) {
    alert("your name is" + male[5]);
  } else if (day === 6) {
    alert("your name is" + male[6]);
  }
} else if (isfemale === true && ismale === false) {
  if (day === 0) {
    alert("your name is" + female[0]);
  } else if (day === 1) {
    alert("your name is" + female[1]);
  } else if (day === 2) {
    alert("your name is" + female[2]);
  } else if (day === 3) {
    alert("your name is" + female[3]);
  } else if (day === 4) {
    alert("your name is" + female[4]);
  } else if (day === 5) {
    alert("your name is" + female[5]);
  } else if (day === 6) {
    alert("your name is" + Female[6]);
  }
}
}
}
