import React from 'react';
const styles = require('../sass/components/backbutton.scss')

export default function BackButton() {
    return (
      <a href="http://www.alastairbird.co.uk" className={styles.backButton}>
        [Back to AB]
      </a>
    );
}
