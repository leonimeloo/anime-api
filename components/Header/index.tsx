import Link from 'next/link';

import styles from '../../styles/header.module.scss';

export function Header () {
    return (
        <header className={styles.header}>

        <ul>
          <li><Link href="/"><a><img className="logo" src="/logo.png" /></a></Link></li>
          <li><Link href="/documentation"><a>Documentação</a></Link></li>
          <li><Link href="/explore"><a>Explorar</a></Link></li>
          <li><Link href="/about"><a>Sobre</a></Link></li>
          <li><a target="_blank" href="https://patreon.com/happi">Apoiar</a></li>
          <li><Link href="/faq"><a>FAQ</a></Link></li>
        </ul>

      </header>
    )
}