import Card from './card';

export default class Dealer {
    constructor(scene) {
        this.dealCards = () => {
            let playerSprite = 'cyanCardFront';
            let opponentSprite = 'magentaCardBack';

            for (let i = 0; i < 5; i++) {
                let playerCard = new Card(scene);
                playerCard.render(475 + (i * 100), 650, true);

                let opponentCard = new Card(scene);
                scene.opponent1Cards.push(opponentCard.render(475 + (i * 100), 125, false).disableInteractive());
                scene.opponent2Cards.push(opponentCard.render(20 + (i * 100), 265, false).disableInteractive());
                scene.opponent3Cards.push(opponentCard.render(500 + (i * 100), 265, false).disableInteractive());

            }
        }
    }
}