//var a=[];
function Hexadecimal(n){
    var a=[];
    for(i=0;i<8;i++)
    {
        //if((n>>i)&&0x01==0x01)
     if(((n>>i)&& 0x01)==0x01){
a.push(1);
    }
    else{
        a.push(0);
    }


}
console.log(a)

}
Hexadecimal(66)