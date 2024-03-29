import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Battle, EndMenu, StartMenu } from "../../turnbattle";

export const AppTurnBattle = (props) => {
  const [winner, setWinner] = useState();
  const [battleScore, setBattleScore] = useState();
  const [mode, setMode] = useState("start");

  useEffect(() => {
    if (mode === "battle") {
      const audioEl = document.getElementById("music");
      audioEl.setAttribute("src", "battle-theme.mp3")
      audioEl.volume = 0.2;
      audioEl.loop = true;
      audioEl.play();
      setWinner(undefined);
    }
  }, [mode]);

  useEffect(() => {
    if (winner) {
    }
  }, [winner]);

  return (
    <div className={styles.main}>
      {mode === "start" && <StartMenu onStartClick={() => setMode("battle")} />}

      {mode === "battle" && (
        <Battle
          onGameEnd={(winner) => {
            setWinner(winner);
            setMode("gameOver");
          }}
        />
      )}

      {mode === "gameOver" && !!winner && (
        <EndMenu
          winner={winner}
          onStartClick={() => props.setStageName("game1")}
        />
      )}
    </div>
  );
};
