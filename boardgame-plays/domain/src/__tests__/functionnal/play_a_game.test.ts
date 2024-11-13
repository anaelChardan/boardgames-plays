import { describe, it, expect } from "vitest";
import { Play } from "../../play";
import { PlayAGame } from "../../use_cases/play-a-game";
import { buildPlayAGame } from "../../play-a-game";
import { boardgameInventoryStub } from "../../secondary_ports/stubs/boardgame-inventory-stub";

describe("Play a game functionnal tests", () => {
  it("should play a game with the correct number of players", async () => {
    // Given
    const boardgameName = "Brass Birmingham";
    const players = ["Michel", "John"];

    // When
    // le but est d'appeler le domain
    const playAGame: PlayAGame = buildPlayAGame({
      boardgameInventory: boardgameInventoryStub,
    });

    const play: Play = await playAGame.forBoardgame(boardgameName, players);

    console.log(play);
    // Then
    expect(play).toStrictEqual({
      boardgameName: "Brass Birmingham",
      bggId: "224517",
      players: ["Michel", "John"],
    });
  });
});
