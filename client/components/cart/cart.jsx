import { BsHeart, BsClock } from 'react-icons/bs';
import Image from 'next/image';

import style from './cart.module.css';

export default function cart({ name, userName }) {
  return (
    <div className={style.cart_block}>
      <div className={style.cart_img}>
        <div className={style.cart_img_block}>
          <div className={style.cart_block_likes_and_time}>
            <div className={style.cart_block_time}>
              <BsClock className={style.clock} />
              06:30:00
            </div>
            <div className={style.cart_block_like}>
              <BsHeart className={style.like} />
            </div>
          </div>
          <div className={style.no_image_block}>
            <Image className={style.logo_img} src="/images/no_foto.svg" alt="no-image" width={60} height={60} />
          </div>
        </div>
      </div>
      <div className={style.cart_name}>
        <div className={style.cart_details}>
          <div className={style.cart_details_text_name_cart}>
            {name}
          </div>
        </div>
      </div>
      <div className={style.cart_user_name}>
        <div className={style.cart_details}>
          <div className={style.cart_details_text_user_name}>
            {userName}
          </div>
        </div>
      </div>
    </div>
  );
}
