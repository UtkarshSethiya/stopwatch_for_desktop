let min=document.getElementById("min");
let sec=document.getElementById("sec");
let milisec=document.getElementById("milisec");
let start=document.getElementById("start");
let reset=document.getElementById("reset");
let pause=document.getElementById("stop");
let teamp=false;
var sec1=sec;
var min1=min;


min=0;
sec=0;
milisec=0;
pause.remove();

function stopwatch(){
 
 if(teamp==true){
  if(milisec!=99 ) {
    milisec= milisec + 1 ;
    document.getElementById("milisec").innerHTML=milisec;
   

    setTimeout("stopwatch()",9.9);
     
  }
 else if(sec==59 && milisec==99){
    sec=0;
    min=min+1;
    milisec=0;
    if(min<10){
      let min1="0"+min.toString();
      document.getElementById("min").innerHTML=min1;
  
    }
    else{
      document.getElementById("min").innerHTML=min;
    
    }
   
    document.getElementById("sec").innerHTML=sec;
    
     document.getElementById("milisec").innerHTML=milisec;
     stopwatch();
  }
 else if(milisec==99 ){
  sec=sec+1;
 if(sec<10){
  let sec1= "0" + sec.toString();
  
    document.getElementById("sec").innerHTML=sec1;
    
}
else{
  document.getElementById("sec").innerHTML=sec;
}
milisec=0;
stopwatch(); 
}

 }
 

}

function pauseit(){
  
  if(sec<10){
    let sec1= "0" + sec.toString();
    
      document.getElementById("sec").innerHTML=sec1;
      
  }
  else{
    document.getElementById("sec").innerHTML=sec;
  }
  
  document.getElementById("milisec").innerHTML=milisec;
  
  if(min<10){
    let min1="0"+min.toString();
    document.getElementById("min").innerHTML=min1;

  }
  else{
    document.getElementById("min").innerHTML=min;
  
  }
}
function resetit(){
  sec="0"+sec.toString();
  min="0"+min.toString();
  milisec="0"+milisec.toString();
  document.getElementById("sec").innerHTML=sec;
  
  document.getElementById("milisec").innerHTML=milisec;
  
  document.getElementById("min").innerHTML=min;
}


start.addEventListener("click",function(){
  teamp=true;
start.replaceWith(pause);


stopwatch();

 })

 pause.addEventListener("click",function(){
   teamp=false
 pause.replaceWith(start);
 pauseit();
 

 })

 reset.addEventListener("click",function(){
location.reload();

 })



/* else{
    sec=0;
    document.getElementById("sec").innerHTML=sec;
    min=0;
    document.getElementById("min").innerHTML=min;
    milisec=0;
    document.getElementById("milisec").innerHTML=milisec;
  }*/
