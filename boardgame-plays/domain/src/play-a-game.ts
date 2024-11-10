import { PlayAGame } from "./primary_ports/play_a_game";

export function buildPlayAGame(): PlayAGame {
  function getBoardgameByName(name: string) {
    return null;
  }

  function forBoardgame(
    boardgameName: string,
    players: string[]
  ): ReturnType<PlayAGame["forBoardgame"]> {
    const boardames = getBoardgameByName(boardgameName);

    throw new Error("Not implemented");
  }

  return {
    forBoardgame,
  };
}
