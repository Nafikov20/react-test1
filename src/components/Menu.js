function Menu() {
   return (
      <div className="lateralMenu">
      <div className="menuHeader">
         <img className="menuHeader__img" src="/img/Logo new.svg" alt="" />
         <h2 className="menuHeader__title">Тест</h2>
      </div>
      <div className="menu__main">
         <p className="menu__subtitle">Главное меню</p>
         <ul className="menu__list">
            <li>
               <a className="menu__link" href="#">
                  <img src="/img/User icon.svg" alt="" />
                  <p>Личный кабинет</p>
               </a>
            </li>
            <li>
               <a className="menu__link" href="#">
                  <img src="/img/instrumentation icon.svg" alt="" />
                  <p>Приборы</p>
               </a>
            </li>
            <li>
               <a className="menu__link" href="#">
                  <img src="/img/plannig icone.svg" alt="" />
                  <p>Планирование</p>
               </a>
            </li>
            <li>
               <a className="menu__link" href="#">
                  <img src="/img/Staff icon.svg" alt="" />
                  <p>Сотрудники</p>
               </a>
            </li>
         </ul>
      </div>
      <div className="menu__system">
         <p className="menu__subtitle">Система</p>
         <ul className="menu__list">
            <li>
            <a className="menu__link" href="#">
                  <img src="/img/settings icon.svg" alt="" />
                  <p>Настройки</p>
               </a>
            </li>
            <li>
            <a className="menu__link" href="#">
                  <img src="/img/help icon.svg" alt="" />
                  <p>Помощь</p>
               </a>
            </li>
         </ul>
      </div>
      <div className="menu__exit">
         <ul className="menu__list">
            <li>
            <a className="menu__link" href="#">
                  <img src="/img/Exit.svg" alt="" />
                  <p>Выйти</p>
               </a>
            </li>
         </ul>
      </div>
   </div>
   );
}

export default Menu;