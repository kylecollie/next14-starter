import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostPage = () =>
{
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/20988789/pexels-photo-20988789/free-photo-of-cup-of-coffee-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Single Post</h1>
            </div>
        </div>
    );
};

export default SinglePostPage;