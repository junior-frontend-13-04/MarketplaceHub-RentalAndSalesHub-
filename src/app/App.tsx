import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.scss';
import "src/ui/styles/main.scss";
import {useAppDispatch, useAppSelector} from "src/bll/Redux/store";
import {me} from "src/bll/Redux/auth-reducer";
import Preloader from "src/ui/components/common/Preloader/Preloader";
import Registration from "src/ui/pages/Registration/Registration";
import Login from "src/ui/pages/Login/Login";
import NewPassword from "src/ui/pages/NewPassword/NewPassword";
import RecoveryPassword from "src/ui/pages/RecoveryPassword/RecoveryPassword";
import NotFound from "src/ui/pages/NotFound/NotFound";
import CardList from "src/ui/components/Marketplace/CardList";
import {About} from "src/ui/pages/About/About";
import {Home} from "src/ui/pages/Home/Home";
import {Services} from "src/ui/pages/Services/Services";
import {Contact} from "src/ui/pages/Contact/Contact";
import apartment1 from "src/ui/assets/images/photo-1549399542-7e3f8b79c341.avif";
import apartment2 from "src/ui/assets/images/photo-1607853554439-0069ec0f29b6.avif";
import apartment3 from "src/ui/assets/images/premium_photo-1673264861392-ec613a45312a.avif";
import apartment4 from "src/ui/assets/images/photo-1627097170492-1041ecd6c3c5.avif";
import apartment5 from "src/ui/assets/images/photo-1583692717320-0c9661d49d9a.avif";
import apartment7 from "src/ui/assets/images/photo-1583692717320-0c9661d49d9a.avif";
import apartment6 from "src/ui/assets/images/photo-1582647509711-c8aa8a8bda71.avif";
import apartment8 from "src/ui/assets/images/photo-1534882673463-e4781854e9b4.avif";
import apartment9 from "src/ui/assets/images/photo-1479839672679-a46483c0e7c8.avif";
import {NavBar} from "src/ui/components/navbar/NavBar";


