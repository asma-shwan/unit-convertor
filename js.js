let inpel=document.getElementById("inp")
let convertel=document.getElementById("convert")
let check1=document.getElementById("check1")
let check2=document.getElementById("check2")
let check3=document.getElementById("check3")
let check4=document.getElementById("2check1")
let check5=document.getElementById("2check2")
let check6=document.getElementById("2check3")
let tempel=document.getElementById("template")
function convert2(){
   if( !check1.checked &&
      !check2.checked &&
      !check3.checked 
   ){
      tempel.innerHTML="please select one of unit"
   }else{
      tempel.innerHTML=""
   }
   let x=inpel.value
    if(check1.checked==true && check4.checked==true){
        tempel.innerHTML+="<p>"+x+" m"+"</p>"

            }
            if(check1.checked==true && check5.checked==true){
             
               
               
                tempel.innerHTML+="<p>"+x*100+"  cm"+"</p>"
        
             }
            if(check1.checked==true && check6.checked==true){
               
                        
                        
                tempel.innerHTML+="<p>"+x*1000+"  mm"+"</p>"
                 
             }
            if(check2.checked==true && check4.checked==true){
          
                                        
                                        
                tempel.innerHTML+="<p>"+x/100+"  m"+"</p>"
                                 
             }
             if(check2.checked==true && check5.checked==true){
            
                        
                        
                tempel.innerHTML+="<p>"+x+"  cm"+"</p>"
                 
             }
             if(check2.checked==true && check6.checked==true){
        
   
                        
                tempel.innerHTML+="<p>"+x*10+"  mm"+"</p>"
                 
             }
             if(check3.checked==true && check4.checked==true){
               
                        
                        
                tempel.innerHTML+="<p>"+x/1000+"  m"+"</p>"
                 
                             }
             if(check3.checked==true && check5.checked==true){
             
                                        
                                        
                tempel.innerHTML+="<p>"+x/10+"  cm"+"</p>"
                                 
                                             }

            if(check3.checked==true && check6.checked==true){
         
                                                        
                                                        
                tempel.innerHTML+="<p>"+x+"  mm"+"</p>"
                                                 
                                                             }
        }
    

