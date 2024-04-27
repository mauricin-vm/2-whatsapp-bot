//import libraries and functions
import dayjs from 'dayjs';
import { Message } from '@wppconnect-team/wppconnect'
import { stages, getStage } from './stages/stages'
import { blockingFunctions } from './hooks/blockingFunctions';
import { StartInstance, botInterection, startInstanceTime, userFone } from './lib/instance'

//main function
const main = async () => {
  try {

    //initialize the bot instance
    const bot = await StartInstance();
    if (!bot) return console.log(`Bot não inicializado!`);

    //managing sent messages
    bot.onAnyMessage(async (message: Message) => {
      console.log(`me: ${message.from} - ${message.content}`);

      //validations
      if (message.isGroupMsg || message.from === `status@broadcast`) return;
      if (message.from === `55${userFone}@c.us`) blockingFunctions(message.to);
    });

    //managing received messages
    bot.onMessage(async (message: Message) => {
      console.log(`-------------------------------------------------------`);
      console.log(`${message.from} - ${message.content}`);

      //validations
      if (message.isGroupMsg || message.from === `status@broadcast`) return;
      if (botInterection) return;
      if (startInstanceTime > dayjs()) return console.log(`onMessage not ready: ${message.from} - ${message.content}`);

      //select interaction stage
      const currentStage = getStage({ from: message.from, message: message.body })

      //function to return message
      await stages[currentStage].stage.exec({
        from: message.from,
        message: message.body,
        customer: message.notifyName
      });
    });
  } catch (error) {
    console.error(`MAIN_FUNCTION_ERROR: ${error}`)
  };
};

main();