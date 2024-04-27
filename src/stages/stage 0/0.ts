//import libraries and functions
import dayjs from 'dayjs';
import { STAGES } from '../index'
import { storage } from '../../cache/storage'
import { changeBotInterection, instance } from '../../lib/instance'

//stage 0
type execType = { from: string, message: string, customer: string };
export const stageZero = {
  async exec({ from, customer }: execType) {

    //check bot instance
    if (!instance) return console.log(`STAGE_ZERO_ERROR: ${from}`);

    //update number stage
    storage[from].stage = STAGES.STAGE_1;
    storage[from].lastInteraction = dayjs().format(`DD/MM/YYYY - HH:mm`);

    //return message
    const returnMessage = `Olá, *${customer}*!\nBem-vindo a nosso teste!\n-----------------------------------\nPor favor, *digite o número correspondente à *opção* que deseja:\n-----------------------------------\n1️⃣ - Quem sou?\n2️⃣ - Falar com um humano.`;
    changeBotInterection();
    await instance.sendText(from, returnMessage);
  }
};