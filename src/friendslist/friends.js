import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      <Friend friends={friends} />
    </ul>
  );
};
FriendList.propTypes = {
  data: PropTypes.array,
};

const Friend = ({ friends }) => {
  return (
    <>
      {friends.map(info => (
        <li className="item-friend" key={info.id}>
          <span className={`status ${info.isOnline ? 'online' : 'offline'}`}>
            {info.isOnline ? 'Online' : 'Offline'}
          </span>
          <img
            className="avatar"
            src={info.avatar}
            alt={info.name}
            width="48"
          />
          <p className="name">{info.name}</p>
        </li>
      ))}
    </>
  );
};
