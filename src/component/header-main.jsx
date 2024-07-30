import React from "react";
import "../styles/header-main.scss";
import { BittaHola, MainKonec, Mishka } from "../resource";

const HeaderMain = () => {
  console.log(screen);
  return (
    <div className="HeaderMain">
      <div className="main">
        <div className="elipsess"></div>
        <div className="offer">
          <p>Запишитесь на курс</p>
          <p className="neyro">
            нейро <br />
            <span>педагогика</span>
          </p>
          <div className="ofsss">
            <i className="fa-solid fa-circle-check"></i>
            <p>
              Получите рабочие инструменты от эксперта практика и решите текущие
              вопросы
            </p>
          </div>
          <div className="special_kurs">
            <p className="elipse-l"></p>
            <p className="elipse-r"></p>
            <p className="top">специальная стоимость</p>
            <p className="bot">
              <span>5000₽</span>2900₽
            </p>
          </div>
          <button>принять участие</button>
        </div>
        <div className="employee">
          <img src={BittaHola} alt="img" />
          <h3>
            <span>Ведущий курса</span>
            <span>Хотылева татьяна</span>
            кандидат педагогических наук, эксперт в области инклюзивного
            образования
          </h3>
        </div>
        <img src={Mishka} alt="" className="mishka" />
      </div>
      <div className="kursDlyaVas">
        <img className="mainKonec" src={MainKonec} alt="img" />
        <h2>этот курс для вас, если</h2>
        <div className="boxes-kurs">
          <div className="pochemu">
            <p>
              Вам кажется, что вы ничему не можете научить ребенка (режимные
              моменты и говорить спасибо)
            </p>
            <img src={BittaHola} alt="" />
          </div>
          <div className="pochemu">
            <p>
              Вам кажется, что вы ничему не можете научить ребенка (режимные
              моменты и говорить спасибо)
            </p>
            <img src={BittaHola} alt="" />
          </div>
          <div className="pochemu">
            <p>
              Вам кажется, что вы ничему не можете научить ребенка (режимные
              моменты и говорить спасибо)
            </p>
            <img src={BittaHola} alt="" />
          </div>
          <div className="pochemu">
            <p>
              Вам кажется, что вы ничему не можете научить ребенка (режимные
              моменты и говорить спасибо)
            </p>
            <img src={BittaHola} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
