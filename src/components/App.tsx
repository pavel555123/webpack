import classes from './App.module.scss'
import {useState} from "react"
import {Link} from "react-router-dom"
import AvatarPng from '@/assets/b.png'
import AvatarJpg from '@/assets/a.jpg'
import Image from '@/assets/c.svg'

export const App = () => {
    const [count, setCount] = useState(0);

    // if(_PLATFORM_ === 'desktop') {
    //     return <div>DESKTOP</div>
    // }
    //
    // if(_PLATFORM_ === 'mobile') {
    //     return <div>MOBILE</div>
    // }

    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)

    return (
        <div data-testid='App.DataTestId'>
            <h1 data-testid='Platform'>Platform={_PLATFORM_}</h1>
            <div>
                <img src={AvatarJpg} alt='image' width={50} height={50}/>
                <img src={AvatarPng} alt='image' width={50} height={50}/>
            </div>
            <div>
                <Image className={classes.icon} width={30} height={30} fill='red'/>
            </div>
            <Link to='/about'>About</Link>
            <Link to='/shop'>Shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.btn} onClick={increment}>+</button>
            <button className={classes.btn} onClick={decrement}>-</button>
        </div>
    )
}