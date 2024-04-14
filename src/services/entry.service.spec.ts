import { createEntry } from "./entry.service";

describe('Entry Service', () => {
  it('should create a valid object from valid parameters', () => {
    const actual = createEntry('name', 0, 0, 0);
    const expected = { label: 'name', quadrant: 0, ring: 0, moved: 0};
    expect(actual).toStrictEqual(expected);
  }),
  it('should throw a validation exception upon invalid parameters', () => {
    //@ts-ignore
    const actual = () => {createEntry('name', -1, -2, 4)};
    expect(actual).toThrow(Error);
  })
})