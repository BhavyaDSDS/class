sum=0
//temp=n
//console.log("sum1",sum)
function Armstrongnumber(n)
{
    sum=0;
    console.log("sum1",sum)
    temp=n;    
    while(n>0)    
    {   
       // console.log("sum",sum) 
     r=n%10;    
     sum=sum+(r*r*r);    
     n=n/10;    
    }   
   // console.log("sum",sum) 
    if(temp==sum)    
    console.log("Number is Armstrong number")
    else
    console.log("Number is not Armstrong number")
}
Armstrongnumber(370)