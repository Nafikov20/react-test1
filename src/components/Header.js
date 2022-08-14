function Header() {
   return (
   <div className="header">
      <div className="headerLeft">
         <a href="#" className="headerLeft__link">
            <img className="headerLeft__img" src="/img/Icon Artwork.svg" alt="" />
            <h3 className="headerLink__text">Приборы / <span>Добавить оборудование</span></h3>
         </a>      
      </div>
         <ul className="headerRight">
            <li>
               <a className="headerRight__link" href="#"><img className="headerRight__img" src="/img/bell.svg" alt="" /></a>
            </li>
            <li>
               <a className="headerRight__link" href="#"><img className="headerRight__img" src="/img/User.svg" alt="" /></a>
            </li>
         </ul>
   </div>
   );
}

export default Header;