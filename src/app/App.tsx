import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.scss';
import "src/ui/styles/main.scss";
import {useAppDispatch, useAppSelector} from "src/dal/Redux/store";
import {me} from "src/dal/Redux/auth-reducer";
import {My3DModel} from "src/ui/components/common/3d/My3DModel";
import Preloader from "src/ui/components/common/Preloader/Preloader";
import Registration from "src/ui/pages/Registration/Registration";
import Login from "src/ui/pages/Login/Login";
import NewPassword from "src/ui/pages/NewPassword/NewPassword";
import RecoveryPassword from "src/ui/pages/RecoveryPassword/RecoveryPassword";
import NotFound from "src/ui/pages/NotFound/NotFound";
import {NavBar} from "src/ui/components/navbar/NavBar";
import CardList from "src/ui/components/Properties/CardList";




function App() {
    const dispatch = useAppDispatch();
    const isInitialized = useAppSelector(state => state.app.isInitialized);

    const cardsData= [
        {
            id: 1,
            title: 'Квартира в аренду',
            subtitle: 'Москва, ЦАО, Тверской бульвар',
            image: 'https://via.placeholder.com/300x150',
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
            id: 2,
            title: 'Квартира в аренду',
            subtitle: 'Москва, ЦАО, Тверской бульвар',
            image: 'https://via.placeholder.com/300x150',
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
            image: 'https://via.placeholder.com/300x150',
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
            image: 'https://via.placeholder.com/300x150',
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
            image: 'https://via.placeholder.com/300x150',
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
            image: 'https://via.placeholder.com/300x150',
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
            image: 'https://via.placeholder.com/300x150',
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
            image: 'https://via.placeholder.com/300x150',
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
            image: 'https://via.placeholder.com/300x150',
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
            <My3DModel/>
            <CardList cards={cardsData}/>
            {!isInitialized
                ? <Preloader/>
                : <div className="content">
                    <Routes>
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


