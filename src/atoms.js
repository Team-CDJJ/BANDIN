import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const accountNameValue = atom({
  key: 'accountname',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const isLogin = atom({
  key: 'isLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const uploadImgArr = atom({
  key: 'uploadImg',
  default: [],
});
