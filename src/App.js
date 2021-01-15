import './App.css';
import React, {useState} from 'react';

function App() {
  const [baseCurrency, setBaseCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [endConversion, setEndConversion] = useState('');
  let visible = false;
  const apiURL = 'https://api.exchangeratesapi.io/latest?base=';

  // Calls the API and the
  async function callApi(e) {
    // Don't refresh page
    e.preventDefault();
    // Get the base currency and end currency
    let base = getBase();
    setBaseCurrency(base);
    let to = getTo();
    setToCurrency(to);

    // Make the call to the api using base currency
    let res = await fetch(apiURL + base, {mode: 'cors'});
    let data = await res.json();
    console.log(data);

    // Get the conversion rate and set it
    setEndConversion(data.rates[to].toFixed(2));

    // Show the end conversion on the screen
    showConversion();
  }

  // Function to set Base currency
  const getBase = () => {
    let baseCurr = document.getElementById('base-currency').value;
    return baseCurr;
  }

  // Function to set the To Currency
  const getTo = () => {
    let toCurr = document.getElementById('to-currency').value;
    return toCurr;
  }

  // Function that will show the conversion on screen
  const showConversion = () => {
    if (!visible) {
      document.getElementById('currency-converted').style = "visibility: visible";
      visible = true;
    }
  }

  return (
    <div className="m-5 col-md-10 col-lg-8 col-xl-7 mx-auto">
      <h1 className='text-center'>Currency Converter</h1>
      <form onSubmit={callApi}>
        <div className='form-row'>
          <div className="mt-5 col-12 col-md-6 mb-2 mb-md-0">
            <h3 className='text-center'>Base Currency</h3>
            <select id='base-currency' className="form-control form-control-lg">
                    <option value="USD">United States dollar</option>
                    <option value="AUD">Australian dollar</option>       
                    <option value="BGN">Bulgarian lev</option>     
                    <option value="BRL">Brazilian real</option>                 
                    <option value="CAD">Canadian dollar</option>
                    <option value="CHF">Swiss franc</option>             
                    <option value="CNY">Chinese yuan</option>             
                    <option value="CZK">Czech koruna</option>                 
                    <option value="DKK">Danish krone</option>               
                    <option value="GBP">British pound</option>        
                    <option value="HKD">Hong Kong dollar</option>                 
                    <option value="HRK">Croatian kuna</option>                   
                    <option value="HUF">Hungarian forint</option>
                    <option value="IDR">Indonesian rupiah</option>
                    <option value="ILS">Israeli new shekel</option>
                    <option value="IMP">Manx pound</option>
                    <option value="INR">Indian rupee</option>                 
                    <option value="ISK">Icelandic króna</option>                  
                    <option value="JPY">Japanese yen</option>                
                    <option value="KRW">South Korean won</option>                  
                    <option value="MXN">Mexican peso</option>
                    <option value="MYR">Malaysian ringgit</option>                  
                    <option value="NOK">Norwegian krone</option>                  
                    <option value="NZD">New Zealand dollar</option>                   
                    <option value="PHP">Philippine peso</option>                   
                    <option value="PLN">Polish złoty</option>                    
                    <option value="RON">Romanian leu</option>                    
                    <option value="RUB">Russian ruble</option>
                    <option value="SEK">Swedish krona</option>
                    <option value="SGD">Singapore dollar</option>
                    <option value="THB">Thai baht</option> 
                    <option value="TRY">Turkish lira</option>
                    <option value="ZAR">South African rand</option>
                  </select>
          </div>
          <div className="mt-5 col-12 col-md-6 mb-2 mb-md-0">
            <h3 className='text-center'>To</h3>
            <select id='to-currency' className="form-control form-control-lg">
                    <option value="AUD">Australian dollar</option>       
                    <option value="BGN">Bulgarian lev</option>     
                    <option value="BRL">Brazilian real</option>                 
                    <option value="CAD">Canadian dollar</option>
                    <option value="CHF">Swiss franc</option>             
                    <option value="CNY">Chinese yuan</option>             
                    <option value="CZK">Czech koruna</option>                 
                    <option value="DKK">Danish krone</option>               
                    <option value="GBP">British pound</option>        
                    <option value="HKD">Hong Kong dollar</option>                 
                    <option value="HRK">Croatian kuna</option>                   
                    <option value="HUF">Hungarian forint</option>
                    <option value="IDR">Indonesian rupiah</option>
                    <option value="ILS">Israeli new shekel</option>
                    <option value="IMP">Manx pound</option>
                    <option value="INR">Indian rupee</option>                 
                    <option value="ISK">Icelandic króna</option>                  
                    <option value="JPY">Japanese yen</option>                
                    <option value="KRW">South Korean won</option>                  
                    <option value="MXN">Mexican peso</option>
                    <option value="MYR">Malaysian ringgit</option>                  
                    <option value="NOK">Norwegian krone</option>                  
                    <option value="NZD">New Zealand dollar</option>                   
                    <option value="PHP">Philippine peso</option>                   
                    <option value="PLN">Polish złoty</option>                    
                    <option value="RON">Romanian leu</option>                    
                    <option value="RUB">Russian ruble</option>
                    <option value="SEK">Swedish krona</option>
                    <option value="SGD">Singapore dollar</option>
                    <option value="THB">Thai baht</option> 
                    <option value="TRY">Turkish lira</option>
                    <option value="USD">United States dollar</option>
                    <option value="ZAR">South African rand</option>
                  </select>
          </div>
        </div>
        <input type='submit' className='btn btn-lg btn-secondary mt-5 offset-5' value='Convert'></input>
      </form>
      <div id='currency-converted' style={{visibility: 'hidden'}} className='mt-5 rounded'>
        <div className='form-row'>
          <div className="col-5 text-center">
            <div>
              <h3>{baseCurrency}</h3>
              <h4>{1}</h4>
            </div>
          </div>
          <div className="text-center col-2">
            <h3>=</h3>
          </div>
          <div className="text-center col-5">
            <div>
              <h3>{toCurrency}</h3>
              <h4>{endConversion}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
