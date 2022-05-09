import styles from "./Order.module.css";

function Order() {
  const dummydata = [
    {
      id: 1,
      imgurl:
        "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/nlota/nlota2093212397/nlota2093212397_q1_2-0.__UX540__._QL90_.jpg",
      brand: "Nili Lotan",
      title: "Yorke Shirt",
      price: "$250",
      color: "White",
      size: "Size",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftdiv}>
          <div className={styles.logo}>
          <img src="./img/bag.png"  height="80px" width="80px" alt="" />
          <h1>Shoping bag</h1>
          </div>
          <p>1 items</p>
          <p>Items are saved to your bag, but availability is not guaranteed.</p>
         
          {dummydata.map((item)=>{
             return(
             <div className={styles.itemdiv}>
                <img src={item.imgurl} height="300px" alt="img"/>
                <div className={styles.brand}> 
                    <h4>{item.brand}</h4>
                    <p>{item.title}</p>
                    <h4>{item.price}</h4>
                    <p>{item.color}</p>
                    <p>{item.size}</p>
                </div>
                
              </div>
              )
          })}
          <button>Edit</button>
        </div>
        <div className={styles.rightdiv}>
          <div>
            <h2>Order Summary</h2>
          </div>
          <div>
            <p>Products</p>
            <p>$365</p>
          </div>
          <div>
            <p>Shipping and Handling</p>
            <p>FREE</p>
          </div>
          <div>
            <p>Promo Code</p>
          </div>
          <div className={styles.inputdiv}>
            <input type={"text"} />
            <button>Apply</button>
          </div>
          <div className={styles.subtotal}>
            <h3>
              Subtotal<span>(before taxes)</span>
            </h3>
            <h3>$365</h3>
          </div>
          <div className={styles.checkoutbtn}>
            <button>Checkout</button>
          </div>
          <div className={styles.feesdiv}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAwaDUwdjUwSDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGc+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZD0iTTUwIDI1YzAgMTMuODA2LTExLjE5NSAyNS0yNSAyNVMwIDM4LjgwNyAwIDI1QzAgMTEuMTk0IDExLjE5NSAwIDI1IDBzMjUgMTEuMTkzIDI1IDI1IiBmaWxsPSIjRkZFN0RCIiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjxwYXRoIGQ9Ik0yMi44OTcgMzkuMDA4aDYuMzY5di01LjY1NWgtNi4zN3Y1LjY1NXptLS4xMi0yNi43ODZoNi42NjdsLS45ODkgMTguMjE1aC00LjY4OGwtLjk5LTE4LjIxNXoiIGZpbGw9IiNGRkNCQjEiLz48cGF0aCBkPSJNMjcuNiAzMS4xMzFjLjMwNiAwIC41NTUuMjQ5LjU1NS41NTZ2NS42NTRhLjU1Ni41NTYgMCAwMS0uNTU2LjU1NkgyMS4yM2EuNTU2LjU1NiAwIDAxLS41NTUtLjU1NnYtNS42NTRjMC0uMzA3LjI0OC0uNTU2LjU1NS0uNTU2aDYuMzd6bS0uNTU2IDEuMTExaC01LjI1OHY0LjU0NGg1LjI1OHYtNC41NDR6TTI3Ljc3OCAxMGMuMzE4IDAgLjU3Mi4yNjcuNTU1LjU4NmwtLjk5IDE4LjIxNGEuNTU2LjU1NiAwIDAxLS41NTQuNTI1SDIyLjFhLjU1Ni41NTYgMCAwMS0uNTU1LS41MjVsLS45ODktMTguMjE0YS41NTYuNTU2IDAgMDEuNTU1LS41ODZoNi42Njd6bS02LjA4IDEuMTExbC45MjggMTcuMTAzaDMuNjM3bC45MjgtMTcuMTAzaC01LjQ5M3oiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4="
              alt="i"
            />
            <div>
              <h4>Additional Fees May Apply</h4>
              <p>Shipping Options, Import Fees and Return Fees</p>
            </div>
          </div>
          <div className={styles.visa}>
            <img
              src="data:image/png;base64,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"
              alt="visa"
            />
            {/* similaraly add the other icons */}
          </div>
          <div className={styles.customercare}>
            <h3>Questions? Contact Customer Care</h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default Order;
