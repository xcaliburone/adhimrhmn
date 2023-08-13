// butuh username, email, phone, id

import Styles from './ContactCard.module.css';
// import PropTypes from 'prop-types';


export default function ContactCard() {

    const card = [ 'profil', 'username', 'email', 'telp']

    return(
        <>
            <div className={Styles.container}>
                
                <div className="profil">
                    {/* <img src={profil} alt="" /> */}
                </div>

            </div>
        </>
    );
}