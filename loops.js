function demo(a,b){
    console.log(a+b);
}
demo(23,45)





x=(a,b)=>{ return (a+b)}
console.log(x(23,45))





y = function(a,b){
    return a+b
}
console.log(y(23,45))





function table(x){
    for(let i=1;i<=10;i++){
        console.log(`${x}X${i}=${x*i}`);
    }
}
table(3); 





a=(x)=>{
    for(i=1;i<=10;i++){
        console.log(x*i);
    }
}
a(3)





a=()=>{
    let x="HTML "
    let y="CSS "
    let z="Javascript"
    return x+y+z;
}
console.log(a())





function fizz(x, y){
    for(i=x;i<=y;i++){
        if(i%2==0 && i%3==0){
            console.log(i,"fizzbuzz");
        }
        else if(i%2==0){
            console.log(i, "fizz");
        }else if(i%3==0){
            console.log(i,"buzz");
        }
        // console.log(i);
    }
}
fizz(20,40) 





b=()=>{
    for(i=0;i<=20;i++){
        if(i%2==0 && i%3==0){
            console.log(i,"fizzbuzz");
        }
        else if(i%2==0){
            console.log(i,"fizz")
        }
        else if(i%3==0){
            console.log(i,"buzz")
        }
    }
}
b()





c=()=>{
    let str="JAVASCRIPT"
    for(i=0;i<=str.length-1;i++){
        console.log(str[i]);
    }
    return "reverse order"
}
c()





c=function(){
    let str="JAVASCRIPT"
    for(i=str.length-1;i>=0;i--){
        console.log(str[i]);
    }
}
c()