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

export type userFriends = {
  friendList: [friendDetail];
};

export type friendDetail = {
  friendId: string;
  friendNickname: string;
  friendLatestMessage: message;
};

export type messageHistory = {
  messageHistory: [message];
};

export type message = {
  createdAt: string;
  fromUserId: string;
  message: string;
  toUserId: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type userInfo = {
  accessToken: string;
  refreshToken: string;
  userProfile: userProfile;
};

type userProfile = {
  birthDate: string;
  gender: string;
  location: string;
  nickname: string;
  preference: object;
  profilePicturePath: string;
};

export type userMatch = {
  matchCard: {
    userId: string;
    profile: matchCard;
  }
}

type  matchCard = {
  nickname: string;
  birthDate: string;
  gender: string;
  preference: object;
}
