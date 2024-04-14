import { createQuadrant } from "./quadrant.service";

describe('Quadrant Service', () => {
  it('should create a valid object from valid parameters', () => {
    const actual = createQuadrant('name');
    const expected = { name: 'name' };
    expect(actual).toStrictEqual(expected);
  }),
  it('should throw a validation exception upon invalid parameters', () => {
    //@ts-ignore
    const actual = () => {createQuadrant(2)};
    expect(actual).toThrow(Error);
  })
})