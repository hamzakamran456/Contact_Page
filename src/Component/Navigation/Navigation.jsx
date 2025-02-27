import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <div>
      <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="/public/images/Frame 2 1.png" alt="do some coding logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
