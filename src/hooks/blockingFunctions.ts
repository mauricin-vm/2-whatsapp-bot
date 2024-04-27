//import libraries and functions
import dayjs from 'dayjs';
import { storage } from '../cache/storage';
import { botInterection, changeBotInterection } from '../lib/instance';

//validate who sent the message (bot or user)
export const blockingFunctions = async (to: string) => {
	if (!botInterection) {
		storage[to] = {
			stage: 2,
			lastInteraction: dayjs().format(`DD/MM/YYYY - HH:mm`)
		}
	} else {
		changeBotInterection();
	};
};