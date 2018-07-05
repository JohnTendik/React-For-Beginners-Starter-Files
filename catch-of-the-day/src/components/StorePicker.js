import React from 'react';
import { format } from 'url';

import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render () {
    return (
      <form className="store-selector">
        <h2>Select a store</h2>
        <input type="text" required placeholder='Enter a store name' defaultValue={getFunName()} />
        <button type='submit'>Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;