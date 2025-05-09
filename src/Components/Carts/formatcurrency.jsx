// export const formatCurrency = (value) => {
//     if (typeof value === "number") {
//       return value.toLocaleString("en-IN", { style: "currency", currency: "INR" });
//     }
//     return "$";
//   };
  
  // utils/formatCurrency.js (optional if separating)
export const formatCurrency = (value) => {
  if (typeof value === "number") {
    return value.toLocaleString("en-IN", { style: "currency", currency: "INR" });
  }
  return "₹0"; // Optional: Better fallback
};
