import React from "react";
import "./Content.css";

export default function Content({ deleteData, viewData,person}) {
  return (
    <div className="content">
      <h3 className="header">لديك {person.length} مواعيد</h3>
      <div className="mainContent">
        {person.length
          ? person.map((item) => {
              return (
                <div key={item.id} className="row-mainContent">
                  <img className="img" src="images/face.jpg" alt="" />
                  <p className="name">{item.name} </p>
                  <p className="time">{item.date}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="footer">
        <button onClick={deleteData} className="btn1">
          مسح الكل
        </button>
        <button onClick={viewData} className="btn2">
          عرض اليانات
        </button>
      </div>
    </div>
  );
}
