

let a = +prompt('Введите первое число')
let b = +prompt('Введите второе число')
let c = +prompt('Введите третье число')
  

  
if (a > b && a < c || a < b && a > c ) {
	alert(a)
} 
else if(b < a && b > c || b > a && b < c ) {
	alert(b)
}
 else if(c > b && c < a  || c < b && c > a ){
	alert(c)
}