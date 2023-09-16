let so = prompt("nhập vào số có 3 chữ số");

let so1 = Math.floor(Number(so)/100);

let so2 = Math.floor((Number(so)/10)%10);

let so3 = Math.floor(Number(so)%10);

document.write("",""+so3+so2+so1);