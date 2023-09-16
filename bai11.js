let so1 = prompt("nhập số thứ nhất");

let so2 = prompt("nhập số thứ hai");

let so3 = prompt("nhập số thứ ba");

let max = so1>so2 ? (so1>so3 ? so1 : so3) : (so2>so3 ? so2 : so3);

let min = so1<so2 ? (so1<so3 ? so1 : so3) : (so2<so3 ? so2 : so3);

document.write("các số là ", so1, " ",so2, " ",so3,"<br>");

document.write("số lớn nhất là ", max,"<br>");

document.write("số nhỏ nhất là ", min);