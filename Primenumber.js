count=0
function prime(n)
{
    for(i=2;i<=n;i++)
    {
     if(n%i==0)
     {
        count++;
     }
    }
    if(count==1)
    console.log("Prime number")
    else
    console.log("Not a prime number")
}
prime(15); 