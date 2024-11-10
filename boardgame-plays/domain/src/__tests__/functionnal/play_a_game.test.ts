import { describe, it, expect } from "vitest";
import { Play } from "../../play";
import { PlayAGame } from "../../use_cases/play_a_game";

describe("Play a game functionnal tests", () => {
  it("should play a game with the correct number of players", () => {
    // Given
    const boardgameName = "Brass Birmingham";
    const players = ["Michel", "John"];

    // When
    // le but est d'appeler le domain
    const playAGame: PlayAGame = {} as unknown as PlayAGame;
    const play: Play = playAGame.forBoardgame(boardgameName, players);

    // Then
    expect(play).toBe({
      boardgameName: "Brass Birmingham",
      bggId: "224517",
      players: ["Michel", "John"],
    });
  });
});
