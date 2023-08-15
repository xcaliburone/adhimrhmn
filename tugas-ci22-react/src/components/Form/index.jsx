import styles from './Form.module.css'

export default function Form() {

    return(
        <div className={styles.container}>
            <form action="" className={styles.form}>

                <h1>Form Card</h1>
                <div className={styles.input}>
                    <input type="text" placeholder='username' />
                </div>
                <div className={styles.input}>
                    <input type="email" placeholder='email' />
                </div>
                <div className={styles.input}>
                    <input type="tel" placeholder='no. telp' />
                </div>
                <p>Masukkan foto profil:</p>
                <input type="file" id="profileImage" name="profileImage" accept="image/*" required></input>

            </form>
        </div>
    );
}