import React from 'react'

const Header = () => {
  return (
    <div>
      <header>
    <nav>
      <a href="#" className="active">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Portfolio</a>
      
    </nav>
  </header>
  <div className="slider">

    <div className="list">

      <div className="item">
        <img src="./images/bgmi.jpg" alt=""/>
        <div className="content">
        <div className="title"></div>
        <div className="type"><span style="color:orangered;">B</span><span style="color: white;">GM</span><span style="color: green;">I</span></div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure necessitatibus repellendus facilis harum minus provident iste, quidem quisquam cupiditate numquam natus, ipsum vero culpa expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
        </div>
        <div className="button">
          <button>See more</button>
        </div>
        </div>

      </div>
      <div className="item">
        <img src="./images/coc.jpg" alt=""/>
        <div className="content">
        <div className="title"></div>
        <div className="type">Clash of Clans</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure necessitatibus repellendus facilis harum minus provident iste, quidem quisquam cupiditate numquam natus, ipsum vero culpa expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
        </div>
        <div className="button">
          <button>See more</button>
        </div>
        </div>

      </div>
      <div className="item">
        <img src="./images/valorant.jpg" alt=""/>
        <div className="content">
        <div className="title"></div>
        <div className="type">Valorant</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure necessitatibus repellendus facilis harum minus provident iste, quidem quisquam cupiditate numquam natus, ipsum vero culpa expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
        </div>
        <div className="button">
          <button>See more</button>
        </div>
        </div>

      </div>
      <div className="item">
        <img src="./images/gta5.jpg" alt=""/>
        <div className="content">
        <div className="title"></div>
        <div className="type">GTA V</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure necessitatibus repellendus facilis harum minus provident iste, quidem quisquam cupiditate numquam natus, ipsum vero culpa expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
        </div>
        <div className="button">
          <button>See more</button>
        </div>
        </div>

      </div>
      <div className="thumbnail">
        <div className="items">
          <img src="./images/bgmi.jpg" alt=""/>
        </div>
        <div className="items">
          <img src="./images/coc.jpg" alt=""/>
        </div>
        <div className="items">
          <img src="./images/valorant.jpg" alt=""/>
        </div>
        <div className="items">
          <img src="./images/gta5.jpg" alt=""/>
        </div>
      </div>
      <div className="nextPrevArrows">
        <button className="prev">{`<`}</button>
        <button className="next">{`>`}</button>
      </div>
      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  </div>
</div>

   
  
  )
}

export default Header
