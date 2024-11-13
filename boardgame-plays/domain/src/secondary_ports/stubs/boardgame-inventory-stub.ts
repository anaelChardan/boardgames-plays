import { BoardgameInventory } from "../boargame-inventory";

export const boardgameInventoryStub: BoardgameInventory = {
  getBoardgameByName: async (name: string) => {
    return {
      name,
      bggId: "224517",
      maxNumberOfPlayers: 4,
      minNumberOfPlayers: 2,
    };
  },
};
