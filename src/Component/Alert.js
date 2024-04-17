import React from 'react'

function Alert(props) {
  return (                               
    props.alert && <div>   {/*If alert object is not null then only div will be displayed */}
    {/*<div class={`alert alert-warning alert-dismissible fade show`} role="alert">      alert color will be yellow*/}
    <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">  {/*alert color will be green. for this success spelling should be like that only*/}
  <strong>{props.alert.type}</strong> : {props.alert.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}

export default Alert
