//store bot interactions
type storageType = { [from: string]: { stage: number, lastInteraction: string } };
export const storage: storageType = Object.create({});