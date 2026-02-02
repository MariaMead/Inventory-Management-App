import { useState } from 'react';
import './profilePage.css';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'example@example.com',
    phone: '(123) 456-7890',
    address: '123 Main St'
  });

  // Temporary storage for edits before saving or discarding changes
  const [tempData, setTempData] = useState(profileData);

  const handleEdit = () => {
    setTempData(profileData);
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfileData(tempData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData(profileData);
    setIsEditing(false);
  };

  const handleChange = (field: string, value: string) => {
    setTempData({ ...tempData, [field]: value });
  };

  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="profile-layout">
          <div className="profile-sidebar">
            <div className="profile-card">
              <div className="profile-card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="profile-avatar"
                />
                <p className="text-muted mb-1">{profileData.fullName}</p>
              </div>
            </div>
          </div>
          <div className="profile-main">
            <div className="profile-card">
              <div className="profile-card-body">
                <div className="profile-header">
                  <h2>Profile Information</h2>
                  {!isEditing ? (
                    <button onClick={handleEdit} className="btn-edit">Edit</button>
                  ) : (
                    <div className="btn-group">
                      <button onClick={handleSave} className="btn-save">Save</button>
                      <button onClick={handleCancel} className="btn-cancel">Cancel</button>
                    </div>
                  )}
                </div>

                <div className="profile-row">
                  <div className="profile-label">Full Name</div>
                  <div className="profile-value">
                    {isEditing ? (
                      <input
                        type="text"
                        value={tempData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        className="profile-input"
                      />
                    ) : (
                      profileData.fullName
                    )}
                  </div>
                </div>
                <hr />
                <div className="profile-row">
                  <div className="profile-label">Email</div>
                  <div className="profile-value">
                    {isEditing ? (
                      <input
                        type="email"
                        value={tempData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="profile-input"
                      />
                    ) : (
                      profileData.email
                    )}
                  </div>
                </div>
                <hr />
                <div className="profile-row">
                  <div className="profile-label">Phone</div>
                  <div className="profile-value">
                    {isEditing ? (
                      <input
                        type="tel"
                        value={tempData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="profile-input"
                      />
                    ) : (
                      profileData.phone
                    )}
                  </div>
                </div>
                <hr />
                <div className="profile-row">
                  <div className="profile-label">Address</div>
                  <div className="profile-value">
                    {isEditing ? (
                      <input
                        type="text"
                        value={tempData.address}
                        onChange={(e) => handleChange('address', e.target.value)}
                        className="profile-input"
                      />
                    ) : (
                      profileData.address
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Source: https://mdbootstrap.com/docs/react/extended/profiles/