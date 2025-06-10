import { createContext, useContext, useReducer, useState } from 'react';
import { NavContainer } from './Component/whatsapp/NavContainer';
import { NavItems } from './Component/whatsapp/NavContainer';
import { StatusPage } from './Component/whatsapp/StatusPage';
import { CallsPage } from './Component/whatsapp/CallsPage';
import { Communities } from './Component/whatsapp/CommunitiesPage';
import { ChatPage } from './Component/whatsapp/ChatPage';
import  Settings  from './Component/whatsapp/SettingsPage';

const NavItemsDispatchContext = createContext(null)
 
function App() {

const navItemsStatus = [
  {name: 'updates', clicked: false},
  {name: 'calls', clicked: false},
  {name: 'communities', clicked: false},
  {name: 'chats', clicked: true},
  {name: 'settings', clicked: false}
]

const [navItems, dispatch] = useReducer(reducer, navItemsStatus)

  return (
   <div style={{marginTop: '50px'}}>
    {navItems[0].clicked && <StatusPage />}
    {navItems[1].clicked && <CallsPage />}
    {navItems[2].clicked && <Communities />}
    {navItems[3].clicked && <ChatPage />}
    {navItems[4].clicked && <Settings />}

    <NavContainer >
      <NavItemsDispatchContext value={dispatch}>
        <NavItems 
          icon={navItems[0].clicked ? "disc" : "disc-outline"} 
          title="updates"
        />
        <NavItems 
          icon={navItems[1].clicked  ? "call" : "call-outline"}  
          title="calls"
        />
        <NavItems 
          icon={navItems[2].clicked  ? "people" : "people-outline"} 
          title="communities"
        />
        <NavItems 
          icon={navItems[3].clicked  ? "chatbubbles" : "chatbubbles-outline"}  
          title="chats"
        />
        <NavItems 
          icon={navItems[4].clicked  ? "cog" : "cog-outline"}  
          title="settings"
        />
      </NavItemsDispatchContext>
    </NavContainer>
   </div>
  )
}

export default App


function reducer(navItems, action) {
  switch (action.name) {
    case 'updates': { return updateNavItems(navItems, action) }

    case 'calls': { return updateNavItems(navItems, action) }
     
     case 'communities': { return updateNavItems(navItems, action) }

    case 'chats': { return updateNavItems(navItems, action) }
      
     case 'settings': { return updateNavItems(navItems, action) }  
  
    default: {console.log('unknown action name')}
      break;
  }
}

// a function that return useContext with the value of createContext
export function useNavDispatch() {
  return useContext(NavItemsDispatchContext)
}

// this function is passed to every switch case of the reducer function to run
function updateNavItems(navItems, action) {
  return [...navItems].map((item) => {
    if (item.name === action.name) {
      item.clicked = true
      return item
    } else {
      item.clicked = false
      return item
    }
  })
}