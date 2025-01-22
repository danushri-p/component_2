import React from "react";

const ViewProductButton = () => {
  return (
    <button style={styles.button} onClick={() => alert("Viewing Product!")}>
      View Product
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "10px"
  }
};

export default ViewProductButton;
