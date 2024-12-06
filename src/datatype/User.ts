export type registerInfo = {
  username: string;
  password: string;
  nickname: string;
  birthDate: string;
  gender: string;
};

export type registerResponse = {
  message: string;
};

export type nicknameResponse = {
  nickname: string;
};

export type loginInfo = {
  username: string;
  password: string;
};

export type friendlist = {
  friendList: [];
};

export type friend = {
  id: string;
  nickname: string;
};
