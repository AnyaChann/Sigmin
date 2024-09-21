import React, { useEffect, useState } from 'react';
import { useDataProvider, useNotify, useRefresh } from 'react-admin';

const Profile: React.FC = () => {
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const refresh = useRefresh();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await dataProvider.getOne('users', { id: 'me' });
        setUser(data);
        setLoading(false);
      } catch (error) {
        notify('Error fetching user data', { type: 'warning' });
        setLoading(false);
      }
    };

    fetchUser();
  }, [dataProvider, notify]);

  const handleSave = async () => {
    try {
      await dataProvider.update('users', {
        id: user.id,
        data: user,
        previousData: undefined
      });
      notify('Profile updated successfully', { type: 'info' });
      refresh();
    } catch (error) {
      notify('Error updating profile', { type: 'warning' });
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-card">
      <h2>Profile</h2>
      <div className="profile-field">
        <label>Username</label>
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Enter your username"
        />
      </div>
      <div className="profile-field">
        <label>Full Name</label>
        <input
          type="text"
          value={user.fullName}
          onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          title="Full Name"
          placeholder="Enter your full name"
        />
      </div>
      <div className="profile-field">
        <label>Avatar</label>
        <input
          type="text"
          value={user.avatar}
          onChange={(e) => setUser({ ...user, avatar: e.target.value })}
          title="Avatar"
          placeholder="Enter your avatar URL"
        />
      </div>
      <div className="profile-field">
        <label>Role</label>
        <input
          type="text"
          value={user.role}
          readOnly
          title="Role"
          placeholder="Your role"
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Profile;