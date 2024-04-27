//import libraries and functions
import dayjs from 'dayjs';
import { STAGES } from '../index';
import { storage } from '../../cache/storage';
import { changeBotInterection, instance } from '../../lib/instance';

//stage 1
type execType = { from: string; message: string; customer: string };
export const stageOne = {
  async exec({ from, message }: execType) {

    //check bot instance
    if (!instance) return console.log(`STAGE_ONE_ERROR: ${from}`);

    //validation
    const receivedMessage = message.trim();
    const isMsgValid = ([1, 2].includes(Number(receivedMessage))) && /[1|2]/.test(receivedMessage);

    //return message
    let returnMessage = `*Digite uma opção válida, por favor!*\n_Apenas uma opção por vez._`;
    console.log(isMsgValid);

    if (isMsgValid) {
      const option = await options[receivedMessage](from);
      returnMessage = option.optionMessage;
      storage[from].stage = option.nextStage || STAGES.STAGE_0;
    };
    storage[from].lastInteraction = dayjs().format(`DD/MM/YYYY - HH:mm`);
    changeBotInterection();
    await instance.sendText(from, returnMessage);
  }
};

//set the direction of each option
type optionsType = { [key: string]: (from: string) => Promise<{ optionMessage: string; nextStage: number | null }> };
const options: optionsType = {

  //who am i?
  1: async () => {
    let optionMessage = `Deixa eu falar um pouco sobre mim! Eu sou apenas um bot criado para ambiente de teste. A ideia é facilitar a vida de novos programadores que desejam implementar uma lógica de atendimento por WhatsApp, utilizando a biblioteca *wppconnect*.\nCaso tenha alguma dúvida, não fique receoso de tirar suas dúvidas com o autor desse projeto.\n-----------------------------------\nSe quiser retornar, digite 0️⃣ para ver o menu.`;
    return {
      optionMessage,
      nextStage: STAGES.STAGE_0,
    };
  },

  //talk to human
  2: async () => {
    let optionMessage = `Tudo bem! A partir desse momento, minha interação contigo estará suspensa, mas caso queira reativá-la, digite 0️⃣ para ver o menu.`;

    return {
      optionMessage,
      nextStage: STAGES.STAGE_2,
    };
  }
};