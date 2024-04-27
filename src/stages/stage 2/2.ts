//import libraries and functions
import dayjs from 'dayjs';
import { STAGES } from '../index';
import { storage } from '../../cache/storage';
import { changeBotInterection, instance } from '../../lib/instance';

//stage 2
type execType = { from: string; message: string; customer: string };
export const stageTwo = {
  async exec({ from, message }: execType) {

    //check bot instance
    if (!instance) return console.log(`STAGE_TWO_ERROR: ${from}`);

    //validation
    const receivedMessage = message.trim();
    if (Number(receivedMessage) !== 0) return storage[from].lastInteraction = dayjs().format(`DD/MM/YYYY - HH:mm`);

    //update number stage
    storage[from].stage = STAGES.STAGE_0;
    storage[from].lastInteraction = dayjs().format(`DD/MM/YYYY - HH:mm`)

    //return message
    let returnMessage = `Atendimento cancelado! Digite *olá* para ver o menu.`;
    changeBotInterection();
    await instance.sendText(from, returnMessage);
  }
};