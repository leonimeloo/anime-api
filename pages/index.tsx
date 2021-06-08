import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import styles from '../styles/home.module.scss';

const year = new Date().getFullYear();

export default function Home() {
  const [search, setSearch] = useState('');
  const [resultData, setResultData] = useState(null);

  const handleLogin = async event => {
    event.preventDefault();
  
    if (!search) return;

    try {
      if (process.env.NODE_ENV === 'development') {
        const response = await axios.get(`http://localhost:3000/api/example/anime/search/${search}`);
        console.log(process.env.API_URL);
        setResultData(response.data)
      } else {
        const response = await axios.get(process.env.API_URL + `${search}`);
        console.log(process.env.API_URL);
        setResultData(response.data)
      }
      
    } catch (err) {
      console.error(err)
    }
  };
  return (
    <>
    <div className={styles.content}>
      <Head>
        <title>Happī - Portuguese Anime API</title>
      </Head>

      <div className={styles.centerContent}>
          <h1>Happī API</h1>
          <h3>anime e mangá api totalmente em português</h3>
        </div>

      <div className={styles.leftContent}>
          <p className={styles.description}>Happī é uma API REST que fornece informações em português 
          sobre animes e mangás. Pensada e criada para compensar a falta de API's na nossa linguagem, foi 
          feita 100% em português. Ele busca informações de diversas fontes confiáveis, como Crunchyroll, e 
          reúne tudo nessa API.
          </p>
          <Link href="/about"><a><button className={styles.btnLearnMore}>Saiba mais</button></a></Link>
          <Link href="/documentation"><a><button className={styles.btnGetStarted}>Iniciar</button></a></Link>
      </div>

      <div className={styles.rightContent}>
        <div className={styles.apiSearch}>
          <p>Teste a API pesquisando um anime/mangá:</p>
          <input type="text" name="query" placeholder="Pesquise por um nome de anime ou mangá, ex: jujutsu kaisen." value={search} onChange={e => setSearch(e.target.value)}></input>
          <button onClick={handleLogin} type="submit">GO</button>
          <p>{ resultData === null ? 'O resultado aparecerá abaixo:' : 'Resultado:'}</p>
          {resultData === null ? <span /> : <SyntaxHighlighter language="json" style={dracula} showLineNumbers={true}>{ JSON.stringify(resultData, null, '\t') }</SyntaxHighlighter> }
        </div>
      </div> 
    </div>

    <div className={styles.patreon}>
      <a target="_blank" href="https://patreon.com/happi"><button type="button"><svg viewBox="0 0 569 546" xmlns="http://www.w3.org/2000/svg"><g><circle cx="362.589996" cy="204.589996" data-fill="1" id="Oval" r="204.589996"></circle><rect data-fill="2" height="545.799988" id="Rectangle" width="100" x="0" y="0"></rect></g></svg><span>Ser um patrocinador</span></button></a>
      <h5>Por favor, se gosta do nosso serviço, considere apoiar-nos para continuarmos funcionando.</h5>
    </div>

    <div className={styles.applications}>
      <div className={styles.descApps}>
      <h2>Crie sua própria aplicação</h2>
      <h4>Concentre-se apenas no seu aplicativo e deixe o resto com a gente.</h4>
      <p>Inclusive, nós adoramos ver o que vocês criam com nossos serviços.</p>
      <a href="http://"><button>Envie para nós</button></a>
      </div>
      <Player src="https://assets3.lottiefiles.com/animated_stickers/lf_tgs_v66fdky5.json"  background="transparent"  speed={1}  style={{width: '250px', height: '250px', float: 'right', marginRight: '15rem', marginTop: '0.97rem'}} loop autoplay></Player>
    </div>

    <div className={styles.patrons}>
      <hr />
      <h2>Patrocinadores</h2>
      <p>Sem essas pessoas, não seria possível continuar.</p>

      <a target="_blank" href="https://patreon.com/happi"><button type="button"><svg viewBox="0 0 569 546" xmlns="http://www.w3.org/2000/svg"><g><circle cx="362.589996" cy="204.589996" data-fill="1" id="Oval" r="204.589996"></circle><rect data-fill="2" height="545.799988" id="Rectangle" width="100" x="0" y="0"></rect></g></svg><span>Ser um patrocinador</span></button></a>
      <p>No momento, não temos patrocinadores, porém você pode ser o primeiro a contribuir para a manutenção deste serviço no <a target="_blank" href="https://patreon.com/happi">patreon.</a></p>
    </div>

    <footer className={styles.footer}>
      <span>&copy;{year + ' - Happī'}</span>
      <span><a target="_blank" href="https://github.com/Happi-API">GitHub</a></span>
      <p>This website design is inspired by <a target="_blank" href="https://jikan.moe">Jikan</a>, but we don't use any features of them.</p>
    </footer>
    </>
  )
}

