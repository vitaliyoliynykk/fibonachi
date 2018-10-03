const x = prompt("Enter n");

function fibRecursive(n) {//Рекурсивна ф-ція
  if (n >= 2) { 
    return fibRecursive(n - 1)+ fibRecursive(n - 2);
  } else {
    return n;
  }
}
function fibCycle(n){//Цикл
  let x = 1;
  let y = 1;
  let res = 0;
  if(n<=2){
    return 1;
  }
  for(let i = 0;i<n-2;i++){
    res=x+y;
    x=y;
    y=res;
  }
  return res;
}
function fibMassive(n){//Масив
   let fib = [1,1];
   for(let i = 2;i<n;i++){
     fib[i]=fib[i-1]+fib[i-2];
   }
   return fib[n-1];
}

document.write("<p>Recursive "+fibRecursive(x)+"</p>");
document.write("<p>Cycle "+fibCycle(x)+"</p>");
document.write("<p>Massive "+fibMassive(x)+"</p>");