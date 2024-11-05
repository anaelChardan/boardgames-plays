import { describe, it, expect } from "vitest";
import { hello } from "../../build";

describe("Hello", () => {
  it("should return hello", () => {
    const actual = hello();

    expect(actual).toEqual("Hello, world!");
  });
});
