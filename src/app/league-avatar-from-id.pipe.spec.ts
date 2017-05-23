import { LeagueAvatarFromIdPipe } from './league-avatar-from-id.pipe';

describe('LeagueAvatarFromIdPipe', () => {
  it('create an instance', () => {
    const pipe = new LeagueAvatarFromIdPipe();
    expect(pipe).toBeTruthy();
  });
});
