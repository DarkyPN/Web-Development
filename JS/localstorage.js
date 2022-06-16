document.querySelector('form').onsubmit = function(e) {
    e.preventDefault();
    var nume = document.querySelector('#nume').value;
    var prenume = document.querySelector('#prenume').value;
    var mesaj = document.querySelector('#mesaj').value;
    localStorage["nume"] = nume;
    localStorage["prenume"] = prenume;
    localStorage["mesaj"] = mesaj;
    console.log(localStorage);
  }