import { Boardgame } from "../boardgame";

export type BoardgameInventory = {
  getBoardgameByName: (name: string) => Promise<Boardgame | null>;
};
