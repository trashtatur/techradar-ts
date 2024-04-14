import { createRing } from "./ring.service";

describe('Ring Service', () => {
  it('should create a valid object from valid parameters', () => {
    const actual = createRing('name', '#fafafa');
    const expected = { name: 'name', color: '#fafafa' };
    expect(actual).toStrictEqual(expected);
  }),
  it('should throw a validation exception upon invalid parameters', () => {
    //@ts-ignore
    const actual = () => {createRing('name', 'ork')};
    expect(actual).toThrow(Error);
  })
})