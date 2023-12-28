import React from 'react'
import { createContext } from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
export const MyContext = createContext();

export const ContextFile = ({children }) => {
    const navigate = useNavigate();

    const [Categories, setCategories] = useState([
        { image: "Images/food1.jpg" },
        { image: "Images/food2.png" },
        { image: "Images/food3.jpg" },
        { image: "Images/food4.jpg" },
        { image: "Images/food5.jpg" },
        { image: "Images/food6.png" },

    ]);
 
    const [TopSelling, setTopSelling] = useState([
        {
            
            image: "Images/top1.jpg",
            name: 'Krunch Burger',
            price: 'Rs 250',
            Description: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
        },
        {
            
            image:"Images/top2.jpg",
            name: 'Krunch With Fries N Drink',
            price: 'Rs 490',
            Description: "Krunch + 1 regular Fries + 1 regular Drink",
        },{
            
            image: "Images/top3.jpg",
            name: 'Hot Wings',
            price: 'Rs 550',
            Description: "10 Pcs of our Signature Hot & Crispy Wings",
        },{
            
            image: "Images/top4.png",
            name: 'Mighty Zinger',
            price: 'Rs 680',
            Description: "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo",
        }
    ]);
    const handleDelete=(product)=>{
        const updatedTopselling = TopSelling.filter((c) => c !== product);
        setTopSelling(updatedTopselling);

    }
    const [Buttons, setButtons] = useState([
        { Name: "Everyday Value" },
        { Name: "Ala Carte & Combos" },
        { Name: "Signature Boxes " },
        { Name: "Sharing" },
        { Name: "Snacks & Beverages" },
        { Name: "Midnight" },
    ]);
    const handleProductClick = (product) => {
        navigate(`/product/${product.id}`, { state: { product } });
    };

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


        const value = { Buttons, setButtons, TopSelling, setTopSelling, selectedDrink, setSelectedDrink, drinkOptions, handleDrinkChange, quantity, setQuantity, handleIncreaseQuantity, handleDecreaseQuantity, handleAddToBucket, handleDelete, Categories, setCategories, handleProductClick};
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;



}
