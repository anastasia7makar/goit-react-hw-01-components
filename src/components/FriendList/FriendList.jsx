import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css'

export const FriendList = ({ friends }) => (
  <ul className={css.friend-list}>
    {friends.map(({ id, isOnline, avatar, name }) => {
      return (
        <li key={id} className="item">
          <span className="status">{isOnline ? 'online' : 'offline'}</span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
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
