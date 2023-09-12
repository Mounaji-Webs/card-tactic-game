
import Image from 'next/image'

// import '../styles/globals.css'
import { Unity, useUnityContext } from "react-unity-webgl";


export default function Home() {

  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } = useUnityContext({
    loaderUrl: "../build/CardTacticGame.loader.js",
    dataUrl: "https://media.githubusercontent.com/media/[Mounaji-Webs]/[master]/public/build/[CardTacticGame].data",
    frameworkUrl: "../build/CardTacticGame.framework.js",
    codeUrl: "../build/CardTacticGame.wasm",
      productName: "Turn Strategy Multiplayer Prototype",
    productVersion: "0.0.1",
    companyName: "Mounaji Studio",
    webGLContextAttributes: {
      alpha: true,
      antialias: true,
      depth: true,
      failIfMajorPerformanceCaveat: true,
      powerPreference: "default",
      premultipliedAlpha: true,
      preserveDrawingBuffer: true,
      stencil: true,
      desynchronized: true,
      xrCompatible: true,
    },
  });

  // const { unityProvider, isLoaded, loadingProgression, requestFullscreen  } = useUnityContext({
  //   loaderUrl: "/build/Card Tactic Game.loader.js",
  //   dataUrl: "/build/Card Tactic Game.data",
  //   frameworkUrl: "/build/Card Tactic Game.framework.js",
  //   codeUrl: "/build/Card Tactic Game.wasm",
  //   productName: "Turn Strategy Multiplayer Prototype",
  //   productVersion: "0.0.1",
  //   companyName: "Mounaji Studio",
  //   webGLContextAttributes: {
  //     alpha: true,
  //     antialias: true,
  //     depth: true,
  //     failIfMajorPerformanceCaveat: true,
  //     powerPreference: "default",
  //     premultipliedAlpha: true,
  //     preserveDrawingBuffer: true,
  //     stencil: true,
  //     desynchronized: true,
  //     xrCompatible: true,
  //   },
  // });

  const loadingPercentage = Math.round(loadingProgression * 100);

  // handle Full Screen Function
  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        
       <t1 className="Text-tittle"> Turn Based Strategy Game Prototype </t1>
      </header>
      <div className="container">
      {isLoaded === false && (
  // We'll conditionally render the loading overlay if the Unity
  // Application is not loaded.
  <div className="loading-overlay">
    <p>Loading... ({loadingPercentage}%)</p>
  </div>
)}
      <div className='Unity-container'>

      <Unity unityProvider={unityProvider} style={{ width: 980, height: 600 }} />
      <button onClick={handleClickEnterFullscreen}>Fullscreen</button>
      </div>
      </div>
    </div>
  )
}
