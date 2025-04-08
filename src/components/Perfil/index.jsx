import styles from './Perfil.module.css'

// export default () => {
const Perfil = ({ nomeUsuario }) => {
    //export default function () {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )

}

// }
export default Perfil;