import Link from "next/link";
import styles from './links.module.css';

const Links = () =>
{
    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        }
    ];
    return (
        <div className={styles.links}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.path}>
                    {link.title}
                </Link>))
            }
        </div>
    );
};

export default Links;