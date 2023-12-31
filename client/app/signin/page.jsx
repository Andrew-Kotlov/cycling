import Link from 'next/link';
import style from './signin.module.css';

export const metadata = {
  title: 'Авторизоваться',
  description: 'Generated by create next app',
};

export default function Home() {
  return (
    <div className={style.signin_container}>
      <div className={style.signin_form}>
        <form className={style.signin_form_container}>
          <div className={style.form_block}>
            <h1>Велопрогулки</h1>
          </div>
          <div className={style.form_block}>
            <div className={style.name_and_link}>
              <div className={style.name_and_link_block}>
                <h4>
                  Войти
                </h4>
              </div>
              <div className={style.name_and_link_block}>
                <Link className={style.link} href="/signup">Создать новый аккаунт</Link>
              </div>
            </div>
            <input type="text" placeholder="Введите логин" />
          </div>
          <div className={style.form_block}>
            <input type="text" placeholder="Введите пароль" />
          </div>
          <div className={style.form_block}>
            <button type="button">
              Продолжить в приложении
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
