import PropTypes from 'prop-types';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity"> {followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity"> {views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity"> {likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.prototype = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
export const Statistics = ({ data }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {data.map(info => (
          <li className="item" key={info.id}>
            <span className="label">{info.label}</span>
            <span className="percentage">{info.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.prototype = {
  data: PropTypes.array,
};
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
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
    </ul>
  );
};
FriendList.prototype = {
  data: PropTypes.array,
};
export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead className="freezz-head">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className="info-for-type">
        {transactions.map(info => (
          <tr key={info.id}>
            <td className="info-type">{info.type}</td>
            <td className="info-type">{info.amount}</td>
            <td className="info-type">{info.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.prototype = {
  data: PropTypes.array,
};
