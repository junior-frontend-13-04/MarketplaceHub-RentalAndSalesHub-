import React, {useState} from 'react';
import './Card.scss';

export type CardType = {
    id:number
    title: string;
    subtitle: string;
    image: string | any;
    content: string;
    price?: number | string;
    additionalInfo: string[];
    buttonText: string;
};

const Card = ({
                  title,
                  subtitle,
                  image,
                  content,
                  price,
                  additionalInfo,
                  buttonText,
              }: CardType) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    return (
        <div   className={`card ${hovered ? 'card--hovered' : ''}`}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}>
            <h2 className="card__title b-title bt20 semibold">{title}</h2>
            <h3 className="card__subtitle b-title bt16">{subtitle}</h3>
            <img className="card__image" src={image} alt={title} />
            <p className="card__content b-title bt16">{content}</p>
            {price && (
                <div className="card__price b-title semibold">
                    {price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
                </div>
            )}
            {additionalInfo && (
                <div className="card__additional-info">
                    {additionalInfo.map((info) => (
                        <div className="card__additional-info__item">{info}</div>
                    ))}
                </div>
            )}
            <a href="#" className="card__button">
                {buttonText}
            </a>
        </div>
    );
};

export default Card;
