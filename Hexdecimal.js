var count1=0,count2=0;
function Hexadecimal(n){
for(i=0;i<8;i++){
if(((n>>i)&& 0x01)==0x01){
count1++;
}
else
{
    count2++;
}
}
console.log("1 is",count1)
console.log("0 is",count2)
}
Hexadecimal(32);