import Image from 'next/image';
import { CiGlobe } from 'react-icons/ci';
import { IoShareOutline } from 'react-icons/io5';
import { IoIosMore } from 'react-icons/io';
import { FaTelegramPlane, FaYandex } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';

import style from './profile.module.css';

export const metadata = {
  title: 'Профиль',
  description: 'Generated by create next app',
};

export default function Profile() {
  return (
    <div className={style.container}>
      <div className={style.profile_top}>
        {/* <Image
          // className={style.avatar_img}
          src="/images/poster_profile.jpg"
          alt="no-image"
          // width={3125}
          height={350}
          quality={100}
          priority
          style={{ objectFit: 'cover' }}
        /> */}
      </div>
      <div className={style.container_profile}>
        <div className={style.data_profile}>
          <div className={style.profile_avatar}>
            <Image
              className={style.avatar_img}
              src="/images/avatar.jpg"
              alt="no-image"
              width={250}
              height={250}
              quality={75}
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={style.profile_user_data}>
            <h2>Kotlova Anastasia</h2>
            <p>Designer, Illustrator 3D</p>
          </div>
          <div className={style.profile_user_about}>
            Привет! Меня зовут Анастасия, я дизайнер и иллюстратор.
            Я обожаю создавать красивые и уникальные иллюстрации, которые могут передать эмоции и вдохновить людей.
          </div>
          <div className={style.profile_user_site}>
            <CiGlobe /> https://www.flaticon.com
          </div>
          <div className={style.profile_user_button}>
            <div className={style.user_btn_block}>
              <button type="button">Изменить</button>
            </div>
            <div className={style.user_btn_block}>
              <button type="button">
                <IoShareOutline />
              </button>
            </div>
            <div className={style.user_btn_block}>
              <button type="button">
                <IoIosMore />
              </button>
            </div>
          </div>
          <div className={style.profile_user_link_socials}>
            <div className={style.profile_user_link_btn}>
              <FaTelegramPlane />
            </div>
            <div className={style.profile_user_link_btn}>
              <SlSocialVkontakte />
            </div>
            <div className={style.profile_user_link_btn}>
              <FaYandex />
            </div>
          </div>
          <div className={style.profile_user_date_reg}>
            <div className={style.borderline} />
            <div className={style.date_reg}>
              Member since sep 11, 2023
            </div>
          </div>
        </div>
        <div className={style.data_profile_track}>
          4
        </div>
      </div>
    </div>
  );
}