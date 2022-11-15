import formatToHoursAndMinutes from '../utils/formatToHoursAndMinutes';

describe('Format minutes to hours and minutes', () => {
  it('Add 2h in minutes', () => {
    expect(formatToHoursAndMinutes(120)).toBe('2h');
  });

  it('Add 1h 30m in minutes', () => {
    expect(formatToHoursAndMinutes(90)).toBe('1h 30m');
  });
});
