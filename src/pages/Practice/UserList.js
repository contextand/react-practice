import React from 'react';

const User = ({ username, email }) => {
  return (
    <>
      <div>유저이름 : {username}</div>
      <div>이메일 : {email}</div>
    </>
  );
};

const UserList = () => {
  return users.map(user => {
    return <User key={user.id} username={user.username} email={user.email} />;
  });
};

const users = [
  {
    id: 1,
    username: 'velopert',
    email: 'public.velopert@gmail.com',
  },
  {
    id: 2,
    username: 'tester',
    email: 'tester@example.com',
  },
  {
    id: 3,
    username: 'liz',
    email: 'liz@example.com',
  },
];

export default UserList;
