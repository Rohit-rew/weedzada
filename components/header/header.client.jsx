import React from "react";

export default function HeaderC({ menue }) {
  console.log(menue);
  const menueitems = menue.map((item) => {
    return <div className="navitem">{item.title}</div>;
  });

  return (
    <>
      <div className="upperdiv">
        <img width={"100px"} src={"/logo4.png"} />

        <div className="switch">
        <div className="navitem ">Accessories</div>
        <div className="navitem active">Clothing</div>
        </div>

        {/* <p>Cart</p> */}

        <p>+91-98214-43242</p>

      </div>

      <div className="lowerdiv">
        <nav className="nav">{menueitems}</nav>
        <input placeholder="Search.."/>
      </div>
    </>
  );
}
