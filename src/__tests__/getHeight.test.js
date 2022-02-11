/* eslint-disable testing-library/no-debugging-utils */
import { getHeight } from "../utils";

describe("getHeight()", () => {
  it("Should return a number/height analogous to movies overview text length", async () => {
    const one = await getHeight(100);
    const two = await getHeight(200);
    const three = await getHeight(300);
    const four = await getHeight(400);
    const five = await getHeight(500);
    const six = await getHeight(600);
    const seven = await getHeight(700);
    // screen.debug();

    expect(one).toBe(850);
    expect(two).toBe(900);
    expect(three).toBe(950);
    expect(four).toBe(1000);
    expect(five).toBe(1050);
    expect(six).toBe(1100);
    expect(seven).toBe(1150);
  });
});
