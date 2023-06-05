import Bucket from "../bucket";
    import { useState } from "react";
const PassProduct =()=>{

    const [name, setName] = useState("Krunch Burger");
    const [price, stPric] = useState('Rs 250');
    const [Description, setDes] = useState("Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun");
    const [image, setImage] = useState("Images/top1.jpg");

return(
<div >
 <Bucket
 name={name}
 price={price}
 Description={Description}
 image={image}
 />
</div>
);
}
export default PassProduct;