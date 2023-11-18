import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import style from './header.module.css';

export default function header() {
  return (
    <div className={style.header}>
      <div className={style.header_container}>
        <div className={style.logo}>
          <Image className={style.logo_img} src="images/logo_bike.svg" alt="logo" width={60} height={60} />
        </div>
        <div className={style.navigation}>
          <div className={style.navigation_burger}>
            <GiHamburgerMenu className={style.navigation_burger_icon} />
          </div>
          <div className={style.container_navigation}>
            <nav className={style.container_navigation_block}>
              <div className={style.container_navigation_list_item}>
                <Link className={style.link} href="/signin">Авторизация</Link>
              </div>
              <div className={style.container_navigation_list_item}>
                <Link className={style.link} href="/signup">Регистрация</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
