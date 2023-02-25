// Blog Button work start
const Blog_Button=document.getElementById('blog_id');
Blog_Button.addEventListener('click',function(){
    window.location.href='Answer.html';
});
// Blog Button work end


///Triangle
const Triangle_Input_1=document.getElementById('triangle_input1_id');
const Triangle_Input_2=document.getElementById('triangle_input2_id');
const Triangle_Calculation_Button=document.getElementById('triangle_calculation_id');

////Rectangle
const Rectangle_Input_1=document.getElementById('rectangle_input1_id');
const Rectangle_Input_2=document.getElementById('rectangle_input2_id');
const Rectangle_Calculation_Button=document.getElementById('rectangle_calculation_id');

///Parallelogram
const Parallelogram_Input_1=document.getElementById('parallelogram_input1_id');
const Parallelogram_Input_2=document.getElementById('parallelogram_input2_id');
const Parallelogram_Calculation_Button=document.getElementById('parallelogram_calculation_id');

///Rhombus
const Rhombus_Input_1=document.getElementById('rhombus_input1_id');
const Rhombus_Input_2=document.getElementById('rhombus_input2_id');
const Rhombus_Calculation_button=document.getElementById('rhombus_calculation_id');

///Pentagon
const Pentagon_Input_1=document.getElementById('pentagon_input1_id');
const Pentagon_Input_2=document.getElementById('pentagon_input2_id');
const Pentagon_Calculation_Button=document.getElementById('pentagon_clculation_id');

////Ellipse
const Ellipse_Input_1=document.getElementById('ellipse_input1_id');
const Ellipse_Input_2=document.getElementById('ellipse_input2_id');
const Ellipse_Calculation_Button=document.getElementById('ellipse_claculation_id');

const Result_Box=document.getElementById('result_box_id');
const Result_Area=document.getElementById('resut_area_id');

// function check_Number_Value_Of_First_InputBox(Input){
   
//     if(isNaN(Input)){
//         return "Give Number value";
//     }else{
//         return Input;
//     }
// }

// function check_Number_Value_Of_Second_InputBox(Input){
//     if(isNaN(Input)){
//         return "Give a Number Value";
//     }else{
//         return Input;;
//     }
// }



////Generated Function start

function CheckWhitespace_ForFirstInput(Input){
    const InputString=Input.value;
    if(InputString===''){
        alert("Give a Value for First Input box");
    }else{
        return InputString;
    }
}
function CheckWhitespace_ForSocondInput(Input){
    const InputString=Input.value;
    if(InputString===''){
        alert("Give a Value for second Input box");
    }else{
        return InputString;
    }
}


function CheckNumber_ForFirstInput(Input){
   const InputString=CheckWhitespace_ForFirstInput(Input);
   const InputValue=parseFloat(InputString);
   if(InputValue<0){
     alert("give Positive Number in First Input");
   }else{
     return InputValue;
   }
}
function CheckNumber_ForSecondInput(Input){
   const InputString=CheckWhitespace_ForSocondInput(Input);
   const InputValue=parseFloat(InputString);
   if(InputValue<0){
     alert("give Positive Number in  Second Input");
   }else{
     return InputValue;
   }
}

///Generated Function end



