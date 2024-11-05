export type Boardgame = {
  name: string;
  maxNumberOfPlayers: number;
  minNumberOfPlayers: number;
};

export type BoardgameCollection = {
  boardgames: Boardgame[];
};
