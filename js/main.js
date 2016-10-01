var animals = [

  ["rat", 1960, 1972, 1984, 1996, 2008],
  ["ox", 1961, 1973, 1985, 1997, 2010],
  ["tiger", 1962, 1974, 1986, 1998, 2010],
  ["rabbit", 1963, 1975, 1987, 1999, 2011],
  ["dragon", 1964, 1976, 1988, 2000, 2012],
  ["snake", 1965, 1977, 1989, 2001, 2013],
  ["horse", 1966, 1978, 1990, 2002, 2014],
  ["goat", 1967, 1979, 1991, 2003, 2015],
  ["monkey", 1968, 1980, 1992, 2004, 2016],
  ["rooster", 1969, 1981, 1993, 2005, 2017],
  ["dog", 1970, 1982, 1994, 2006, 2018],
  ["pig", 1971, 1983, 1995, 2007, 2019]
]

var animalImg = [
  {
    name: "rat",
    img: "img/rat.jpg"
  },
  {
    name: "ox",
    img: "img/ox.jpg"
  },
  {
    name: "tiger",
    img: "img/tiger.jpg"
  },
  {
    name: "rabbit",
    img: "img/rabbit.jpg"
  },
  {
    name: "dragon",
    img: "img/dragon.jpg"
  },
  {
    name: "snake",
    img: "img/snake..jpg"
  },
  {
    name: "horse",
    img: "img/horse.jpg"
  },
  {
    name: "goat",
    img: "img/goat.jpg"
  },
  {
    name: "monkey",
    img: "img/monkey.jpg"
  },
  {
    name: "rooster",
    img: "img/rooster.jpg"
  },
  {
    name: "dog",
    img: "img/dog.jpg"
  },
  {
    name: "pig",
    img: "img/pig.jpg"
  }
]

var btn = document.getElementById("btn")
var img = document.createElement('img')
var results = document.getElementById('results')
results.appendChild(img)

function getInfo(e) {
  var input = document.getElementById("year").value
  var animalResult

  for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    
    for (var j = 0; j < animal.length; j++) {
      if (input == animals[i][j]) {
        console.log(animals[i][0])
        animalResult = animals[i][0]
      }
    }
  }

  for (var i = 0; i < animalImg.length; i++) {
    if (animalResult == animalImg[i].name) {
      console.log(animalImg[i].img)
      img.setAttribute('src', animalImg[i].img)
    }
  }
}

btn.addEventListener("click", getInfo)




/* ENTER BUTTON */
function runScript(e) {
    if (e.keyCode == 13) {
        var tb = document.getElementById("scriptBox");
        eval(tb.value);
        return false;
    }
}