import styles from '../styles/components/Profile.module.css'

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/eduardo-developer01.png" alt="user github Eduardo-developer01" />
      <div>
        <strong>Eduardo sivla</strong>
        <p>
          <img src="icons/level.svg" alt="icone for virw level" />
          Level 1
        </p>
      </div>
    </div>
  )
}
