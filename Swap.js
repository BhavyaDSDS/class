function swap(a,b)
{
    console.log("Before swapping",a,b)
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("After Swapping",a,b);

}
swap(2,3)