import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fir-frontend-7cedc-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) throw new Error("Could not fetch cart Data!");
      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
    
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: err.message,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending",
        message: "Sending Cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://fir-frontend-7cedc-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) throw new Error("Sending Cart data failedf");
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "Success",
          title: "Success",
          message: "Sending Cart data Successfully!",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending Cart data! Failed",
        })
      );
    }
  };
};
