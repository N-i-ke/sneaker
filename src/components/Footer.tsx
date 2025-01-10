import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'black' }} id="CONTACT">
      <div className="footer_inner">
        <div className="ttl">CONTACT</div>

        <div className="footer_box">
          <div className="footer_left">
            <div className="top">テキストテキストテキスト</div>
            <div className="center">
              テキストテキストテキスト テキストテキストテキストテキ
              <br />
              ストテキストテキストテキスト テキストテキストテキスト
              <br />
              テキストテキストテキスト テキストテキスト
            </div>
            <div className="bottom">
              テキストテキストテキスト テキストテキストテキストテキ
              <br />
              ストテキストテキストテキスト テキストテキストテキスト
              <br />
              テキストテキストテキスト テキストテキスト
            </div>
          </div>

          <div className="footer_right">
            <form action="">
              <div className="box">
                <label className="label" htmlFor="name">
                  NAME:
                </label>
                <input id="name" type="text" name="name" />
              </div>
              <div className="box" style={{ padding: '10px 0' }}>
                <label className="label" htmlFor="e-mail">
                  Mail:
                </label>
                <input id="e-mail" type="email" name="email" />
              </div>
              <div className="box">
                <label className="label" htmlFor="message">
                  Message:
                </label>
                <textarea id="message" name="comment"></textarea>
              </div>

              <button>SEND</button>
            </form>
          </div>
        </div>

        <div className="footer_bottom">© Sneakers</div>
      </div>
    </footer>
  );
};

export default Footer;
