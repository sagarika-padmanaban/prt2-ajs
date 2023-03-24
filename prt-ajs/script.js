let english = document.getElementById('eng');
let maths = document.getElementById('mat');
let physics = document.getElementById('phy');
let chemistry = document.getElementById('chem');
let comp = document.getElementById('com');
// let engval = english.value
// let matval = maths.value
// let phyval = physics.value
// let chemval = chemistry.value
// let comval = comp.value
function calculate(){
    if((english.value>100 || english.value<=0 )){
        alert("Please enter the mark in range of 100")
    }
    else if((maths.value>100 || maths.value<=0 )){
        alert("Please enter the mark in range of 100")
    }
    else if((physics.value>100 || physics.value<=0 )){
        alert("Please enter the mark in range of 100")
    }
    else if((chemistry.value>100 || chemistry.value<=0 )){
        alert("Please enter the mark in range of 100")
    }
    else if((comp.value>100 || comp.value<=0 )){
        alert("Please enter the mark in range of 100")
    }
    else{
       let totalmarks = parseInt(english.value)+parseInt(maths.value)+parseInt(physics.value)+parseInt(chemistry.value)+parseInt(comp.value);
       document.getElementById('total').innerHTML=totalmarks;
       let average = parseInt(totalmarks/5)
       document.getElementById('average').innerHTML=average;
       if((english.value<35)||(maths.value<35)||(physics.value<35)||(chemistry.value<35)||(comp.value<35)){
        document.getElementById('grade').innerHTML=`You got F grade`;
       }
       else{
        if(average>=90){
            document.getElementById('grade').innerHTML=`You got A grade`;
        }
        else if(average>=90 || average<=89){
            document.getElementById('grade').innerHTML=`You got B grade`;
        }
        else if(average>=70 || average<=79){
            document.getElementById('grade').innerHTML=`You got C grade`;
        }
        else if(average>=60 || average<=69){
            document.getElementById('grade').innerHTML=`You got D grade`;
        }
        else if(average<60){
            document.getElementById('grade').innerHTML=`You got F grade`;
        }

      } 
    }
}