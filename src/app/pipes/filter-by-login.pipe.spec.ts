import { FilterByLoginPipe } from './filter-by-login.pipe';

describe('FilterByLoginPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByLoginPipe();
    expect(pipe).toBeTruthy();
  });
});
