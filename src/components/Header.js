const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    nav: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        listStyleType: 'none',
    },
    li: {
        margin: '1rem'
    }

}

export default function Header() {
    return (
        <header style={styles.header}>
            <h1>Melvin</h1>
            <nav style={styles.nav}>
                <li style={styles.li}><a href='/about'>About</a></li>
                <li style={styles.li}><a href='/project'>Projects</a></li>
                <li style={styles.li}><a href='/resume'>Resume</a></li>
                <li style={styles.li}><a href='/contact'>Contact</a></li>
            </nav>
        </header>
    )
}