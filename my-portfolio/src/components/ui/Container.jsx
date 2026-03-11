// export default function Container({ children, className = "" }) {
//   return (
//     <div
//       className={`
//         max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto
//         ${className}
//       `}
//       style={{
//         paddingLeft: "clamp(1rem, 2vw, 3rem)",
//         paddingRight: "clamp(1rem, 2vw, 3rem)",
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// export default function Container({ children, className = "" }) {
//   return (
//     <div
//       className={`
//         max-w-2xl 
//         sm:max-w-3xl 
//         md:max-w-4xl 
//         lg:max-w-5xl 
//         xl:max-w-6xl 
//         mx-auto 
//         px-4 sm:px-6 md:px-8 lg:px-10 
//         ${className}
//       `}
//     >
//       {children}
//     </div>
//   );
// }


export default function Container({ children, className = "" }) {
  return (
    <div
      className={`
        max-w-2xl          /* mobile */
        sm:max-w-3xl       /* small screens */
        md:max-w-5xl       /* laptops */
        lg:max-w-6xl       /* large laptops / desktops */
        xl:max-w-7xl       /* extra wide screens */
        mx-auto
        px-4 sm:px-6 md:px-8 lg:px-10
        ${className}
      `}
    >
      {children}
    </div>
  );
}