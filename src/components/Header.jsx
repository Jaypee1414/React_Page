import ImgIcon from "../assets/Icon.png";

function Header() {
    const react=['fundamental', 'Crucial', 'Core']
    function getRandomCore(){
    return Math.floor(Math.random()*(2+1))
    }
    return(
      <header>
        <img src={ImgIcon} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {react[getRandomCore()]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
}

export default Header;