function App() {
    const dispatch = useAppDispatch();
    const isInitialized = useAppSelector(state => state.app.isInitialized);

    const cardsData = [
        {
            id: 1,
            title: 'Автомобиль в продажу',
            subtitle: 'BMW X5, 2018 год',
            image: apartment1,
            content:
                'Продается автомобиль BMW X5. 2018 год выпуска. Пробег: 35 000 км. Цвет: черный. Кожаный салон. Панорамная крыша. Подогрев всех сидений. Камера заднего вида. Навигация. Безключевой доступ.',
            price: '5 000 000 руб.',
            additionalInfo: ['Залог не требуется', 'Комиссия агенту: 3%'],
            buttonText: 'Купить',
        },
        {
            id: 2,
            title: 'Квартира в аренду',
            subtitle: 'Москва, ЦАО, Тверской бульвар',
            image: apartment2,
            content:
                '3-комнатная квартира на длительный срок. 110 кв. м. Евроремонт. Вся необходимая мебель и техника. Кондиционер. Интернет. Охрана. Парковка. Развитая инфраструктура.',
            price: '150 000 руб./мес.',
            additionalInfo: [
                'Залог: 2 месяца',
                'Комиссия агенту: 50%',
                'Дополнительно оплачивается: электричество, вода, газ',
            ],
            buttonText: 'Забронировать',
        },
        {
            id: 3,
            title: 'Квартира в продажу',
            subtitle: 'Санкт-Петербург, Невский район, Московский проспект',
            image: apartment3,
            content:
                '2-комнатная квартира. 65 кв. м. Свежий ремонт. Балкон. Встроенная кухня и шкафы-купе. Развитая инфраструктура.',
            price: '7 500 000 руб.',
            additionalInfo: [
                'Залог не требуется',
                'Комиссия агенту: 3%',
                'Возможна ипотека',
            ],
            buttonText: 'Купить',
        },
        {
            id: 4,
            title: 'Автомобиль в продажу',
            subtitle: 'BMW X5, 2018 год',
            image: apartment4,
            content:
                'Продается автомобиль BMW X5. 2018 год выпуска. Пробег: 35 000 км. Цвет: черный. Кожаный салон. Панорамная крыша. Подогрев всех сидений. Камера заднего вида. Навигация. Безключевой доступ.',
            price: '5 000 000 руб.',
            additionalInfo: ['Залог не требуется', 'Комиссия агенту: 3%'],
            buttonText: 'Купить',
        },
        {
            id: 5,
            title: 'Квартира в аренду',
            subtitle: 'Москва, ЦАО, Тверской бульвар',
            image: apartment5,
            content:
                '3-комнатная квартира на длительный срок. 110 кв. м. Евроремонт. Вся необходимая мебель и техника. Кондиционер. Интернет. Охрана. Парковка. Развитая инфраструктура.',
            price: '150 000 руб./мес.',
            additionalInfo: [
                'Залог: 2 месяца',
                'Комиссия агенту: 50%',
                'Дополнительно оплачивается: электричество, вода, газ',
            ],
            buttonText: 'Забронировать',
        },
        {
            id: 6,
            title: 'Квартира в продажу',
            subtitle: 'Санкт-Петербург, Невский район, Московский проспект',
            image: apartment6,
            content:
                '2-комнатная квартира. 65 кв. м. Свежий ремонт. Балкон. Встроенная кухня и шкафы-купе. Развитая инфраструктура.',
            price: '7 500 000 руб.',
            additionalInfo: [
                'Залог не требуется',
                'Комиссия агенту: 3%',
                'Возможна ипотека',
            ],
            buttonText: 'Купить',
        },
        {
            id: 7,
            title: 'Автомобиль в продажу',
            subtitle: 'BMW X5, 2018 год',
            image: apartment7,
            content:
                'Продается автомобиль BMW X5. 2018 год выпуска. Пробег: 35 000 км. Цвет: черный. Кожаный салон. Панорамная крыша. Подогрев всех сидений. Камера заднего вида. Навигация. Безключевой доступ.',
            price: '5 000 000 руб.',
            additionalInfo: ['Залог не требуется', 'Комиссия агенту: 3%'],
            buttonText: 'Купить',
        },
        {
            id: 8,
            title: 'Квартира в аренду',
            subtitle: 'Москва, ЦАО, Тверской бульвар',
            image: apartment8,
            content:
                '3-комнатная квартира на длительный срок. 110 кв. м. Евроремонт. Вся необходимая мебель и техника. Кондиционер. Интернет. Охрана. Парковка. Развитая инфраструктура.',
            price: '150 000 руб./мес.',
            additionalInfo: [
                'Залог: 2 месяца',
                'Комиссия агенту: 50%',
                'Дополнительно оплачивается: электричество, вода, газ',
            ],
            buttonText: 'Забронировать',
        },
        {
            id: 9,
            title: 'Квартира в продажу',
            subtitle: 'Санкт-Петербург, Невский район, Московский проспект',
            image: apartment9,
            content:
                '2-комнатная квартира. 65 кв. м. Свежий ремонт. Балкон. Встроенная кухня и шкафы-купе. Развитая инфраструктура.',
            price: '7 500 000 руб.',
            additionalInfo: [
                'Залог не требуется',
                'Комиссия агенту: 3%',
                'Возможна ипотека',
            ],
            buttonText: 'Купить',
        },
    ];


    useEffect(() => {
        dispatch(me())
    }, [dispatch])


    return (
        <div className="App">
            <NavBar/>
            {!isInitialized
                ? <Preloader/>
                : <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/marketplace" element={<CardList cards={cardsData}/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/recovery-password" element={<RecoveryPassword/>}/>
                        <Route path="/set-new-password/:token" element={<NewPassword/>}/>
                        <Route path="/*" element={<NotFound/>}/>
                    </Routes>
                </div>
            }
        </div>
    );
}

export default App;


