import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect } from "react";

export default function Home() {
  const githubAccessToken = "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"; // Replace with your actual PAT

  const { unityProvider, isLoaded, requestFullscreen } = useUnityContext({
    loaderUrl: "../build/CardTacticGame.loader.js",
    // Data URL points to your serverless function
    dataUrl: "https://media.githubusercontent.com/media/Mounaji-Webs/card-tactic-game/master/public/build/CardTacticGame.data?token=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"
    ,
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

  // // Fetch the GitHub data when the component mounts
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://media.githubusercontent.com/media/Mounaji-Webs/card-tactic-game/master/public/build/CardTacticGame.data?token=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"
  //       , {
  //         // headers: {
  //         //   Authorization: `Bearer ${githubAccessToken}`,
  //         // },
  //       });
  //       if (response.ok) {
  //         const data = await response.arrayBuffer();
  //         // You can now use the 'data' in your Unity WebGL build
  //       } else {
  //         console.error("Failed to fetch data:", response.status, response.statusText);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array to run the effect once when the component mounts

  // Handle Full Screen Function
  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Text-tittle">Turn Based Strategy Game Prototype</h1>
      </header>
      <div className="container">
        
          
          <div className='Unity-container'>
            <Unity unityProvider={unityProvider} style={{ width: 980, height: 600 }} />
            <button onClick={handleClickEnterFullscreen}>Fullscreen</button>
          </div>
       
      </div>
    </div>
  );
}
