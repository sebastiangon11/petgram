import React from 'react';
import { Link, Image } from './styles';

const DEFAULT_IMAGE = 'https://via.placeholder.com/150';

export const Category = ({
  cover = DEFAULT_IMAGE,
  path = '',
  emoji = '?',
}) => (
  <Link to={path}>
    <Image src={cover}></Image>
    {emoji}
  </Link>
);
