import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";
const Details = ({ Buttons, quantity, handleIncreaseQuantity, handleDecreaseQuantity, handleAddToBucket, drinkOptions, handleDrinkChange}) => {

    
    return (
        <div>
            <Header />
            <div className="home">
                <div>
                    <div className="underHeader">
                        {Buttons.map((butt) => (
                            <button className="HeaderButton">{butt.Name}</button>
                        ))}
                    </div>
                </div>
                <div class="sub-container2">
                    <div class="row">

                        <div class="col-2">
                            <img src="Images/detailepic.png" alt="" id="productImg" />
                        </div>
                        <div class="col-2">
                            <h1>Krunch Burger</h1>
                            <p>Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun </p>
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
                            <h4>Add Ons</h4>
                            <button className="optionButt1">Optional</button>
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

                    </div>
                            
            </div>
            < Footer />

        </div>

    );
}
export default Details;