import { describe, it, expect } from "vitest";

describe("Play a game functionnal tests", () => {
  it("should play a game with the correct number of players", () => {
    // Given
    const play = {
      boardgameName: "Brass Birmingham",
      players: ["John", "Jane"],
    };

    // When
    const createPlayResult = null;

    // Then
    expect(createPlayResult).toBe('success');
  });
});
