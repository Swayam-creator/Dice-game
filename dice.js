const gamestart=()=>{
    setTimeout(function(){

  
    let randomNumber1=Math.floor(Math.random()*6)+1
    let randomImage1="./images/dice" + randomNumber1 +".png";
    let image=document.querySelectorAll("img")[0];
    image.setAttribute('src',randomImage1);
    
    
    
    let randomNumber2=Math.floor(Math.random()*6)+1;
    let randomImage2="./images/dice" +randomNumber2+".png";
    document.querySelectorAll("img")[1].setAttribute('src',randomImage2);
    
    if(randomNumber1===randomNumber2){
        document.getElementById('name').innerHTML="Draw!!";
    }
    else if(randomNumber1>randomNumber2){
        document.getElementById('name').innerHTML="Player 1 wins!!";
    }
    else{
        document.getElementById('name').innerHTML="Player2 wins!!";
    }
},1500);
}
