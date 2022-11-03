import React from 'react';

const User = ({ user }) => {
  return (
    <>
      <div>유저이름 : {user.username}</div>
      <div>이메일 : {user.email}</div>
    </>
  );
};

const UserList = ({ users }) => {
  return users.map(user => {
    return <User key={user.id} user={user} />;
  });
};

export default UserList;
