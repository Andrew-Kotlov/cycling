import Link from 'next/link';
import style from './signup.module.css';

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
                  Регистрация
                </h4>
              </div>
              <div className={style.name_and_link_block}>
                <Link className={style.link} href="/signin">Войти в аккаунт</Link>
              </div>
            </div>
            <input type="text" placeholder="Придумайте логин" />
          </div>
          <div className={style.form_block}>
            <input type="text" placeholder="Введите email" />
          </div>
          <div className={style.form_block}>
            <input type="text" placeholder="Введите фамилию" />
          </div>
          <div className={style.form_block}>
            <input type="text" placeholder="Введите имя" />
          </div>
          <div className={style.form_block}>
            <input type="text" placeholder="Введите отчество" />
          </div>
          <div className={style.form_block}>
            <button type="button">
              Создать новый аккаунт
            </button>
          </div>
        </form>
      </div>
      <div className={style.about_company}>
        <p>
          © 2023 Велопрогулки. Все права защищены
        </p>
      </div>
    </div>
  );
}