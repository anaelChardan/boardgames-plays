import { Play } from "../play";

  export type PlayAGame = {
    forBoardgame: (boardgameName: string, players: string[]) => Play;
  };
