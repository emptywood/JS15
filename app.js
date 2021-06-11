let ran = Math.floor(Math.random() * 6 + 1);
console.log(ran);
let saikoro = document.getElementById('sai');
saikoro.innerText = ran;
//偶数か奇数かの判定
let hantei;
if(ran % 2 == 0) {
	hantei = '偶数です';
} else {
	hantei = '奇数です';
}
let result = document.getElementById('result');
result.innerText = hantei;
// スコープ
let a = 'こんにちは';
if (2 > 1) {
	var b = 'こんばんは';
	//console.log(b);
}
console.log(b);
