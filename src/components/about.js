import React from "react"
export default function About(props){
    let style={
        color:"black",
        backgroundColor :"white"
    }
    let styleInternal={
        color:"black",
        backgroundColor :"white",
        border :"1px solid black"
    }
    if(props.mode==="dark"){
        style={
            color :"white",
            backgroundColor :"#041C32",
            border :"1px solid white"
        }
        styleInternal={
            color:"white",
            backgroundColor :"#30475E"
        }
    }
      return(
          <div className="container my-3">
          {/* <h3>About us</h3> */}
          <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       <h6> Effective use of this website</h6>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={styleInternal}>This website can be use to edit text. <br/>Entered text can be converted to uppercase, lowercase and titlecase. <br />
      text can be copied to clipboard after converting it to other form.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          <h6>Technologies Used</h6>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={styleInternal}>
          This is created using Html,Css,Bootstrap and Reactjs. <br />This a single page application which is updated without reloading the page.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={style}>
       <h6>Special features</h6> 
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={styleInternal}>
          This website consists of dark mode feature which is just one click away from the user.<br/>
          On copying the message an alert message will be shown.
      </div>
    </div>
  </div>
</div>
</div>
      )
}