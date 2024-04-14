import { createColors } from "./colors.service"

describe('Colors Service', () => {
  it('should create a valid object from valid parameters', () => {
    const actual = createColors('#ffffff', '#333333', '#fafafa');
    const expected = { background: '#ffffff', grid: '#333333', inactive: '#fafafa'};
    expect(actual).toStrictEqual(expected);
  }),
  it('should throw a validation exception upon invalid parameters', () => {
    //@ts-ignore
    const actual = () => {createColors(22, 33, 44)};
    expect(actual).toThrow(Error);
  })
})