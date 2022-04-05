// level 2


function Printfibboseries(n){
    let x1=0;
    let x2=1
    var output="1"+" "
    var sum=1;

    for(i=1;i<n;i++){
        var nextTerm=x1+x2;
        x1=x2;
        x2=nextTerm;
        output+=nextTerm+" "
        sum+=nextTerm
            

    }
    console.log(output)
    console.log(sum)
}
Printfibboseries(6)