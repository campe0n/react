const styles = {
    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }, 
    button: {
        margin: '0 0.5rem',
    }
}

export default function Footer() {
    return (
        <div style={styles.div}>
            <a href="https://github.com/campe0n"><button style={styles.button}>Github</button></a>
            <a href="https://www.linkedin.com/in/melvin-finn-00a910206/"><button style={styles.button}>LinkedIn</button></a>
        </div>
    )
}