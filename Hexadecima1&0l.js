//var a=[];
function Hexadecimal(n){
    var a=[];
    for(i=0;i<8;i++)
    {
        //if((n>>i)&&0x01==0x01)
     if(((n>>i)&& 0x01)==0x01){
a.unshift(1);
    }
    else{
        a.unshift(0);
    }


}
console.log(a)

}
Hexadecimal(02)