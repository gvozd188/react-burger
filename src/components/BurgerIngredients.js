import React from 'react';
 import { BurgerIcon, Tab, ArrowUpIcon, Logo, ProfileIcon , ListIcon, Typography, Box, Button} from '@ya.praktikum/react-developer-burger-ui-components'
  const BurgerIngredients =() => {
  const [current, setCurrent] = React.useState('one')
  return (
    <div style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        One
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Two
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Three
      </Tab>
    </div>
  )
}  
 
 
 export default BurgerIngredients