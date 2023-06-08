    import React from 'react';
    import { BurgerIcon, Tab, Logo, Icons, Typography} from '@ya.praktikum/react-developer-burger-ui-components'
    
    function Header () {
        return (
        
            <>
            <header>
                
              <nav>
                <BurgerIcon />
         Конструктор
          </nav>
            
            <nav>
                <ListIcon />
            Лента заказов
            </nav>
            </header>
            
            </>
    
    

        );
    }
    export default Header;