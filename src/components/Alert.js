import React from "react"
 function Alert(props){
  // console.log(props.alertType);
     let st=String(props.alertType)
     const s=st.charAt(0).toUpperCase()+st.slice(1)
     let message=props.alertType==='success'?'text has been sucessfully copied' :"sorry unable to copy";
   //   console.log(props.alertType,message)
    return(
       props.alertType &&  <div className={`alert alert-${props.alertType} fade show`}>
            <strong>{s}!</strong> {message}
            {/* <button type="button"  data-bs-dismiss="alert"></button> */}
          </div>
        
    )}
export default Alert