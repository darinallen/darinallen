import React from 'react';
import Story from './Story';
import ButtonText from '../../shared/buttons/ButtonText';
import BackgroundVideo from '../../shared/BackgroundVideo';
import testimonial from './testimonial.jpg';
import testimonial2 from './testimonial2.jpg';
import city from './city.mp4';
import styles from './stories.module.scss';

const Stories = () => (
  <section className={styles.stories} id="stories">
    <BackgroundVideo source={city} />
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">Stories</h2>
    </div>
    <div className="row">
      <Story
        heading="The new website looks amazing!"
        image={testimonial}
        altText="Satisfied customer"
        caption="Bill Lumberg"
        content="I knew I needed to revamp my website, but I wasn't sure where to start. 
          Darin blew my mind into a million tiny pieces with his mad development skills. 
          Everything is better now. Colors are brighter. My sense of taste is stronger than 
          that of a feral wolverine. Customer happiness is off the charts!"
      />
    </div>
    <div className="row">
      <Story
        heading="I've found the ultimate web developer"
        image={testimonial2}
        altText="Satisfied customer"
        caption="Michael Bolton"
        content="Wow. This guy. He took one look at my old website and just said the word 'garbage' 
        without the slightest hint of irony in his voice. On the one hand, I was offended. 
        But on the other hand, who am I to argue with such a brilliant mind? My new website
        looks one bajillion times better than the old site."
      />
    </div>
    <div className="u-center-text u-margin-top-huge">
      <ButtonText text="Read all stories" />
    </div>
  </section>
);

export default Stories;
