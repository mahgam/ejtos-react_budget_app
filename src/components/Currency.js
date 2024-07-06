import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
    }
    return (
<div className='alert alert-warning'>
<span>Currency: {currency}</span>
<select name="Currencys" id="Curr">
  <option value="Dollar">$ Dollar</option>
  <option value="Pound">£ Pound</option>
  <option value="Euro">€ Euro</option>
  <option value="Ruppee">╣ Ruppee</option>
</select>
</div>
    );
};
export default Currency;