//Triangle work start
Triangle_Calculation_Button.addEventListener('click',function(){
    console.log("Triangle Button");

    const Input1=CheckNumber_ForFirstInput(Triangle_Input_1);
    const Input2=CheckNumber_ForSecondInput(Triangle_Input_2);
    const Area=(0.5*Input1*Input2).toFixed(2);
    if(isNaN(Area)){
        console.log("Something Going Wrong");
    }else{
        console.log("Triangle: "+Area);
        const li=document.createElement('li');
        const AreaSpan=document.createElement('span');
        const CMSpan=document.createElement('span');
        const Button=document.createElement('button');
        const DeleteButton=document.createElement('button');

        li.innerHTML="Triangle  ";
        li.classList.add("my-3");

        AreaSpan.innerText=Area;
        CMSpan.innerHTML="cm<sup>2</sup>";
        CMSpan.classList.add("mx-2")

        Button.innerHTML="Convert to m<sup>2</sup>"
    //    DeleteButton.innerText="Delete";

        Button.classList.add("btn");
        Button.classList.add("btn-primary");
        Button.classList.add("covert_btn");

        DeleteButton.classList.add("btn");
        DeleteButton.classList.add("btn-danger");
        DeleteButton.classList.add("mx-2");

        DeleteButton.classList.add("bi");
        DeleteButton.classList.add("bi-scissors");

        li.appendChild(AreaSpan);
        li.appendChild(CMSpan);
        li.appendChild(Button);
        li.appendChild(DeleteButton);
        Result_Box.appendChild(li);

        Button.addEventListener('click',function(event){
            alert("Triangle Area : "+(Area/100)+" meter");
            
        });

        DeleteButton.addEventListener('click',function(){
            event.target.parentNode.parentNode.removeChild(event.target.parentNode)
        })
    }
   
});
//Triangle work end


//Rectangle work start
Rectangle_Calculation_Button.addEventListener('click',function(){
    console.log("Rectangle Button");

    const Input1=CheckNumber_ForFirstInput(Rectangle_Input_1);
    const Input2=CheckNumber_ForSecondInput(Rectangle_Input_2);
    const Area=(Input1*Input2).toFixed(2);
    if(isNaN(Area)){
        console.log("Something Going Wrong");
    }else{
        console.log("Rectangle: "+Area);
        const li=document.createElement('li');
        const AreaSpan=document.createElement('span');
        const CMSpan=document.createElement('span');
        const Button=document.createElement('button');
        const DeleteButton=document.createElement('button');

        li.innerHTML="Rectangle  ";
        li.classList.add("my-3");

        AreaSpan.innerText=Area;
        CMSpan.innerHTML="cm<sup>2</sup>";
        CMSpan.classList.add("mx-2")

        Button.innerHTML="Convert to m<sup>2</sup>"
     //   DeleteButton.innerText="Delete";

        Button.classList.add("btn");
        Button.classList.add("btn-primary");
        Button.classList.add("covert_btn");

        DeleteButton.classList.add("btn");
        DeleteButton.classList.add("btn-danger");
        DeleteButton.classList.add("mx-2");

        DeleteButton.classList.add("bi");
        DeleteButton.classList.add("bi-scissors");

        li.appendChild(AreaSpan);
        li.appendChild(CMSpan);
        li.appendChild(Button);
        li.appendChild(DeleteButton);
        Result_Box.appendChild(li);

        Button.addEventListener('click',function(event){
            alert("Rectangle Area: "+(Area/100)+" meter");
            
        });

        DeleteButton.addEventListener('click',function(){
            event.target.parentNode.parentNode.removeChild(event.target.parentNode)
        })
    }
});
//Rectangle work end


//Parallelogram work start
Parallelogram_Calculation_Button.addEventListener('click',function(){
    console.log("Parallelogram button");

    const Input1=CheckNumber_ForFirstInput(Parallelogram_Input_1);
    const Input2=CheckNumber_ForSecondInput(Parallelogram_Input_2);
    const Area=(Input1*Input2).toFixed(2);
    if(isNaN(Area)){
        console.log("Something Going Wrong");
    }else{
        console.log("Parallelogram: "+Area);

        const li=document.createElement('li');
        const AreaSpan=document.createElement('span');
        const CMSpan=document.createElement('span');
        const Button=document.createElement('button');
        const DeleteButton=document.createElement('button');

        li.innerHTML="Parallelogram  ";
        li.classList.add("my-3");

        AreaSpan.innerText=Area;
        CMSpan.innerHTML="cm<sup>2</sup>";
        CMSpan.classList.add("mx-2")

        Button.innerHTML="Convert to m<sup>2</sup>"
       // DeleteButton.innerText="Delete";

        Button.classList.add("btn");
        Button.classList.add("btn-primary");
        Button.classList.add("covert_btn");

        DeleteButton.classList.add("btn");
        DeleteButton.classList.add("btn-danger");
        DeleteButton.classList.add("mx-2");

        DeleteButton.classList.add("bi");
        DeleteButton.classList.add("bi-scissors");

        li.appendChild(AreaSpan);
        li.appendChild(CMSpan);
        li.appendChild(Button);
        li.appendChild(DeleteButton);
        Result_Box.appendChild(li);

        Button.addEventListener('click',function(event){
            alert("Parallelogram: "+(Area/100)+" meter");
            
        });

        DeleteButton.addEventListener('click',function(){
            event.target.parentNode.parentNode.removeChild(event.target.parentNode)
        })
    }
});
//Parallelogram work end


