import {useContext, createContext, useState} from 'react';
import { themes } from './variables';

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
    theme:"default",
    setTheme:()=>{},
    items_view:"list",
    setItemsView:()=>{}
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}){
    //children all the pages/components insider this provider

    const [theme, setTheme] = useState(initialStates.theme)
    const [items_view, setItemsView] = useState(initialStates.items_view)

    //put in the variables you want to share
    return <MyContext.Provider value={{
        theme, 
        setTheme,
        items_view,
        setItemsView}}>
        <style jsx global>
            {`
            body {
                background-color:${themes[theme].body};
            }
            `}
        </style>
        {children}
    </MyContext.Provider>
}

//use the Context to create Hooks like useTheme

export function useTheme(){
    const {theme, setTheme} = useContext(MyContext);
    return {theme, setTheme};
}

export function useItemsView(){
    const {items_view, setItemsView} = useContext(MyContext);
    return {items_view, setItemsView};
}