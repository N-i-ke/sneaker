import React from 'react';

const Feature: React.FC = () => {
  const featureData = [
    { img: 'img/feature1.jpg', category: 'Category 1', text: 'テキストテキストテキストテキストテキストテキ' },
    { img: 'img/feature2.jpg', category: 'Category 2', text: 'テキストテキストテキストテキストテキストテキ' },
    { img: 'img/feature3.jpg', category: 'Category 3', text: 'テキストテキストテキストテキストテキストテキ' },
    { img: 'img/feature4.jpg', category: 'Category 4', text: 'テキストテキストテキストテキストテキストテキ' },
    { img: 'img/feature5.jpg', category: 'Category 5', text: 'テキストテキストテキストテキストテキストテキ' },
    { img: 'img/feature6.jpg', category: 'Category 6', text: 'テキストテキストテキストテキストテキストテキ' },
    { img: 'img/feature7.jpg', category: 'Category 7', text: 'テキストテキストテキストテキストテキストテキ' },
    { img: 'img/feature8.jpg', category: 'Category 8', text: 'テキストテキストテキストテキストテキストテキ' },
    { img: 'img/feature9.jpg', category: 'Category 9', text: 'テキストテキストテキストテキストテキストテキ' }
  ];

  return (
    <section className="feature" id="FEATURE">
      <div className="feature_inner">
        <div className="ttl">FEATURE</div>

        <div className="feature_box">
          {featureData.map((item, index) => (
            <div className="card" key={index}>
              <figure><img src={item.img} alt={item.category} /></figure>
              <div className="card_body">
                <div className="card_ttl">{item.category}</div>
                <div className="card_text">{item.text}</div>
                <div className="card_time">XXXX.XX.XX</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
