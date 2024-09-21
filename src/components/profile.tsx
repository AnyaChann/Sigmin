import React, { useEffect, useState } from 'react';
import { useDataProvider, useNotify } from 'react-admin';

const Profile: React.FC = () => {
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await dataProvider.getOne('admins', { id: 'me' });
        setUser(data);
      } catch (error) {
        notify('Error fetching user data', { type: 'warning' });
      } finally {
        setLoading(false);
      }
    };
  
    fetchUser();
  }, [dataProvider, notify]);
  
  const handleSave = async () => {
    if (!user) {
      notify('User data is not loaded', { type: 'warning' });
      return;
    }
  
    try {
      await dataProvider.update('admins', {
        id: user.id,
        data: user,
        previousData: undefined
      });
    } catch (error) {
      notify('Error saving user data', { type: 'warning' });
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