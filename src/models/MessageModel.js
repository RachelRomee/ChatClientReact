import BaseModel from './BaseModel';

class MessageModel extends BaseModel {

	defaults() {
		return {
			username: null,
			text: null,
			createdAt: new Date(),
			updatedAt: new Date()
		};
	}

	// calls constructor of basemodel
	constructor(){
		super('message');
	}
}

export default MessageModel;
