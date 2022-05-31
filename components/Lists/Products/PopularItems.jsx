import React, {useEffect, useState} from 'react';
import PopularItemLayout from "../../layouts/ItemRows/PopularItemLayout";
import axios from "axios";
import PopularItemCard from "../../Cards/Item/PopularItemCard";


const PopularItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('/api/product/fetch-products',{
            params: {
                productLimit : 10
            }
        }).then(res => {
            setItems(res.data.products);
        })
    }, []);

    return (
        <PopularItemLayout>
            {items.length > 0 && <>
                {items.map((item) => (
                    <div key={item.id}>
                        <PopularItemCard src={item.images[0]?.url} alt={item.images[0]?.name} price={item.price} size={item.size}
                                         brand={item.brand} favCount={item.favouriteCount}/>
                    </div>
                ))}
            </>}

        </PopularItemLayout>
    );
};

export default PopularItems;

const itemsStaticData = [{
    id: 1,
    username: "NickyMontana",
    src: "https://cdn.shopify.com/s/files/1/0059/5879/5337/products/handknitted-butterfly-jacket-by-hanne-falkenberg-design-andet-hanne-falkenberg-kit-6-m-992013_620x.jpg?v=1631370781",
    alt: "frock picture",
    price: "5.00",
    size: "12/L",
    brand: "Shein"
}, {
    id: 121,
    username: "NickyMontana",
    src: "https://cdn.shopify.com/s/files/1/0059/5879/5337/products/handknitted-butterfly-jacket-by-hanne-falkenberg-design-andet-hanne-falkenberg-kit-6-m-992013_620x.jpg?v=1631370781",
    alt: "frock picture",
    price: "5.00",
    size: "12/L",
    brand: "Shein"
}, {
    id: 2,
    username: "Pedro123",
    src: "https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg",
    alt: "frock picture",
    price: "5.00",
    size: "24/3X",
    brand: "Torrid"
}, {
    id: 3,
    username: "LeonZucchini",
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "frock picture",
    price: "5.00",
    size: "24/L",
    brand: "Shein"
}, {
    id: 4,
    username: "IrynaSuprun",
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "frock picture",
    price: "5.00",
    size: "12/L",
    brand: "Shein"
}, {
    id: 14,
    username: "IrynaSuprun",
    src: "https://i.pinimg.com/474x/c2/7e/1c/c27e1ccc0b9e3fdf999495e569f19ea5.jpg",
    alt: "frock picture",
    price: "5.00",
    size: "12/L",
    brand: "Shein"
}];
