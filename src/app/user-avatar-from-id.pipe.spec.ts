import { UserAvatarFromIdPipe } from './user-avatar-from-id.pipe';

describe('UserAvatarFromIdPipe', () => {
  it('create an instance', () => {
    const pipe = new UserAvatarFromIdPipe();
    expect(pipe).toBeTruthy();
  });
});