//Rhombus work start
Rhombus_Calculation_button.addEventListener('click',function(){
    console.log("Rhombus button");

    const Input1=CheckNumber_ForFirstInput(Rhombus_Input_1);
    const Input2=CheckNumber_ForSecondInput(Rhombus_Input_2);
    const Area=(0.5*Input1*Input2).toFixed(2);
    if(isNaN(Area)){
        console.log("Something Going Wrong");
    }else{
        console.log("Rhombus: "+Area);

        const li=document.createElement('li');
        const AreaSpan=document.createElement('span');
        const CMSpan=document.createElement('span');
        const Button=document.createElement('button');
        const DeleteButton=document.createElement('button');

        li.innerHTML="Rhombus  ";
        li.classList.add("my-3");

        AreaSpan.innerText=Area;
        CMSpan.innerHTML="cm<sup>2</sup>";
        CMSpan.classList.add("mx-2")

        Button.innerHTML="Convert to m<sup>2</sup>"
       // DeleteButton.innerText="Delete";

        Button.classList.add("btn");
        Button.classList.add("btn-primary");
        Button.classList.add("covert_btn");

        DeleteButton.classList.add("btn");
        DeleteButton.classList.add("btn-danger");
        DeleteButton.classList.add("mx-2");

        DeleteButton.classList.add("bi");
        DeleteButton.classList.add("bi-scissors");

        li.appendChild(AreaSpan);
        li.appendChild(CMSpan);
        li.appendChild(Button);
        li.appendChild(DeleteButton);
        Result_Box.appendChild(li);

        Button.addEventListener('click',function(event){
            alert("Rhombus Area: "+(Area/100)+" meter");
            
        });

        DeleteButton.addEventListener('click',function(){
            event.target.parentNode.parentNode.removeChild(event.target.parentNode)
        })
    }
});
//Rhombus work end

///Pentagon Work start
Pentagon_Calculation_Button.addEventListener('click',function(){
    console.log("Pentagon button");

    const Input1=CheckNumber_ForFirstInput(Pentagon_Input_1);
    const Input2=CheckNumber_ForSecondInput(Pentagon_Input_2);
    const Area=(0.5*Input1*Input2).toFixed(2);
    if(isNaN(Area)){
        console.log("Something Going Wrong");
    }else{
        console.log("Pentagon: "+Area);

        const li=document.createElement('li');
        const AreaSpan=document.createElement('span');
        const CMSpan=document.createElement('span');
        const Button=document.createElement('button');
        const DeleteButton=document.createElement('button');

        li.innerHTML="Pentagon  ";
        li.classList.add("my-3");

        AreaSpan.innerText=Area;
        CMSpan.innerHTML="cm<sup>2</sup>";
        CMSpan.classList.add("mx-2")

        Button.innerHTML="Convert to m<sup>2</sup>"
       // DeleteButton.innerText="Delete";

        Button.classList.add("btn");
        Button.classList.add("btn-primary");
        Button.classList.add("covert_btn");

        DeleteButton.classList.add("btn");
        DeleteButton.classList.add("btn-danger");
        DeleteButton.classList.add("mx-2");

        DeleteButton.classList.add("bi");
        DeleteButton.classList.add("bi-scissors");

        li.appendChild(AreaSpan);
        li.appendChild(CMSpan);
        li.appendChild(Button);
        li.appendChild(DeleteButton);
        Result_Box.appendChild(li);

        Button.addEventListener('click',function(event){
            alert("Pentagon Area: "+(Area/100)+" meter");
            
        });

        DeleteButton.addEventListener('click',function(){
            event.target.parentNode.parentNode.removeChild(event.target.parentNode)
        })
    }
})
///Pentagon work end


