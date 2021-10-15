import './Avatar.scss';

import React from 'react';

import avatarPic from '/images/Avatar.jpeg';

type AvatarProps = {};

const Avatar: React.FC<AvatarProps> = () => <img className="avatarPic" src={avatarPic} alt="avatar" />;

export default Avatar;
