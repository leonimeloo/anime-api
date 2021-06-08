import Head from 'next/head';
import Link from 'next/link';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

import styles from '../styles/faq.module.scss';

export default function FAQ() {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Head>
                <title>FAQ | Happī</title>
            </Head>

            <div className={styles.contentTop}>
                <h1>Perguntas frequentes</h1>
                <h5>Algumas questões que você talvez esteja interessado em saber.</h5>
            </div>

            <div className={styles.otherContent}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={styles.expandPanel}>
                    <AccordionSummary expandIcon={<i className="fi fi-angle-down" />} aria-controls="panel1bh-content" id="panel1bh-header">
                        <Typography className={styles.question}>A API é gratuita?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={styles.answer}>
                            É gratuita para uso não comercial e é obrigatório citar a Happī como fonte dos seus dados. Porém, alguns recursos especiais estão disponíveis só para patrocinadores.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={styles.expandPanel}>
                    <AccordionSummary expandIcon={<i className="fi fi-angle-down" />} aria-controls="panel1bh-content" id="panel1bh-header">
                        <Typography className={styles.question}>Como a API funciona? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={styles.answer}>
                            A API é uma indexadora de links, assim como o Google.com, ela faz uma pesquisa em várias fontes de animes e reúne todos os dados (nomes, descrições, episódios, links, etc). Sendo assim, apenas incorporamos os resultados nos nosso dados, sem hospedar nada em nossos servidores.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={styles.expandPanel}>
                    <AccordionSummary expandIcon={<i className="fi fi-angle-down" />} aria-controls="panel1bh-content" id="panel1bh-header">
                        <Typography className={styles.question}>Qual a diferença entre o uso comercial e o desenvolvedor?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={styles.answer}>
                            Uso comercial é quando se tem a intenção de lucrar/gerar receita, e uso desenvolvedor é para aplicações sem fins lucrativos.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={styles.expandPanel}>
                    <AccordionSummary expandIcon={<i className="fi fi-angle-down" />} aria-controls="panel1bh-content" id="panel1bh-header">
                        <Typography className={styles.question}>Por que contribuir? Como posso fazer isso?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={styles.answer}>
                            Servidores, hospedagem, tudo é pago. Nós precisamos de contribuição para continuarmos funcionando e aprimorar os serviços, você pode contribuir no <a target="_blank" href="https://patreon.com/happi">patreon</a>.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className={styles.expandPanel}>
                    <AccordionSummary expandIcon={<i className="fi fi-angle-down" />} aria-controls="panel1bh-content" id="panel1bh-header">
                        <Typography className={styles.question}>Por que usar a API?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={styles.answer}>
                            A API é uma maneira rápida e segura de obtenção de dados. Além de excluir o fato de ter que se preocupar como obter os dados, já que fazemos esse trabalho para você.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className={styles.expandPanel}>
                    <AccordionSummary expandIcon={<i className="fi fi-angle-down" />} aria-controls="panel1bh-content" id="panel1bh-header">
                        <Typography className={styles.question}>É fácil usar a API?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={styles.answer}>
                            Sim é fácil, pois a API fornece dados em JSON, um dos formatos compatíveis com aplicações de qualquer plataforma (mobile, desktop, TV, web, etc) e qualquer linguagem de programação, além de ser muito popular e bastante usado por desenvolvedores.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className={styles.expandPanel}>
                    <AccordionSummary expandIcon={<i className="fi fi-angle-down" />} aria-controls="panel1bh-content" id="panel1bh-header">
                        <Typography className={styles.question}>Encontrei um bug! O que fazer?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={styles.answer}>
                            Nós estamos sempre atentos para que nada disso ocorra e atrapalhe, mas se acontecer, por favor, entre em contato no nosso <a href="mailto:happieservices@gmail.com">email</a> e descreva tudo sobre o problema.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className={styles.expandPanel}>
                    <AccordionSummary expandIcon={<i className="fi fi-angle-down" />} aria-controls="panel1bh-content" id="panel1bh-header">
                        <Typography className={styles.question}>Estou com dúvidas! E agora?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={styles.answer}>
                            Você pode olhar nossa <Link href="/documentation"><a>documentação</a></Link>, ou tirar suas dúvidas pelo nosso email.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className={styles.expandPanel}>
                    <AccordionSummary expandIcon={<i className="fi fi-angle-down" />} aria-controls="panel1bh-content" id="panel1bh-header">
                        <Typography className={styles.question}>Minhas perguntas não foram respondidas aqui. Como proceder?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={styles.answer}>
                            Acalme-se, vamos responder tudinho no nosso email, é só mandar! :)
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            <br />
            <br />
            <br />
            </div>
        </div>
    )
}