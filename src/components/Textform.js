import React,{useState} from "react"
export default function Textform(props){
  const [text,setvalue]=useState('');
  const style={
    color : props.mode==="light"?"black" :"white"
 }
   const textBoxStyle={
    color : props.mode==="light"?"black" :"white",
    backgroundColor:props.mode==="light"?"white" :"#041C32"
   }
   function copy()
   { 
     try{
     navigator.clipboard.writeText(text);
     props.alert(`success`,'text has successfully copied');
     }
     catch{
      props.alert(`danger`,`text not copied`);
     }
   }
  function upClick()
   {
    //  console.log("upper case is clicked");
    //  console.log(text);
     setvalue(text.toUpperCase());
    }
   function lowClick()
   {  
    //  console.log("lowClick is clicked")    
     setvalue(text.toLowerCase());
   }
   function titleClick()
   { 
     try{
     let s=text.split(' ');
     for(let i=0;i<s.length;i++)
     {
       let firstChar=s[i].charAt(0).toUpperCase();
       let remainingChar=s[i].slice(1,s[i].length);
       s[i]=firstChar+remainingChar;
     }
     const final=s.join(' ');
    //  console.log(final)
     setvalue(final);
    }
    catch{
      console.log("no any space");
    }
   }
   function textBox(event){
     console.log("onChange event is fired");
     setvalue(event.target.value)
    //  console.log(wordLength.length,text.length
   }
  
    return(
  <div>
<div className="mb-3 my-3">
  <h3 style={style}>{props.heading}</h3>
  <textarea className="form-control" id="exampleFormControlTextarea1 mybox" placeholder="your text here" rows="8" value={text} style={textBoxStyle} onChange={textBox}></textarea>
  <button className="btn btn-primary my-3 mx-3" onClick={upClick} >Uppercase</button>
  <button className="btn btn-info my-3 mx-3" onClick={lowClick}>Lowercase</button>
  <button className="btn btn-success my-3 mx-3" onClick={titleClick}>Titlecase</button>
  <button type="button" className="btn btn-outline-primary mx-3" onClick={copy}>copy</button>
  <h5 style ={style} className="mx-3">Words : {text.length===0 ? 0: text.split(' ').length}</h5>
  <h5 className="mx-3" style={style}>Letters : {text.length}</h5>
</div>
  </div>
    )
}