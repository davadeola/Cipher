var string = prompt("Enter a sentence");
console.log(string);

 function new3(){
  var new1= (string.charAt(0) + string.charAt(string.length-1)).toUpperCase();

  return new1;

}
var new2 = new3();

function rev(){
  var splitstring = new2.split("").reverse().join("");

  return splitstring;

}

function comb(){
  var fg = new3();
  var gh = rev();

  var did = string + gh;
  return did;

}
var final = comb();

function last(){
  var count = string.length;
  var index = count/2;
  var txt = string.charAt(index);
  var newy = txt + final;
  alert(newy);
}

last();
