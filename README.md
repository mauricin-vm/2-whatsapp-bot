<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- INTRODUCTION -->
## INTRODUCTION

The main idea of ​​this project is to optimize service via WhastApp, using the **[WppConnect](https://wppconnect.io/)** library. In a simple format, it is possible to create a service menu, offering a better experience with your customer.

Features:
- Create a WhatsApp-Bot
- Multi stages
- Identify human and non-human message

Built With:
- [Day.JS](https://day.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [WppConnect](https://wppconnect.io/)

<!-- GETTING STARTED -->
## GETTING STARTED

### 1) Prerequisites

- npm:

  ```sh
  npm install npm@latest -g
  ```

- yarn:

  ```sh
  npm install --global yarn
  ```

### 2) Installation

2.1. Clone the repo:

   ```sh
   git clone https://github.com/mauricin-vm/2-whatsapp-bot.git
   ```

2.2. Install packages:

   ```sh
   yarn | npm install
   ```

2.3. Build the project:

   ```sh
    yarn build | npm run build
   ```

2.4. Run the local environment:

   ```sh
    yarn start | npm run start
   ```

### 3) Observation

- After installing the packages, define the phone number used by the bot and the bot name in `@/src/lib/instance.ts`, using the variables `userFone` and `sessionName`.

- When the bot server starts up, there is a 30-second window to load old messages.

<!-- ROADMAP -->
## ROADMAP

See the [open issues](https://github.com/mauricin-vm/2-whatsapp-bot/issues) for a list of proposed features (and known issues).

<!-- LICENSE -->
## LICENSE

Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/mauricin-vm/2-whatsapp-bot.svg?style=for-the-badge
[contributors-url]: https://github.com/mauricin-vm/2-whatsapp-bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mauricin-vm/2-whatsapp-bot.svg?style=for-the-badge
[forks-url]: https://github.com/mauricin-vm/2-whatsapp-bot/network/members
[stars-shield]: https://img.shields.io/github/stars/mauricin-vm/2-whatsapp-bot.svg?style=for-the-badge
[stars-url]: https://github.com/mauricin-vm/2-whatsapp-bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/mauricin-vm/2-whatsapp-bot.svg?style=for-the-badge
[issues-url]: https://github.com/mauricin-vm/2-whatsapp-bot/issues
[license-shield]: https://img.shields.io/github/license/mauricin-vm/2-whatsapp-bot.svg?style=for-the-badge
[license-url]: https://github.com/mauricin-vm/2-whatsapp-bot/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mauricin-vm/
