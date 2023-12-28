import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { MyContext } from "../ContextFile";
const Home = () => {
    const { Categories, TopSelling, handleProductClick} = useContext(MyContext);
    // const [Categories, setCategories] = useState([
    //     { image: "Images/food1.jpg" },
    //     { image: "Images/food2.png" },
    //     { image: "Images/food3.jpg" },
    //     { image: "Images/food4.jpg" },
    //     { image: "Images/food5.jpg" },
    //     { image: "Images/food6.png" },

    // ]);

    // const [TopSelling, setTopSelling] = useState([
    //     {
            
    //         image: "Images/top1.jpg",
    //         name: 'Krunch Burger',
    //         price: 'Rs 250',
    //         Description: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
    //     },
    //     {
            
    //         image:"Images/top2.jpg",
    //         name: 'Krunch With Fries N Drink',
    //         price: 'Rs 490',
    //         Description: "Krunch + 1 regular Fries + 1 regular Drink",
    //     },{
            
    //         image: "Images/top3.jpg",
    //         name: 'Hot Wings',
    //         price: 'Rs 550',
    //         Description: "10 Pcs of our Signature Hot & Crispy Wings",
    //     },{
            
    //         image: "Images/top4.png",
    //         name: 'Mighty Zinger',
    //         price: 'Rs 680',
    //         Description: "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo",
    //     }
    // ]);
    // const handleDelete=(product)=>{
    //     const updatedTopselling = TopSelling.filter((c) => c !== product);
    //     setTopSelling(updatedTopselling);

    // }


    
    

    return (
        <div>
            <Header/>
            <div className="home">
                <div className="Banner">
                    <img src="Images/banner.jpg" alt="" width="100%" />
                </div>
                    <h2 className="tittle">Browse Categories</h2>

                {/* Browser categories */}
                <div className="sub-container">
                    <div className="row">
                        { Categories.map((cat)=>(
                        <div className="col-6"><img src={cat.image} /></div>
                        ))}
                    </div>
                </div>
                            {/* top selling */}  
        
                <div className="sub-container">
                <h2 className="tittle">Top Selling</h2>
                <div className="row">
                    {TopSelling.map((top,index ) => (
                        <div key={index} className="col-4">
                            <img          onClick={() => handleProductClick(top)}
                             src={top.image} alt="" />
                            <h4>{top.name}</h4>
                            <p>{top.Description}</p>
                            <div className="checkOut">
                            <h5>{top.price}</h5>
                            <Link to="/Product" >  <button className="addButt">Add to Bucket</button></Link>
                        </div>
                        {/* <button onClick={()=>handleDelete(top)} className="DeleteButt">Delete</button> */}
                       

                        </div>
                    ))}
                </div>
                
            </div>
            </div>
            < Footer />

        </div>

    );
}
export default Home;