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
  "mexicans"
];
var badTrump = [
  "mexico",
  "immigration",
  "muslims",
  "islamic terrorist",
  "terrorist",
  "islam"
];
var sadTrump = [
  "death",
  "no money"
];
var TFW = document.getElementById("TFW").value
if (badTrump.indexOf(TFW) !== -1){
  document.getElementById("image").innerHTML = "<img src='http://inthesetimes.com/images/articles/trump_flicker_face_yess.jpg'>";
}else if (goodTrump.indexOf(TFW) !== -1){
  document.getElementById("image").innerHTML = "<img src='http://noiimages.s3.amazonaws.com/images/redstate/20160614-1525871659.jpg'>";
}else if (sadTrump.indexOf(TFW) !== -1){
  document.getElementById("image").innerHTML = "<img src='https://i.imgflip.com/14c217.jpg'>";
}else {
  document.getElementById("image").innerHTML = "I am not programmed to respond";
}
}
