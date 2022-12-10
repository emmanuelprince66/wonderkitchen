import React from "react";
import ItemsProducts from "../Product/ItemsProduct";

const Store = ({ data, addToCart }) => {
  return (
    <React.Fragment>
      <div className="row">
        {data.map((items) => {
          return (
            <div className="col-md-4 px-5" key={items.id}>
              <ItemsProducts items={items} handleClick={addToCart} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Store;
