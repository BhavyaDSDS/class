sum=0;
function Palindromenumber(n)
{
    while(n>0)
    {
        r=n%10;
        sum=sum*10+r;
        n=n%10;
    }
    if(sum==n)
    console.log("Number is Palindrome number")
    else
    elseconsole.log("Not a Palindrome Number")
}
Palindromenumber(232)