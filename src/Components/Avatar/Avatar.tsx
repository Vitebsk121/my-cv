import './Avatar.scss';

import React from 'react';

import avatarPicAsURL from '../../assets/images/Avatar.jpeg';

type AvatarProps = {};

console.log(avatarPicAsURL);

const Avatar: React.FC<AvatarProps> = () => <img className="avatarPic" src={avatarPicAsURL} alt="avatar" />;

export default Avatar;
