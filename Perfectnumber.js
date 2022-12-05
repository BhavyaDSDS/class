sum=0;
function Perfect(n)
{
    for(i=1;i<n;i++)
    {
        if(n%i==0)
        sum=sum+i;
    }
    if(sum==n)
    console.log("Perfect number")
    else
    console.log("Not a Perfect number")
}
Perfect(28)