import React, { useEffect, useRef, useState } from "react";
import chilli from "../images/chilli-tikka.jpg";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  //console.log(options);
  let priceRef = useRef();
  let options1 = props.options;
  let priceOptions = Object.keys(options1);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  let foodItem = props.foodItems;
  const handleAddtocart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === foodItem._id) {
        console.log("har");
        food.push(item);
        break;
      }
    }
    if (food.length > 0) {
      if (food[0].size === size) {
        console.log("up");
        await dispatch({
          type: "UPDATE",
          id: foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food[0].size !== size) {
        await dispatch({
          type: "ADD",
          id: foodItem._id,
          price: finalPrice,
          name: props.foodItems.name,
          qty: qty,
          size: size,
          img: props.foodItems.img,
        });
        return;
      }
      await dispatch({
        type: "ADD",
        id: foodItem._id,
        price: finalPrice,
        name: props.foodItems.name,
        qty: qty,
        size: size,
        img: props.foodItems.img,
      });
      return;
    }
    await dispatch({
      type: "ADD",
      id: props.foodItems._id,
      name: props.foodItems.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.foodItems.img,
    });
    console.log(data);
  };
  // console.log(priceOptions);
  console.log(options1);
  useEffect(() => {
    setSize(priceRef.current.value); // Set the size state to the value of the selected option
  }, [priceRef.current]);
  let finalPrice = qty * parseInt(options1[size]);

  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "400px"}}
        >
          <img
            src={foodItem.img}
            style={{ height: "120px", objectFit: "fill" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{foodItem.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="container w-100" style={{ display: "flex" }}>
              <select
                style={{ backgroundColor: "#FFE682" }}
                className="m-2 h-100 w-40 rounded"
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select
                className="m-2 h-100 w-40 rounded"
                style={{ backgroundColor: "#FFE682" }}
                onChange={(e) => setSize(e.target.value)}
                ref={priceRef}
              >
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-5">{finalPrice}/-</div>
            </div>
            <hr></hr>
            <button
              style={{ backgroundColor: "#FFE682" }}
              className={`btn justify-center ms-2`}
              onClick={handleAddtocart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
