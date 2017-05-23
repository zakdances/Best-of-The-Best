import { LeagueNameFromIdPipe } from './league-name-from-id.pipe';

describe('LeagueNameFromIdPipe', () => {
  it('create an instance', () => {
    const pipe = new LeagueNameFromIdPipe();
    expect(pipe).toBeTruthy();
  });
});
