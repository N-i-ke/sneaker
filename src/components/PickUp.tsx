import React from 'react';

const PickUp: React.FC = () => {
  return (
    <section className="pick_up" id="PICKUP">
      <div className="pick_up_inner">
        <div className="ttl">PICK UP</div>

        <ul className="slider">
          <li><img src="img/pickup2.jpg" alt="Pick Up 2" /></li>
          <li><img src="img/pickup3.jpg" alt="Pick Up 3" /></li>
          <li><img src="img/pickup4.jpg" alt="Pick Up 4" /></li>
          <li><img src="img/pickup5.jpg" alt="Pick Up 5" /></li>
          <li><img src="img/pickup6.jpg" alt="Pick Up 6" /></li>
          <li><img src="img/pickup7.jpg" alt="Pick Up 7" /></li>
          <li><img src="img/pickup8.jpg" alt="Pick Up 8" /></li>
          <li><img src="img/pickup9.jpg" alt="Pick Up 9" /></li>
        </ul>
      </div>
    </section>
  );
};

export default PickUp;
