import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from '../FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ id, isOnline, avatar, name }) => (
  <li key={id} className={css.item}>
    <span
      className={clsx(css.status, isOnline ? css.online : css.offline)}
    ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
