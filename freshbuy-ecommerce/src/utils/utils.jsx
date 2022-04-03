
export const getCredentials = (email, password) => {
    return { email: email.value, password: password.value };
};

export const getTestData=()=>{
  return { email: "adarshbalika@gmail.com", password: "adarshbalika" };
}

// export const getSorted = (productlist, sortBy) => {
//     const sortedData =
//       sortBy === null
//         ? productlist
//         : productlist.sort((a, b) => {
//             if (sortBy === "LOW_TO_HIGH")
//               return parseInt(a.price) - parseInt(b.price);
//             else if (sortBy === "HIGH_TO_LOW") {
//               return parseInt(b.price) - parseInt(a.price);
//             } else {
//               return parseFloat(b.rating) - parseFloat(a.rating);
//             }
//           });
//     return sortedData;
//   };
