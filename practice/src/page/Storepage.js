import React from "react";
import ListOfShoes from "../service/ListofShoes";
import { List, Rating } from "@mui/material";

const Storepage = () => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)", // 4 sản phẩm mỗi hàng
                gap: "20px",
            }}
        >
            {ListOfShoes.map((shoe) => (
                <div
                    key={shoe.id}
                    style={{
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "10px",
                        textAlign: "center",
                    }}
                >
                    <img
                        src={shoe.image}
                        alt={shoe.name}
                        style={{ width: "100%", borderRadius: "8px" }}
                    />
                    <h3>{shoe.name}</h3>
                    <p>Price: ${shoe.price}</p>
                    <p>Color: {shoe.color}</p>
                    <Rating precision={0.5} value={shoe.rating}>Rating : ${shoe.rating}</Rating>
                    <p>Category: {shoe.category}</p>
                    <p>Size: {shoe.size}</p>
                </div>
            ))}

        </div>

    );
};

export default Storepage;
