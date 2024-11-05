import { hello } from "@boardava/domain";
import { describe, it, expect } from "vitest";

describe("Hello", () => {
  it("should return hello", () => {
    const actual = hello();

    expect(actual).toEqual("Hello, world!");
  });
});
