palindrome(121)
let m=n
let sum=0
function palindrome(n){
    
    if(n>0){
    let lastDigit=n%10;
     let digit=lastDigit*10
    sum+=digit;
    sum==m?"is palindrome":"not palindrome"
    return palindrome(lastDigit)
    }

}
   
       
        
    


