import { Boardgame } from "../boardgame";

export type BoardgameInventory = {
  getBoardgameByName: (name: string) => Boardgame | null;
};
