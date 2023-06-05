import { useState } from "react";
const NewPage = () => {
    const [selectedDrink, setSelectedDrink] = useState("");

    const drinkOptions = [
        {
            image: "Images/cola.png",
            name: "Pepsi Regular",
            value: "cola",
        },
        {
            image: "Images/7up.jpg",
            name: "7UP Regular",
            value: "sprite",
        },
        {
            image: "Images/marinda.jpg",
            name: "Mirinda Regular",
            value: "fanta",
        },
        {
            image: "Images/dew.jpg",
            name: "Mountain Dew Regular",
            value: "dew",
        },
    ];

    const handleDrinkChange = (e) => {
        setSelectedDrink(e.target.value);
    };

    const [quantity, setQuantity] = useState(1);
    
    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToBucket = () => {
        const item = {
            name: "Krunch Burger",
            description: "Crunchy Chicken Fillet, Spicy Mayo, Lettuce, Sandwiched Between A Sesame Seed Bun",
            price: 250,
            quantity: quantity
        };

        console.log("Adding item to bucket:", item);
    };
    return (
        <div>
            <div className="row2">

                <div className="forms">
                    <div className="formMeta">
                        <h4>Choose your soft drink</h4>
                        <button className="RequiredButt">Required</button>
                    </div>
                    <div className="section">
                        <div className="drink-options">
                            {drinkOptions.map((option) => (
                                <label key={option.value}>
                                    <img src={option.image} alt={option.name} />
                                    <h4>{option.name}</h4>
                                    <div className="radio">
                                        <input
                                            type="radio"
                                            name="drink"
                                            value={option.value}
                                            onChange={handleDrinkChange}
                                        />
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>





                <div className="forms">
                    <div className="formMeta">
                        <h4>Add a soft drink</h4>
                        <button className="optionButt2">Optional</button>
                    </div>
                    <div className="section">
                        <div className="drink-options">
                            {drinkOptions.map((option) => (
                                <label key={option.value}>
                                    <img src={option.image} alt={option.name} />
                                    <div className="form23">
                                        <h4>{option.name}</h4>
                                        <h6>RS 126</h6>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div class="forms">
                    <img src="Images/top1.jpg" alt="" id="productImg" />
                </div>
                <div class="col">
                            <h1>Krunch Burger</h1>
                            <p>Krunch + 1 regular Fries + 1 regular Drink </p>
                            <h2>Rs 250</h2>
                            <div className="quantity2">
                                <div class="quantity">
                                    <button onClick={handleDecreaseQuantity}>-</button>
                                    <span> {quantity}</span>
                                    <button onClick={handleIncreaseQuantity}>+</button>
                                    <button class="btn2" onClick={handleAddToBucket}>Add to Bucket</button>
                                </div>
                            </div><br />
                        </div>





            </div>
        </div>
    );

}
export default NewPage;