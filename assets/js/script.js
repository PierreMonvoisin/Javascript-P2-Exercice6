let swap = function() {
  this.src = "./assets/img/" + this.id + "_2.jpg";
}
let swapBack = function() {
  this.src = "./assets/img/" + this.id + ".jpg";
}

document.getElementById('image1').onmouseenter = swap ;
document.getElementById('image2').onmouseenter = swap ;
document.getElementById('image3').onmouseenter = swap ;
document.getElementById('image4').onmouseenter = swap ;
document.getElementById('image5').onmouseenter = swap ;

document.getElementById('image1').onmouseout = swapBack ;
document.getElementById('image2').onmouseout = swapBack ;
document.getElementById('image3').onmouseout = swapBack ;
document.getElementById('image4').onmouseout = swapBack ;
document.getElementById('image5').onmouseout = swapBack ;
