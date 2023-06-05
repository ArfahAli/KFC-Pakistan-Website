import { useState } from "react";
const Bucket =({image,Description,price,name})=>{
return(
<div class="sub-container2">
<div class="row">

    
    <div class="col-2">
        <h1>{name}</h1>
        <p>{Description}</p>
        <h2>{price}</h2>
        <div className="quantity2">
            <div class="quantity">
                <button >-</button>
                <span> 1</span>
                <button >+</button>
                <button class="btn2" >Add to Bucket</button>
            </div>
        </div><br />
    </div>
</div>
</div>
);
}
export default Bucket;