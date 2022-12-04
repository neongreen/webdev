import styles from './code-ann.module.scss'
import { BiError, BiCheckCircle } from 'react-icons/bi'

export function CodeAnn(
  props: { children: React.ReactNode } & ({ error: string } | { warn: string } | { ok: string })
) {
  return (
    <div className={`${styles.codeAnn} code-ann`}>
      {props.children}
      {'error' in props && (
        <div className={`${styles.error} mono`}>
          <BiError className={styles.icon} />
          {props.error}
        </div>
      )}
      {'warn' in props && (
        <div className={`${styles.warn} mono`}>
          <BiError className={styles.icon} />
          {props.warn}
        </div>
      )}
      {'ok' in props && (
        <div className={`${styles.ok} mono`}>
          <BiCheckCircle className={styles.icon} />
          {props.ok}
        </div>
      )}
    </div>
  )
}
