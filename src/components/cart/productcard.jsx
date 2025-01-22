import React from "react";
import ViewProductButton from "../button"; 

const Productcard = () => {
  const productImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0ESZfEuefSMTLb6RDQxLbgaj-aswMCF20w&s"; 
  const productName = "Stylish Sneakers";
  const productPrice = "₹599";

  return (
    <div style={styles.card}>
      <img src={productImage} alt={productName} style={styles.image} />
      <h2 style={styles.name}>{productName}</h2>
      <p style={styles.price}>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    maxWidth: "200px",
    margin: "auto",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    borderRadius: "8px"
  },
  name: {
    fontSize: "18px",
    margin: "10px 0"
  },
  price: {
    fontSize: "16px",
    color: "#888"
  }
};

export default Productcard;
