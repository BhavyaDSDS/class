function fun1(a,b){
    if(a<b)
    {
        console.log(a+b);
    }
    else {
        temp=a%100;
        if(temp<50)
        {
            console.log((a-temp)+b);
        }
        else{
            console.log((a+(100-temp))+b);
        }
    }
}
fun1(199,1000)