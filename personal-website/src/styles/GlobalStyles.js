import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  
  :root {
    --primary-color:rgb(206, 214, 255);
    --secondary-color: #FFB5D4;
    --accent-color:rgb(255, 180, 223);
    --background-color: #FFFFFF;
    --text-color: #2D3748;
    --border-color: #C5CDFF;
    --modal-bg: #FFFFFF;
    --card-bg: rgba(255, 255, 255, 0.85);
    --subtitle-color: #FFB5D4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Press Start 2P', cursive;
    background: #FFFFFF;
    position: relative;
    color: var(--text-color);
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Add decorative aura blobs to background */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(600px circle at 0% 0%, rgba(255, 181, 212, 0.15) 0%, transparent 50%),
      radial-gradient(800px circle at 100% 0%, rgba(165, 180, 255, 0.15) 0%, transparent 50%),
      radial-gradient(600px circle at 50% 50%, rgba(226, 180, 255, 0.15) 0%, transparent 50%),
      radial-gradient(800px circle at 0% 100%, rgba(165, 180, 255, 0.15) 0%, transparent 50%),
      radial-gradient(600px circle at 100% 100%, rgba(255, 181, 212, 0.15) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  /* Add subtle sparkle effect */
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='rgba(255,255,255,0.5)'/%3E%3C/svg%3E");
    background-size: 40px 40px;
    opacity: 0.3;
    pointer-events: none;
    z-index: 1;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: 'Press Start 2P', cursive;
    cursor: pointer;
  }

  .pixel-corners {
    clip-path: 
      polygon(
        0px 4px,
        4px 4px,
        4px 0px,
        calc(100% - 4px) 0px,
        calc(100% - 4px) 4px,
        100% 4px,
        100% calc(100% - 4px),
        calc(100% - 4px) calc(100% - 4px),
        calc(100% - 4px) 100%,
        4px 100%,
        4px calc(100% - 4px),
        0px calc(100% - 4px)
      );
  }

  /* Glass effect for components */
  .glass {
    background: var(--card-bg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  /* Custom selection color */
  ::selection {
    background: var(--accent-color);
    color: white;
  }
`

export default GlobalStyles; 