//import libraries and functions
import dayjs from 'dayjs';
import { create, Whatsapp } from '@wppconnect-team/wppconnect';

//export identify user function
export const userFone = `6799999999`;
export var botInterection = false;
export const changeBotInterection = () => {
  if (botInterection) return botInterection = false;
  botInterection = true;
};

//export bot function
export var instance: Whatsapp | null = null;
export var startInstanceTime: dayjs.Dayjs;
export const sessionName: string = `whatsapp-bot`
export const StartInstance = async () => {
  try {

    if (!instance) {
      instance = await create({
        session: sessionName, //Pass the name of the client you want to start the bot
        catchQR: (base64Qrimg, asciiQR, attempts, urlCode) => {
          console.log(`Number of attempts to read the qrcode: `, attempts);
          console.log(`Terminal qrcode: `, asciiQR);
          console.log(`base64 image string qrcode: `, base64Qrimg);
          console.log(`urlCode (data-ref): `, urlCode);
        },
        statusFind: (statusSession, session) => {
          console.log(`Status Session: `, statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken
          //Create session wss return "serverClose" case server for close
          console.log(`Session name: `, session);
        },
        onLoadingScreen: (percent, message) => {
          console.log(`LOADING_SCREEN`, percent, message);
        },
        headless: true, // Headless chrome
        devtools: false, // Open devtools by default
        useChrome: false, // If false will use Chromium instance
        debug: false, // Opens a debug session
        logQR: true, // Logs QR automatically in terminal
        browserWS: ``, // If u want to use browserWSEndpoint
        browserArgs: [``], // Parameters to be added into the chrome browser instance
        puppeteerOptions: {}, // Will be passed to puppeteer.launch
        disableWelcome: true, // Option to disable the welcoming message which appears in the beginning
        updatesLog: true, // Logs info updates automatically in terminal
        autoClose: 0, // Automatically closes the wppconnect only when scanning the QR code (default 60 seconds, if you want to turn it off, assign 0 or false)
        tokenStore: `file`, // Define how work with tokens, that can be a custom interface
        folderNameToken: `./tokens`, //folder name when saving tokens
        // BrowserSessionToken
        // To receive the client`s token use the function await clinet.getSessionTokenBrowser()
        sessionToken: {
          WABrowserId: `"UnXjH....."`,
          WASecretBundle: `{"key":"+i/nRgWJ....","encKey":"kGdMR5t....","macKey":"+i/nRgW...."}`,
          WAToken1: `"0i8...."`,
          WAToken2: `"1@lPpzwC...."`,
        }
      }).then((client) => {
        return client;
      }).catch((error) => {
        console.log(`INSTANCE_ERROR: ` + error);
        instance = null;
        return instance;
      });

      //waiting time for messages to load after start (bot not working)
      startInstanceTime = dayjs().add(30, `second`);
    };
    return instance;

  } catch (error) {
    console.error(`STARTBOT_FUNCTION_ERROR: ` + error);
    instance = null;
    return instance;
  };
};