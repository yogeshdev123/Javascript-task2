        //Write a program to print the non fib numbers and nth non-fib number by using while loop
        
        var i=0;
        var j=1;
        var str="";
        var val=0;
        var inp=+prompt("Enter a number to print Non-fibbonaci:  ");
        while(inp>0){
            str=det(i,j,str);
            let temp=j;
            j=i+j;
            i=temp;
        
            
        }
        function det(i,j,str){
            for(let k=i+1;k<j;k++){
                str+=" "+k;
                val=k;
                inp--;
                if(inp==0)break;
            }
            return str;
        }
        alert(`Non-fibbonaci numbers within ${inp} are ${str} and the ${inp} th number is ${val}`);
        
        // WAP to print the below series based on the input

var j=1;
var str="";
var kin=+prompt("Enter the Number: ");
i=0
bool=true;
while(bool){
    str=func(i,j,str);
    
    let temp=j;
    j=i+j;
    i=temp;
}
console.log(str);
function func(i,j,str){
    for(let k=i+1;k<j;k++){
        if(k>kin){
            bool=false;
            break;
        }
        str+=k+" ";
    }
    return str;
}
alert(`Non-fibbonaci numbers within ${kin} are ${str} `);