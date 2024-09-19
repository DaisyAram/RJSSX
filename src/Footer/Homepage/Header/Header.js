import './Header.css';

const Navigation = () => {

  return (
    <>
    <div className="navigation">
        <ul>
        <div className="nav-1">
            <ul>
                <li><h2>Shortly</h2></li>
                <li><p>Features</p></li>
                <li><p>pricing </p></li>
                <li><p>Resources</p></li>
            </ul>
        </div>
        <div className='App-login-section'>
            <ul>
                <li><p>Login</p></li>
                <li><button>Sign Up</button></li>
            </ul>
        </div>
       </ul> 
    </div>
    </>
  );
}


export default Navigation;