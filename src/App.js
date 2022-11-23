import './App.css';
import logo from'./logo.png';

function App() {
  return (
    
    <div className="App">
      <div classname ="top">
        
        <img src={logo}  classname="logo" alt="logo spotify" />
      </div>
      <header className="App-header"> 
        <h1>
          Sign in
        </h1>
        <p>
          If you need any support <a

          href=""

        >
          Click here
        </a>
        </p>
        
      </header>

    
			<form > 
				<div> 
					<label htmlFor="email"></label>
					<input type="text" name="email" id="email" placeholder="Enter Username Or Email"/> 
				</div> 
				<div> 
					<label htmlFor="passw"></label>
					<input type="text" name="passw" id="passw"placeholder="Password"/> 
				</div>  
        <p>Recovery Password</p>
				<button type="submit">Sign In</button>
			</form>

      <p>or</p>

      <div classname="social">
      <i class="fa-brands fa-google"></i>
      <i class="fa-brands fa-apple"></i>
		  </div>  
      <p>
            Not A Member ? <a
            href="">
            Register Now
          </a>
          </p>
    </div>
    

  );
}

export default App;
