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
                <div className={styles.detail}>
                    <Image src="https://images.pexels.com/photos/20988789/pexels-photo-20988789/free-photo-of-cup-of-coffee-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="avatar" width={50} height={50} className={styles.avatar} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, similique vel vitae libero eum perferendis nam fugiat commodi recusandae voluptates optio sapiente, minus ratione deleniti tempora repellat exercitationem illum ipsum.
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;