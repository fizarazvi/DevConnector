import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', dispaly: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);

export default Spinner;
