import "./Header.css";

const Header = () => {



  return (
    <>
        <header>
            <h1>Lewis' Drink Distribution</h1>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Drink Range</li>
                    <li>Order Requests</li>
                    <li>Contact us</li>
                </ul>
            </nav>

            <div className="searchBar">
                <input />
                <button>Search</button>
            </div>
            
        </header>
    </>
  )
}

export default Header