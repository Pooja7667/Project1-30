import React from 'react'
import "../Style/Slist1.css";


const Slist1 = ({students}) => {

  return (
    <>
      <div className="container">
        <div className="container2">
          {students.map((child) => {
            const { id, name, age, image } = child;
            return (
              <>
                <div key={id} className="small-Container">
                  <img src={image} alt="" />
                  <div>
                    <h3>{name}</h3>
                    <p>{age}</p>
                  </div>
                </div>
              </>
            );
          })}
          
        </div>
      </div>
    </>
  );
}

export default Slist1;