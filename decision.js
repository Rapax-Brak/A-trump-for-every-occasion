function tfw(){
var goodTrump = [
  "america",
  "americans",
  "white people",
  "african americans",
  "black people",
  "blacks",
  "whites",
  "latinos",
  "latinas",
  "mexicans",
  "church",
  "christianity",
  "god",
  "jesus",
  "church and state",
  "trump",
  "money"
];
var badTrump = [
  "mexico",
  "immigration",
  "muslims",
  "islamic terrorist",
  "terrorist",
  "islam",
  "democrats"
];
var sadTrump = [
  "death",
  "no money",
  "abortion"
];
var TFW = document.getElementById("TFW").value
if (badTrump.indexOf(TFW) !== -1){
  document.getElementById("image").innerHTML = "<img src='http://inthesetimes.com/images/articles/trump_flicker_face_yess.jpg'>";
}else if (goodTrump.indexOf(TFW) !== -1){
  document.getElementById("image").innerHTML = "<img src='http://noiimages.s3.amazonaws.com/images/redstate/20160614-1525871659.jpg'>";
}else if (sadTrump.indexOf(TFW) !== -1){
  document.getElementById("image").innerHTML = "<img src='https://i.imgflip.com/14c217.jpg'>";
}else {
  var failsafe = Math.floor(Math.random()*3);
    if (failsafe === 0){
      document.getElementById("image").innerHTML = "<img src='http://inthesetimes.com/images/articles/trump_flicker_face_yess.jpg'>";
    }else if (failsafe === 1){
      document.getElementById("image").innerHTML = "<img src='http://noiimages.s3.amazonaws.com/images/redstate/20160614-1525871659.jpg'>";
    }else {
      document.getElementById("image").innerHTML = "<img src='https://i.imgflip.com/14c217.jpg'>";
    }
    }
}
