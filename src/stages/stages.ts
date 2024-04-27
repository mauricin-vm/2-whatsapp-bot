//import libraries and functions
import dayjs from 'dayjs';
import { storage } from '../cache/storage'
import { stageZero, stageOne, stageTwo } from './index'

//define bot interaction stage
export const stages = [
  {
    description: `Menu`,
    stage: stageZero,
  },
  {
    description: `Quem sou eu?`,
    stage: stageOne,
  },
  {
    description: `Falar com humano`,
    stage: stageTwo,
  }
]

//function to select the interaction stage
export const getStage = ({ from, message }: { from: string, message: string }) => {

  //check bot interaction reset deadline (1 day)
  const currentDate = dayjs();
  if (storage[from]) {
    const lastInteraction = dayjs().date(Number(storage[from].lastInteraction.substring(0, 2))).month(Number(storage[from].lastInteraction.substring(3, 5)) - 1).year(Number(storage[from].lastInteraction.substring(6, 10))).hour(Number(storage[from].lastInteraction.substring(13, 15))).minute(Number(storage[from].lastInteraction.substring(16, 18))).second(0).millisecond(0);
    if (currentDate.diff(lastInteraction, `minute`) < (60 * 24)) return storage[from].stage;
  };

  //reset bot interaction
  storage[from] = {
    stage: 0,
    lastInteraction: currentDate.format(`DD/MM/YYYY - HH:mm`),
  };
  return storage[from].stage;
};