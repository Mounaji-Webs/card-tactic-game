
export default async (req, res) => {
    
  
    const githubUrl = 
    // "https://github.com/Mounaji-Webs/card-tactic-game/raw/master/public/build/CardTacticGame.data";
    "https://media.githubusercontent.com/media/Mounaji-Webs/card-tactic-game/master/public/build/CardTacticGame.data";
  
    try {
      const response = await fetch(githubUrl);
      if (response.ok) {
        const data = await response.arrayBuffer();
        res.setHeader("Content-Type", "application/octet-stream");
        res.status(200).send(data);
      } else {
        res.status(response.status).send(await response.text());
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
  