
// імпорт компонентів
import ProfileUser from '../ProfileUser/ProfileUser';
import user from '../../database/user.json';

import Statistics from '../DataStats/Data';
import data from '../../database/data.json';

import FriendList from '../Friends/Friend';
import friends from '../../database/friends.json';

import TransactionHistory from '../Transaction/Transactions';
import transactions from '../../database/transactions.json';

// імпорт стилів
import {AppContainer} from './app.styled';


function App() {
  return (
    <AppContainer>
      <ProfileUser
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </AppContainer>
  );
}

export default App;
