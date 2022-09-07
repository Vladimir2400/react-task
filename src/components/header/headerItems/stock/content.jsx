import './content.css'
import React from "react";
import invalidy from "../../../../images/invalidy.jpg";
import TimerShow from "../../../../scripts/timer/timer";



const Content = () => {
    return (
        <div className="main__content">
            <div className="main__content-menu">
                <h2 className="main__content-menu-h1">ВСЕРОССИЙСКАЯ ИНКЛЮЗИВНАЯ АКЦИЯ</h2>
                <h2 className="main__content-menu-h2">МУЗЕЙ ДЛЯ ВСЕХ</h2>
                <div className="main__content-menu-text">
                    <p className="main__content-menu-text-p">Выставки, экскурсии, концерты, театральные квесты</p>
                    <p className="main__content-menu-text-p">и мастер-классы для детей и взрослых, с инвалидностью и
                        без.</p>
                </div>
                <p className="main__content-menu-p4">18-20 АПРЕЛЯ 2020</p>
                <div className="main__content-menu-stock">
                    <TimerShow/>
                </div>
            </div>

    <div className="btn">
        <button className="main-content-menu-btn">
            АФИША МЕРОПРИЯТИЙ
        </button>
    </div>
    <div className="main__content-info">
        <p className="main__content-info-p">
            Акция "Музей для всех" пройдет в Росси в третий раз. В 2017 году акция
            объединила
        </p>
        <p className="main__content-info-p">
            более 250 российских музеев и 13000 участников, а в 2018 году в ней приняли участие 360 музеев
        </p>
        <p className="main__content-info-p">
            и 16700 человек со всей страны. Мы надеемся, что количество наших единомышлеников будет расти!
        </p>
        <p className="main__content-info-p main__content-info-p-red-line">
            В рамках акции музеи приглашают посетителей на выставки, экскурсии,
            концерты, театральные
        </p>
        <p className="main__content-info-p">
            квесты и мастер-классы, адаптированнные или созданные с участием людей с инвалидностью.
        </p>
        <p className="main__content-info-p main__content-info-p-red-line">
            Задача акции - привлечь внимание широкой общественности к значимости
            равноправного
        </p>
        <p className="main__content-info-p">
            участия всех людей в культурной жизни. В этот день музеи приглашают всех тех, кто поддерживает
        </p>
        <p className="main__content-info-p">
            развитие инклюзии в нащей стране.
        </p>
    </div>
    <div className="main__content-project">
        <div className="main__content-project-1">
            <h2 className="main__content-project-1-h">
                Проекты
            </h2>
            <div className="main__content-project-1-photos">
                <img
                    src={invalidy}
                    alt="" className="main__content-project-1-photos-img"/>
                <img src="https://i2.wp.com/philanthropy.ru/wp-content/uploads/2012/11/johnfranklinstephens.jpg"
                     alt=""
                     className="main__content-project-1-photos-img"/>
                <img
                    src="https://t3.ftcdn.net/jpg/02/35/28/40/360_F_235284088_78MfyIr67busTlLmT8N2wWFQJfCC48m2.jpg"
                    alt="" className="main__content-project-1-photos-img"/>
            </div>
            <div className="btn">
                <button className="main__content-project-1-btn">АФИША МЕРОПРИЯТИЙ</button>
            </div>
        </div>
        <div className="main__content-project-2">
            <h2 className="main__content-project-2-h">
                ОРГАНИЗАТОРЫ
            </h2>
            <div className="main__content-project-2-photos">
                <img src="https://in-museum.ru/wp-content/uploads/2019/04/cropped-logo_big.png" alt=""
                     className="main__content-project-2-photos-img"/>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/ICOM-Logo-global-Fr.pdf/page1-1535px-ICOM-Logo-global-Fr.pdf.jpg"
                    alt="" className="main__content-project-2-photos-img"/>
                <img src="https://static.tildacdn.com/tild3666-6462-4238-b161-326536313030/logo_for_movie.png"
                     alt=""
                     className="main__content-project-2-photos-img"/>
            </div>
            <h2 className="main__content-project-2-h2">
                ПРИ ПОДДЕРЖКЕ
            </h2>
            <h2 className="main__content-project-2-h3">
                ПАРТНЕРЫ
            </h2>
            <div className="main__content-project-2-support">
                <img src="https://www.b-soc.ru/wp-content/uploads/2019/10/logo-1.png" alt=""
                     className="main__content-project-2-support-img"/>
                <img
                    src="https://icom-russia.com/upload/%D1%84%D0%BE%D1%82%D0%BE/1200px-Vladimir_Potanin_Foundation_logo.png"
                    alt="" className="main__content-project-2-support-img"/>
                <img
                    src="https://tadviser.ru/images/7/77/Logo-%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%B0-%D0%A0%D0%A4-%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0.jpg"
                    alt="" className="main__content-project-2-support-img"/>
            </div>
        </div>
    </div>
</div>
)
}
export default Content;