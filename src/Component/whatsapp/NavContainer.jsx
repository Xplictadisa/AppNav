import { useNavDispatch } from "../../App"

export function NavContainer({children}) {
 const styles = {
    padding: '10px',
    border: '1px solid red',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '400px',
    margin: '0 auto' ,
 }

  return(
    <div style={styles}>
      {children}
    </div>
  )
}

export function NavItems({icon, title}) {
  const dispatch = useNavDispatch()
  const handleClick = () => {dispatch({name: title})}
  const iconStyles = icon.includes('outline') ? {} : {fontWeight: 'bold'} 

  const styles = {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center'
  }

  return(
    <div style={styles} onClick={handleClick}>
      <ion-icon  name={icon}></ion-icon>
      <small style={iconStyles}
        >{title}
      </small>
    </div>
  )
}