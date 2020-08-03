import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQE23yRU623gag/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=7cXprrWK13KYEl7fIAQbwzUSeveAn6Sp_UOX524g2wE"
          alt="André Lago"
        />
        <div>
          <strong>André Lago</strong>
          <span>Teoria Musical</span>
        </div>
      </header>
      <p>Pesquisador e amante de música boa</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 30,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="ícone Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
