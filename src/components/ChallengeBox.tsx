import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ChallengeBox.module.css'
  
export default function ChallengeBox() {
  
  const { hasActiveChallenge, resetChallenge } = useContext(ChallengeContext)
  
  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header> Ganhe {hasActiveChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Desafio</strong>
            <p>{hasActiveChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalizando o desafio ganhara uma reconpença</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            Avance de level completando desafios.
          </p>
        </div>
      ) }
    </div>
  )
}
