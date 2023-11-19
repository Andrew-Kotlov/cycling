import style from './createroute.module.css';

export default function page() {
  return (
    <div className={style.container}>
      <div className={style.create_container}>
        <div className={style.add_description}>
          <div className={style.name_page}>
            <h1>Создай свой маршрут</h1>
          </div>
          <div className={style.name_input}>
            <p>Название маршрута</p>
            <input type="text" />
          </div>
          <div className={style.name_input}>
            <p>Описание</p>
            <input type="text" />
          </div>
          <div className={style.name_input}>
            <p>Тип транспорта</p>
            <select id="cities">
              <option value="Naples">МТБ</option>
              <option value="London">Грэвел</option>
              <option value="Berlin">Шоссе</option>
            </select>
          </div>
          <div className={style.name_input}>
            <p>Сложеность маршрута</p>
            <select id="cities">
              <option value="Naples">Легко</option>
              <option value="London">Средне</option>
              <option value="Berlin">Сложно</option>
            </select>
          </div>
          <div className={style.name_input}>
            <p>Выезд на автодорогу</p>
            <select id="cities">
              <option value="Naples">Автодорога</option>
              <option value="London">Велодорога</option>
              <option value="London">Гибрид</option>
            </select>
          </div>
          <div className={style.name_input}>
            <p>Тип маршрута</p>
            <select id="cities">
              <option value="Naples">Тренировка</option>
              <option value="London">Прогулка</option>
            </select>
          </div>
        </div>
        <div className={style.add_maps_route}>
          1
        </div>
      </div>
    </div>
  );
}
