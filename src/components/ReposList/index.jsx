import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })
    }, [nomeUsuario])

    return (
        <div class="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
            <ul className={styles.list}>
                {repos.map(({ id, name, language, html_url }) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> {name} <br />
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> {language} <br />
                        </div>
                        <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                    </li>
                ))}
                <li>Repositório</li>
            </ul>
            )}
            {/* <ul>
            {repos.map(({ id, name, language, html_url }) => (
                <li key={id}>
                    <b>Nome:</b> {name} <br />
                    <b>Liguagem:</b> {language} <br />
                    <a target="_blank" href={html_url}>Visitar no Github</a> <br />
                </li>
            ))}
        </ul> */}
        </div>
    )
}

export default ReposList;