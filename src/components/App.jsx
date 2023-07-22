import { Profile } from 'profile/profile';
import { TransactionHistory } from 'transactionhistory/transactionhistory';
import { Statistics } from 'statistics/statistics';
import { FriendList } from 'friendslist/friends';
import data from '../statistics/data.json';
import user from '../profile/user.json';
import friends from '../friendslist/friends.json';
import transactions from 'transactionhistory/transactions.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
