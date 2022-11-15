import formatDate from '../utils/formatDate';

describe('Format date from yyyy/mm/dd to yyyy', () => {
  it('Add complete date', () => {
    expect(formatDate('2022-04-25')).toBe('2022');
  });

  it('Add value empty', () => {
    expect(formatDate('')).toBe(null);
  });
});
