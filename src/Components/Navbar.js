import React from 'react';

const NavBar = () => {
    return (
        <div style={styles.navContainer}>
            <nav style={styles.navbar}>
                <ul style={styles.navList}>
                    <li><a href="#home" style={styles.link}>Home</a></li>
                    <li><a href="#education" style={styles.link}>Education</a></li>
                    <li><a href="#skills" style={styles.link}>Skills</a></li>
                    <li><a href="#codingprofiles" style={styles.link}>Coding-Profiles</a></li>
                    <li><a href="#work" style={styles.link}>MyWork</a></li>
                    <li><a href="#contact" style={styles.link}>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

const styles = {
    navContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        color: 'white',
        padding: '15px 0',
        textAlign: 'center',
        fontSize: '20px',
        backgroundColor: 'black',
        zIndex: 1000,
    },
    navbar: {
        display: 'flex',
        justifyContent: 'center',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        gap: '30px',
        padding: 0,
        margin: 0,
    },
    navItem: {
        fontSize: '1.1rem',
        color: 'white',
    },
    link: {
        textDecoration: 'none',
        padding: '8px 12px',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
        color: 'white',
    },
    linkHover: {
        backgroundColor: '#444',
    },
};

export default NavBar;
