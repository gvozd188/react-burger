    import React from 'react';
    import { BurgerIcon,  Logo, ProfileIcon , ListIcon, Typography, Box} from '@ya.praktikum/react-developer-burger-ui-components'
    import "../App.css"
import BurgerIngredient from './BurgerIngredients'

    function Header () {
        return (
        
            <>
            <header>
                
              <nav>
                <BurgerIcon type="primary" className = "App-header "/>
         Конструктор
    
          
            
            
                <ListIcon type="primary" /> 
            Лента заказов
            
            <Logo />
            <ProfileIcon type="primary" />
            Личный кабинет
            </nav>
            </header>
            <BurgerIngredient/>
            </>
    
    

        );
    }
    export default Header;