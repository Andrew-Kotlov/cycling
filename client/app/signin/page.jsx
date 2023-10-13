import style from './signin.module.css';

export default function Home() {
  return (
    <div className={style.signin_container}>
      <div className={style.signin_form}>
        <form className={style.signin_form_container}>
          <div className={style.form_block}>
            <h1>Войти в профиль</h1>
          </div>
          <div className={style.form_block}>
            <label htmlFor="email">Введите логин</label>
            <input type="text" placeholder="example@example" />
          </div>
          <div className={style.form_block}>
            <label htmlFor="password">Введите пароль</label>
            <input type="text" placeholder="QsWFbdL12" />
          </div>
          <div className={style.form_block}>
            <button type="button">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
