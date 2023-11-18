import style from './Footer.module.css';

export default function footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.footer_content}>
          © 2023 Велопрогулки. Все права защищены
        </div>
      </div>
    </div>
  );
}
