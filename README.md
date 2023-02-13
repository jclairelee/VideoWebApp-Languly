# Languly

Languly is an online platform that language learners can exchange their language skills and find lanuage partner.

This was my capstone project at Brainstation. During the two weeks capstone deadline, I was able to complete landing page, App page, login/register page, and call page. I used MUI for the first time on this project, and learned a lot about WebRTC and socket.io as well. Ideal screen size to run this code is at 1500px.

[Demo link](https://www.youtube.com/watch?v=wkKaz5o2RY8)

[Frontend](https://github.com/jclairelee/VideoWebApp-Languly) | [Backend](https://github.com/jclairelee/Languly-api)

![Screenshot](./src/assets/projectScreenshot/languly2.jpg)

## Tech Stack

### Frontend:

- Material UI
- Redux
- Socket Client
- WebRTC
- Framer Motion
- React
- Sass

### Backend:

- Node.js 
- Express.js
- MongoDB
- Socket.io

# Installation

### backend Setup

1. Install server dependencies:

   Run `npm install` from inside the directory:

   ```bash
   $ npm install
   ```

2. Set environment variables:

   Create a `.env` file as:

   ```shell
    API_PORT=5002
    MONGO_URI=<YOUR DB URI>
    TOKEN_KEY=<YOUR TOKEN KEY>
   ```

3. Start the server:
   ```bash
   $ npm start
   ```

### frontend Setup

4. Install client dependencies:

   Run `npm install` from inside the directory.

   ```bash
      $ npm install
   ```

5. Start the React app:
   ```bash
   $ npm start
   ```
