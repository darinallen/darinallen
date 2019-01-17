import React from 'react';
import ButtonRound from '../shared/buttons/ButtonRound';
import coffee from './coffee.jpg';
import analytics from './analytics.jpg';

import styles from './popup.module.scss';

const Popup = () => (
  <div className={styles.popup} id="popup">
    <div className={styles.content}>
      <div className={styles.left}>
        <img src={coffee} alt="Tour photo" className={styles.img} />
        <img src={analytics} alt="Tour photo" className={styles.img} />
      </div>
      <div className={styles.right}>
        <a href="#services" className={styles.close}>
          &times;
        </a>
        <h2 className="heading-secondary u-margin-bottom-small">Get a quote now</h2>
        <h3 className="heading-tertiary u-margin-bottom-small">
          Important &ndash; Please read these terms before getting a quote
        </h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Odio euismod lacinia at quis risus sed vulputate odio. Dolor sed viverra ipsum nunc aliquet.
          Lobortis feugiat vivamus at augue eget. Odio eu feugiat pretium nibh ipsum consequat nisl. Sociis natoque
          penatibus et magnis dis parturient montes. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi.
          Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Pellentesque habitant morbi tristique
          senectus et netus et. Egestas integer eget aliquet nibh praesent. Pretium lectus quam id leo. Sit amet luctus
          venenatis lectus magna fringilla urna. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Et odio
          pellentesque diam volutpat commodo sed egestas.
        </p>
        <ButtonRound link="#contact" primary>
          Get a quote
        </ButtonRound>
      </div>
    </div>
  </div>
);

export default Popup;
