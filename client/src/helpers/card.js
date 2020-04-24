export default class Card {
    constructor(scene) {
        this.render = (x, y, isUsersCards) => {
        	if (isUsersCards) {
        		var cardDiv = document.createElement('div');
			    cardDiv.style = 'background-color: white; width: 200px; height: 300px;display: inline-block;padding:10px'
			    let card = scene.add.dom(x, y, cardDiv).setInteractive();
            	// scene.input.setDraggable(card);
            	return card;
        	} else {
	        	var cardDiv = document.createElement('div');
			    cardDiv.style = 'background-color: white; width: 200px; height: 300px;display: inline-block;padding:10px'

			    var title = document.createElement('div');
			    title.style = 'font-size: 2.2vh;text-align: center;';
			    title.innerText = 'I do belive that you\'re cheaing. At this point, you have two options...';

			    var typeAction = document.createElement('div');
			    typeAction.style = 'font-size: 2vw; font-weight: bold;text-align: center;padding:10px;margin:5px;background-color:black;color:white';
			    typeAction.innerText = 'Action - Gambling';

			    var description = document.createElement('div');
			    description.style = 'font-size: 2vh;padding:5px;';
			    description.innerText = 'You may play this card at any time during a Round of Gambling, even if the Round has already ended. You may not play it in response to a card that would make players ante or would end the Round when it resolves. The Round of Gambling ends immeditately. All anted Gold goes to the Inn.';

				cardDiv.appendChild(title);
				cardDiv.appendChild(typeAction);
				cardDiv.appendChild(description);

			    let card = scene.add.dom(x, y, cardDiv).setInteractive();
            	// scene.input.setDraggable(card);
            	return card;
        	}
        }
    }
}

