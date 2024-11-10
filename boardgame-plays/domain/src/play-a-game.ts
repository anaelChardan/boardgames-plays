import { BoardgameInventory } from "./secondary_ports/boargame-inventory";
import { PlayAGame } from "./use_cases/play_a_game";

type Dependencies = {
  boardgameInventory: BoardgameInventory;
};

export function buildPlayAGame({
  boardgameInventory,
}: Dependencies): PlayAGame {
  function forBoardgame(
    boardgameName: string,
    players: string[]
  ): ReturnType<PlayAGame["forBoardgame"]> {
    const boardgame = boardgameInventory.getBoardgameByName(boardgameName);

    if (!boardgame) {
      throw new Error("Boardgame not found");
    }

    throw new Error("Not implemented");
  }

  return {
    forBoardgame,
  };
}
