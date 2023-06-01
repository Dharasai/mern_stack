
import { createSlice } from "@reduxjs/toolkit";

export const HeaderSlice = createSlice({
  name: "headerSlice",
  initialState: {
    sideMenuToggle: false,
    message: "",
    errorMessage: "",
  },
  reducers: {
    setSideMenuToggle: (state, action) => {
      state.sideMenuToggle = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});
export const { setSideMenuToggle, setMessage, setErrorMessage } = HeaderSlice.actions;

// export const getMyAccountAccess = () => (dispatch) => {

//   let url = `${quizzWhizzApi.myaccountapi}`;
//   apiCaller(url, "GET", {}, dispatch)
//     .then((response) => {
//       if (response !== null && response) {
//         if (response.status !== -1) {
//           console.log(response, "tasks response");
//           dispatch(setAccountData(response));
//         } else {
//           dispatch(setErrorMessage(response.message));
//         }
//       }
//     })
//     .catch((error) => {
//       dispatch(setErrorMessage(error.message))
//     }
//     );
// };
// export const getMyCoinsAccess = () => (dispatch) => {

//   let url = `${quizzWhizzApi.mycoinsapi}`;
//   apiCaller(url, "GET", {}, dispatch)
//     .then((response) => {
//       if (response !== null && response) {
//         if (response.status !== -1) {
//           console.log(response, "tasks response");
//           dispatch(setCoinsData(response));
//         } else {
//           dispatch(setErrorMessage(response.message));
//         }
//       }
//     })
//     .catch((error) => {
//       dispatch(setErrorMessage(error.message))
//     }
//     );
// };
// export const handleUserNameAPI = (params) => (dispatch) => {
//   console.log("params: ", params);

//   const obj = params;

//   let url = `${quizzWhizzApi.myusernameapi}`;
//   apiCaller(url, "PUT", obj, dispatch)
//     .then((response) => {
//       if (response !== null && response) {
//         if (response.status !== -1) {
//           dispatch(setUserNameSuccess(response.message))
//           dispatch(getMyAccountAccess())
//         } else {
//           dispatch(setErrorMessage(response.message));
//         }
//       }
//     })
//     .catch((error) => {
//       dispatch(setErrorMessage(error.message))
//     }
//     );
// };



// export const getUserLinksetData = (params) => (dispatch) => {
//   console.log("params: ", params);

//   let obj = {
//     "userlink": params.userLink,
//     "playFriendsOnly": params.check
//   };
//   let url = `${quizzWhizzApi.myuserapi}`;

//   apiCaller(url, "POST", obj, dispatch)
//     .then((response) => {
//       if (response !== null && response) {
//         if (response.status !== -1) {
//           console.log("response: ", response);
//           dispatch(setUserLinkFriends(response))

//         } else {
//           dispatch(setErrorMessage(response.message));
//         }
//       }
//     })
//     .catch((error) => {
//       dispatch(setErrorMessage(error.message))
//     }
//     );
// };

export default HeaderSlice.reducer;
