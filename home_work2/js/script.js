/* задача 1 */
function degreeNumber(a,b){
   if(b==0) return 1;
   while(b>0){
      return a*degreeNumber(a,--b);
   }
}
console.log(degreeNumber(2,4));
console.log(degreeNumber(5,7));
console.log("-----------");

/* задача 2 */
function Nod(a,b){
   if (b%a==0) return a;
   return Nod(b%a,a);
}
console.log(Nod(15,56));
console.log(Nod(24,60));
console.log("-----------");

/* задача 3 */
function maxInNumber(a,max=0){
   if(max==0) max=a%10;
   if (max<a%10) max=a%10;
   if (a>10) return maxInNumber(parseInt(a/10),max);
   return max;
}
console.log(maxInNumber(500834));
console.log(maxInNumber(1673));
console.log("-----------");

/* задача 4 */
function numberIsSimple(a,divider=null){
   if(divider==null) divider=a-1;
   if(divider>=2){
      if(a%divider==0) return false;
      else return numberIsSimple(a,--divider);
   }
   else return true;
}
console.log(numberIsSimple(13));
console.log(numberIsSimple(25));
console.log(numberIsSimple(619));
console.log(numberIsSimple(810));
console.log("-----------");

/* задача 5 */
function NumberMultipliers(a,b=2,array=[]){
   if(b>Math.sqrt(a)){
      array.push(b);
      return a;
   }
   if (a%b==0) {
      array.push(b);
      NumberMultipliers(a/b,b,array);
   }
   else NumberMultipliers(a,++b,array);
   return array;
}
console.log(NumberMultipliers(18));
console.log("-----------");

/* задача 6 */
function findByIndexFibonacci(i){
   if(i==1) return 1;
   if(i==2) return 1;
   return findByIndexFibonacci(i-1)+findByIndexFibonacci(i-2);
}
console.log(findByIndexFibonacci(3));
console.log(findByIndexFibonacci(6));