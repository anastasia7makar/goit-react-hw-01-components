import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from '../FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ id, isOnline, avatar, name }) => {
      return (
        <li key={id} className={css.item}>
          <span
            className={clsx(css.status, isOnline ? css.online : css.offline)}
          ></span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>
      );
    })}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
