import db from "utils/firebase";

export const removeProduct = (id = "") => ({
  type: "REMOVE_PRODUCT",
  id
});

export const startRemoveProduct = (id = "") => {
  return dispatch => {
    return db
      .ref(`products/${id}`)
      .remove()
      .then(() => {
        dispatch(removeProduct(id));
      });
  };
};

export const addProduct = product => ({
  type: "ADD_PRODUCT",
  product
});

export const startAddProduct = (productData = {}) => {
  return dispatch => {
    const {
      BarcodeNo = "",
      Category = "",
      Status = "",
      ItemName = "",
      WMSItemName = "",
      ImageUrl = "",
      Year = "",
      QTY = ""
    } = productData;
    const product = {
      BarcodeNo,
      Category,
      Status,
      ItemName,
      WMSItemName,
      ImageUrl,
      Year,
      QTY
    };

    return db
      .ref("products")
      .push(product)
      .then(ref => {
        dispatch(
          addProduct({
            id: ref.key,
            ...product
          })
        );
      });
  };
};

export const setProducts = products => ({
  type: "SET_PRODUCTS",
  products
});

export const startSetProducts = () => {
  return dispatch => {
    return db
      .ref("products")
      .once("value")
      .then(snapshot => {
        const products = [];

        snapshot.forEach(childSnapshot => {
          products.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setProducts(products));
      });
  };
};

export const editProducts = (id, updates) => ({
  type: "EDIT_PRODUCTS",
  id,
  updates
});

export const startEditProducts = (id, updates) => {
  return async dispatch => {
    await db.ref(`products/${id}`).update(updates);
    return dispatch(editProducts(id, updates));
  };
};
