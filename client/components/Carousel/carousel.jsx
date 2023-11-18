import Cart from '../cart/cart';

import style from './carousel.module.css';

const data = [
  {
    nameTrack: 'Ветреные покатушки',
    userName: 'Воронов Велор Валерьевич',
  },
  {
    nameTrack: 'По следам приключений',
    userName: 'Муравьёв Даниил Геннадиевич',
  },
  {
    nameTrack: 'Велосипедные экскурсии',
    userName: 'Бирюков Казимир Лукьянович',
  },
];

const data2 = [
  {
    nameTrack: 'По дорогам природы',
    userName: 'Поляков Виссарион Онисимович',
  },
  {
    nameTrack: 'Колесные приключения',
    userName: 'Селиверстов Феликс Улебович',
  },
  {
    nameTrack: 'Велотуры в природу',
    userName: 'Самсонов Илья Макарович',
  },
];
const data3 = [
  {
    nameTrack: 'Под небом и ветром',
    userName: 'Зиновьев Трофим Владимирович',
  },
  {
    nameTrack: 'Педали вдоль троп',
    userName: 'Лапин Тихон Васильевич',
  },
  {
    nameTrack: 'Велосезоны',
    userName: 'Сазонов Семен Максимович',
  },
];

export default function carousel() {
  return (
    <div className={style.carousel_container}>
      <div className={style.carousel_container_block}>
        <div className={style.block_cart}>
          {data.map((el) => (
            <Cart name={el.nameTrack} userName={el.userName} />
          ))}
        </div>
        <div className={style.block_cart}>
          {data2.map((el) => (
            <Cart name={el.nameTrack} userName={el.userName} />
          ))}
        </div>
        <div className={style.block_cart}>
          {data3.map((el) => (
            <Cart name={el.nameTrack} userName={el.userName} />
          ))}
        </div>
      </div>
    </div>

  );
}
