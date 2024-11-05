export type Boardgame = {
  name: string;
  bggId: string;
  maxNumberOfPlayers: number;
  minNumberOfPlayers: number;
};

export type BoardgameCollection = {
  boardgames: Boardgame[];
};
