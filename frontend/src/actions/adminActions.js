export const fetchAdmins = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_ADMINS" });
      fetch("http://localhost:3000/admins")
        .then(response => response.json())
        .then((data) => {
          dispatch({ type: "LOGIN_ADMINS", admins: data });
        });
    };
  };