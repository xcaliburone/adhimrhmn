// butuh username, email, phone, id

import styles from './ContactCard.module.css';
import profilePic from '../../assets/profilePic.png'
import trashBin from '../../assets/trashBin.png'

export default function ContactCard() {

    // const card = [ 'profil', 'username', 'email', 'telp']

    return(
        <div className={styles.container}>     
            <div className={styles.cards}>
                <h1>TEST</h1>
                <Card />
            </div>
        </div>
    );
}


function Card() {
    return (

        <div className={styles.card}>
            <img src={profilePic} alt="profile-pic" />
            <div className={styles.content}>
                
            </div>
            <img src={trashBin} className={styles.trashBin} />
            {/* <img src={trashBin} className='trashBin' /> */}
            {/* <button>&times;</button> */}
        </div>

    )
}