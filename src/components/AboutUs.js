import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function AboutUs() {

    const [mystyle,setStyle]=useState({
        color:'black',
        backgroundColor:"white",
        borderColor:"black"
    })

    const [btnText,setBtnText]=useState('Enable Dark Mode');

    const handleClick=()=>{
        if(mystyle.color=="black")
        {
        setStyle({
            color:"white",
            backgroundColor:"black",
            borderColor:"white"
        })
        setBtnText('Enable Light Mode');
    }
    else{
        setStyle({
            color:"black",
            backgroundColor:"white",
            borderColor:"black"
        })
        setBtnText('Enable Dark Mode');
    }
    }

    return (
     <div className="container my-3" style={mystyle}>
         <h1>About US</h1>
            <div class="accordion" id="accordionExample" >
         <div class="accordion-item" style={mystyle}>
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
            <div class="accordion-body" style={mystyle}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
         </div>
         <div class="accordion-item" style={mystyle}>
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
         </div>
         <div class="accordion-item" style={mystyle}>
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
         </div>
        </div>
        <button className="btn btn-primary my-2" onClick={handleClick}>{btnText}</button>
    </div>
    )
}
