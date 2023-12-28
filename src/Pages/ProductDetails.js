import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "../ContextFile";
import Header from "./Header";
import Footer from "./Footer";

const Details = () => {
    const location = useLocation();
    const product = location.state.product;
    const { Buttons, handleIncreaseQuantity, handleDecreaseQuantity, handleAddToBucket, drinkOptions, quantity, handleDrinkChange } = useContext(MyContext);    
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
                        <img src={product.image} alt={product.name} />
                        </div>
                        <div class="col-2">
                            <h1>{product.name}</h1>
                            <p>{product.Details} </p>
                            <h2>{product.price}</h2>
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