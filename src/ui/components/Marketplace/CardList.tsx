import React from 'react';
import './Card.scss';
import Card, {CardType} from './Card';

type PropsType = {
    cards: CardType[]
}
const CardList = ({ cards}:PropsType) => {
    return (
        <>
           {/* <video*/}
           {/*     className="elementor-video inited"*/}
           {/*     src="https://gamic.themerex.net/wp-content/uploads/2022/09/Pexels-Videos-2759479.mp4"*/}
           {/*     autoPlay*/}
           {/*     loop*/}
           {/*     muted*/}
           {/*     playsInline*/}
           {/*     controlsList="nodownload"*/}
           {/*/>*/}
        <div className="card-list">
            {cards.map((card: CardType) => (
                <Card
                    title={card.title}
                    subtitle={card.subtitle}
                    image={card.image}
                    content={card.content}
                    id={card.id}
                    additionalInfo={card.additionalInfo}
                    price={card.price}
                    buttonText={card.buttonText}
                />
            ))}
        </div>
        </>
    );
};

export default CardList;
