import React from 'react';

const User = ({ user, onRemove, onToggle }) => {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

const UserList = ({ users, onRemove, onToggle }) => {
  return users.map(user => {
    return (
      <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle} />
    );
  });
};

export default UserList;
