import Bucket from "../bucket";
import Details from "./ProductDetails";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../ContextFile";
const Product =()=>{
    
  
   
    // const [Buttons, setButtons] = useState([
    //     { Name: "Everyday Value" },
    //     { Name: "Ala Carte & Combos" },
    //     { Name: "Signature Boxes " },
    //     { Name: "Sharing" },
    //     { Name: "Snacks & Beverages" },
    //     { Name: "Midnight" },
    // ]);


    // const [TopSelling, setTopSelling] = useState([
    //     {
            
    //         image: "Images/top1.jpg",
    //         name: 'Krunch Burger',
    //         price: 'Rs 250',
    //         Description: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
    //     },])

    // const [selectedDrink, setSelectedDrink] = useState("");

    // const drinkOptions = [
    //     {
    //         image: "Images/cola.png",
    //         name: "Pepsi Regular",
    //         value: "cola",
    //     },
    //     {
    //         image: "Images/7up.jpg",
    //         name: "7UP Regular",
    //         value: "sprite",
    //     },
    //     {
    //         image: "Images/marinda.jpg",
    //         name: "Mirinda Regular",
    //         value: "fanta",
    //     },
    //     {
    //         image: "Images/dew.jpg",
    //         name: "Mountain Dew Regular",
    //         value: "dew",
    //     },
    // ];

    // const handleDrinkChange = (e) => {
    //     setSelectedDrink(e.target.value);
    // };

    //     const [quantity, setQuantity] = useState(1);
    
    //     const handleIncreaseQuantity = () => {
    //         setQuantity(quantity + 1);
    //     };
    
    //     const handleDecreaseQuantity = () => {
    //         if (quantity > 1) {
    //             setQuantity(quantity - 1);
    //         }
    //     };
    
    //     const handleAddToBucket = () => {
    //         const item = {
    //             name: "Krunch Burger",
    //             description: "Crunchy Chicken Fillet, Spicy Mayo, Lettuce, Sandwiched Between A Sesame Seed Bun",
    //             price: 250,
    //             quantity: quantity
    //         };
    
    //         console.log("Adding item to bucket:", item);
    //     };


    return(
        <div>
            <Details
            // Buttons={Buttons}   
            // quantity={quantity} 
            // handleIncreaseQuantity={handleIncreaseQuantity}
            // handleDecreaseQuantity={handleDecreaseQuantity}
            // handleAddToBucket={handleAddToBucket}  
            // drinkOptions={drinkOptions}  
            // handleDrinkChange={handleDrinkChange}    
            />
        </div>
    );

}
export default Product;