////Ellipse work start
Ellipse_Calculation_Button.addEventListener('click',function(){
    console.log("Ellipse Button");

    const Input1=CheckNumber_ForFirstInput(Ellipse_Input_1);
    const Input2=CheckNumber_ForSecondInput(Ellipse_Input_2);
    const Area=(3.1416*Input1*Input2).toFixed(2);
   // Area=Area.toFixed(2);
    if(isNaN(Area)){
        console.log("Something Going Wrong");
    }else{
        console.log("Ellipse: "+Area);

        const li=document.createElement('li');
        const AreaSpan=document.createElement('span');
        const CMSpan=document.createElement('span');
        const Button=document.createElement('button');
        const DeleteButton=document.createElement('button');

        li.innerHTML="Ellipse  ";
        li.classList.add("my-3");

        AreaSpan.innerText=Area;
        CMSpan.innerHTML="cm<sup>2</sup>";
        CMSpan.classList.add("mx-2")

        Button.innerHTML="Convert to m<sup>2</sup>"
        // DeleteButton.innerText="Delete";

        Button.classList.add("btn");
        Button.classList.add("btn-primary");
        Button.classList.add("covert_btn");

        DeleteButton.classList.add("btn");
        DeleteButton.classList.add("btn-danger");
        DeleteButton.classList.add("mx-2");

        DeleteButton.classList.add("bi");
        DeleteButton.classList.add("bi-scissors");

        li.appendChild(AreaSpan);
        li.appendChild(CMSpan);
        li.appendChild(Button);
        li.appendChild(DeleteButton);
        Result_Box.appendChild(li);

        Button.addEventListener('click',function(event){
            alert("Ellipse: "+(Area/100)+" meter");
            
        });

        DeleteButton.addEventListener('click',function(){
            event.target.parentNode.parentNode.removeChild(event.target.parentNode)
        })
    }
});
////Ellipse work end

///Random Background Color start
const Card1=document.getElementById('card1id');
const Card2=document.getElementById('card2id');
const Card3=document.getElementById('card3id');
const Card4=document.getElementById('card4id');
const Card5=document.getElementById('card5id');
const Card6=document.getElementById('card6id');
function RandomColor(Item){
    Item.style.backgroundColor='rgb('+Math.round(Math.random()*255)+
    ','+ Math.round(Math.random()*255)+
    ','+Math.round(Math.random()*255) + ')';
}
Card1.addEventListener('mouseenter',function(){
    RandomColor(Card1);
})
Card2.addEventListener('mouseenter',function(){
    RandomColor(Card2);
})
Card3.addEventListener('mouseenter',function(){
    RandomColor(Card3);
})
Card4.addEventListener('mouseenter',function(){
    RandomColor(Card4);
})
Card5.addEventListener('mouseenter',function(){
    RandomColor(Card5);
})
Card6.addEventListener('mouseenter',function(){
    RandomColor(Card6);
})
///Random Background Color end


/////Area Calculation start
// const Rect_Area_Value=document.getElementById('rect_area_id');
// let a=document.getElementById('rect_area_btn_id');
// Rect_Area_Value.addEventListener('click',function(){

// })

////For delete Start
// Result_Box.addEventListener('click',function(event){
//     alert("I could not convert But I succeed to remove this child node");
//     const Value=event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    
// });
///For delete end

//This is not right way
// Result_Box.addEventListener('click',function(event){
//     const Value=event.target.parentNode.childNode.classList;
//    // const Value=document.getElementById('rect_area_id').innerText;
//     console.log(Value);
//     alert(Value);
// });

