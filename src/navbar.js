'use strict';

class Navbar_component extends React.Component {
 
  render() {
 
    return (
      <div class="container">
      <button
        type="button"
        class="btn btn-navbar mt-5"
        data-toggle="collapse"
        data-target=".nav-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a
        class="brand"
        href="index.html"
        > <img src="./assets/image/logo.png" class="width-auto" />
        </a>
      <div class="nav-collapse collapse">        
        <ul class="nav">       
          <li><a href="aboutPPC.html">認識和平教會</a></li>
          <li><a href="ppcTenYears.html">2012-2022關鍵十年</a></li>
          <li><a href="ppcCulture.html">PPC與文化</a></li>
          <li><a href="agape.html">愛咖啡Agape</a></li>
          {/* <li><a href="index.html">特別報導</a></li> */}
          <li><a href="song.html">詩歌創作</a></li>
          {/* <li><a href="index.html">關於未來</a></li>  */}
                      
        </ul>
      </div>
    </div>
      );
  }
}

const root = ReactDOM.createRoot(document.getElementById('navbar_component'));
root.render(<Navbar_component />);

