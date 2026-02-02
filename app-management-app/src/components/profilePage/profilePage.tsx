import './profilePage.css';

export default function ProfilePage() {
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
                <p className="text-muted mb-1">John Doe</p>
              </div>
            </div>
          </div>
          <div className="profile-main">
            <div className="profile-card">
              <div className="profile-card-body">
                <div className="profile-row">
                  <div className="profile-label">Full Name</div>
                  <div className="profile-value">John Doe</div>
                </div>
                <hr />
                <div className="profile-row">
                  <div className="profile-label">Email</div>
                  <div className="profile-value">example@example.com</div>
                </div>
                <hr />
                <div className="profile-row">
                  <div className="profile-label">Phone</div>
                  <div className="profile-value">(123) 456-7890</div>
                </div>
                <hr />
                <div className="profile-row">
                  <div className="profile-label">Address</div>
                  <div className="profile-value">123 Main St</div>
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