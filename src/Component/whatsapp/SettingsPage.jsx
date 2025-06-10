export default function Settings() {

  const styles = {
    maxWidth: '400px', 
    border: '1px solid red',
    height: '400px',
    margin: '0 auto',
    overflow: 'scroll',
    scrollbarWidth: 'none'
  }

  const profile = [{id: 0, imgType: 'image'}, {id: 1, imgType: 'icon'}]
  const message = [{}, {}, {}, {}]
  const account = [{}, {}, {}, {}, {}]
  const help = [{}, {}]
  const socials = [{}, {}, {}]

  return(
    <div style={styles}>
      <SettingSection setting={profile}/>
      <SettingSection setting={message}/>
      <SettingSection setting={account}/>
      <SettingSection setting={help}/>
      <SettingSection setting={socials}/>
    </div>
  )
}


function SettingSection({setting}) {
  const styles = {
    margin: '20px 10px', 
    backgroundColor: 'grey', 
    borderRadius: '10px'
  }

  return(
    <div style={styles}>
      {setting.map((item) => {
        return item.imgType === 'image'
        ? <Profile /> : <SettingList />
      })}
    </div>
  )
}

function SettingList({title, icon}) {
  const styles = {
    minHeight: '20px', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '20px', 
    // borderBottom: '1px solid white'
  }

  return(
    <div style={styles}>
      <ion-icon name={"disc-outline"}></ion-icon>
      <p>name</p>
    </div>
  )
}

function Profile() {
  const styles = {display: 'flex', alignItems: 'center', gap: '10px'}

  return(
    <div style={styles}>
      <img width={'30px'} src="../.././src/assets/react.svg" alt="react-img" /> 
      Your Name
    </div>
  )
}