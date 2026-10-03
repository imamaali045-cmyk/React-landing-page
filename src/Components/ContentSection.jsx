import React from 'react';
import styles from './ContentSection.module.css';

const sectionsData = [
  {
    id: '01',
    subtitle: 'GET STARTED',
    title: 'What level of hiker are you?',
    text: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like AllTrails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    reverse: false,
  },
  {
    id: '02',
    subtitle: 'HIKING ESSENTIALS',
    title: 'Picking the right Hiking Gear!',
    text: 'The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe till they get sweaty or wet.',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80',
    reverse: true,
  },
  {
    id: '03',
    subtitle: 'WHERE YOU GO IS THE KEY',
    title: 'Understand Your Map & Timing',
    text: 'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.',
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80',
    reverse: false,
  },
];

const ContentSection = () => {
  return (
    <section className={styles.container}>
      {sectionsData.map((item) => (
        <div
          key={item.id}
          className={`${styles.row} ${item.reverse ? styles.reverse : ''}`}
        >
          {/* Text Box */}
          <div className={styles.textContainer}>
            <span className={styles.bigNumber}>{item.id}</span>
            <div className={styles.subtitleWrapper}>
              <span className={styles.line}></span>
              <span className={styles.subtitle}>{item.subtitle}</span>
            </div>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.text}>{item.text}</p>
            <a href="#read-more" className={styles.readMore}>
              read more <span className={styles.arrow}>&rarr;</span>
            </a>
          </div>

          {/* Image Box */}
          <div className={styles.imageContainer}>
            <img src={item.image} alt={item.title} className={styles.image} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContentSection;