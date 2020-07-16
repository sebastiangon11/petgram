import React from 'react';
import { Link } from '@reach/router';

import { Article, Image, ImgWrapper } from './styles';
import { FavButton } from '../FavButton';
import { useNearScreen } from '../../hooks/useNearScreen';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';

const DEFAULT_IMAGE = 'https://via.placeholder.com/150';

export const PhotoCard = ({
  id,
  liked,
  likes = 0,
  src = DEFAULT_IMAGE,
}) => {
  const [show, ref] = useNearScreen();

  return (
    <Article ref={ref}>
      {show ? (
        <React.Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src}></Image>
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                toggleLike({ variables: { input: { id } } });
              };

              return (
                <FavButton
                  likes={likes}
                  liked={liked}
                  onClick={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
        </React.Fragment>
      ) : (
        ''
      )}
    </Article>
  );
};
