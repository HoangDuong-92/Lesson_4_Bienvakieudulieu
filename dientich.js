let inputWidth;
let inputHeight;
inputWidth = prompt("Enter the Width ");
document.write("Enter the Width"+inputWidth);
document.write("</br>")
inputHeight = prompt("Enter the Height");
document.write("Enter the height "+inputHeight);
document.write("</br>")
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let area = width * height;
document.write("The area is: " + area);