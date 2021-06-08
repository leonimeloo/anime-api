import Head from 'next/head';

import styles from '../styles/about.module.scss';

export default function About() {
    return (
        <div className={styles.content}>
            <Head>
                <title>Sobre nós | Happī</title>
            </Head>
            <h3>Introdução:</h3>
            <div className={styles.desc}>
            <p>Happī é uma API que fornece diversas informações completas, e em português sobre animes e mangás. Ele busca dados de diversos sites confiáveis, como Crunchyroll, e reúne tudo em uma só API, por isso é tão completa.</p>
            <p>A razão pela qual foi criada, é ajudar diversos desenvolvedores a criarem seus próprios aplicativos, com um serviço consistente, sempre em manutenção e sem falhas, e não precisar buscar seus próprios dados. Isso permite que o dev se concentre apenas no necessário.</p>
            </div>
            <h3>História:</h3>
            <div className={styles.desc}>
            <p>A  ideia surgiu da necessidade de dados sobre animes em português, já que esse era um serviço que existia apenas em outras linguagens, e ficava difícil para quem não domina outros idiomas. Isso facilita, pois não tem a necessidade de ficar traduzindo e tomando seu precioso tempo.</p>
            <div className={styles.support}><span>Por favor, se gosta do nosso serviço, considere nos <strong><a href="http://patreon.com/happi">apoiar no patreon</a></strong>, para que possamos continuar ativos.</span></div>
            </div>
            <br />
            <hr />
            <div className={styles.btn}>
            <a href="http://patreon.com/happi"><button>Apoiar</button></a>
            <a href="https://github.com/Happi-API"><button>GitHub</button></a>
            </div>
        </div>
    )
}