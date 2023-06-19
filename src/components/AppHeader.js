    import React from 'react';
    import { BurgerIcon, Tab, Logo, ProfileIcon , ListIcon, Typography} from '@ya.praktikum/react-developer-burger-ui-components'
    
    function Header () {
        return (
        
            <>
            <header>
                
              <nav>
                <BurgerIcon className = "App-header "/>
         Конструктор
          </nav>
            
            <nav>
                <ListIcon type="primary" /> 
            Лента заказов
            </nav>
            <Logo />
            <ProfileIcon type="primary" />
            </header>
            
            </>
    
    

        );
    }
    export default Header;