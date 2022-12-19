import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import noneProfileImage from './assets/profile.png';

const { persistAtom } = recoilPersist();

export const emailValue = atom({
  key: 'email',
  default: '',
});

export const passwordValue = atom({
  key: 'password',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const userNameValue = atom({
  key: 'userName',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const accountNameValue = atom({
  key: 'accountName',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const introValue = atom({
  key: 'intro',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const profileImgSrc = atom({
  key: 'profileImg',
  default: noneProfileImage,
});

export const isLogin = atom({
  key: 'isLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userDataAtom = atom({
  key: 'userData',
  default: {},
});
