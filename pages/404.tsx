import Head from 'next/head';
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';

import styles from '../styles/404.module.scss';

export default function page404() {
    const year = new Date().getFullYear();
    return (
        <div className={styles.content}>
            <Head>
                <title>Página não encontrada | Happī</title>
            </Head>

            <Player src="https://assets7.lottiefiles.com/packages/lf20_58bmsu1o.json"  background="transparent"  speed={1} style={{ height: '300px', width: '300px' }} loop autoplay></Player>
            <h1>Página não encontrada</h1>
            <p>A página que você tentou procurar não está disponível ou foi removida deste lugar.</p>
            <p><Link href="/"><a>Voltar ao início</a></Link> |  <a target="_blank" href="https://patreon.com/happi">Apoiar</a></p>
            <span>&copy;{year + ` Happī API`}</span>
        </div>
    )
}