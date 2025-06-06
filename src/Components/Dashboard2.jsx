import React, { useEffect, useState } from 'react';
import { auth, db } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css'; // style as you like

const Dashboard = () => {
  const navigate = useNavigate();

  // User state
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ fullName: '', phone: '', email: '' });
  const [editing, setEditing] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [updateMsg, setUpdateMsg] = useState('');

  // Scans state
  const [scans, setScans] = useState([]);
  const [newScanInput, setNewScanInput] = useState('');
  const [newScanType, setNewScanType] = useState('Website'); // Website or Phone
  const [scanResult, setScanResult] = useState(null);

  // Stats
  const [stats, setStats] = useState({ total: 0, scam: 0, safe: 0, suspicious: 0 });

  useEffect(() => {
    // Listen for auth user
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      if (!currentUser) {
        navigate('/login');
      } else {
        setUser(currentUser);
        loadUserProfile(currentUser.uid);
        loadUserScans(currentUser.uid);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const loadUserProfile = async (uid) => {
    setLoadingProfile(true);
    try {
      const doc = await db.collection('users').doc(uid).get();
      if (doc.exists) {
        const data = doc.data();
        setProfile({
          fullName: data.fullName || '',
          phone: data.phone || '',
          email: data.email || user.email || '',
        });
      }
    } catch (err) {
      console.error('Error loading profile:', err);
    }
    setLoadingProfile(false);
  };

  const loadUserScans = async (uid) => {
    try {
      const snapshot = await db
        .collection('users')
        .doc(uid)
        .collection('scans')
        .orderBy('dateChecked', 'desc')
        .limit(20)
        .get();

      const scansData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setScans(scansData);
      computeStats(scansData);
    } catch (err) {
      console.error('Error loading scans:', err);
    }
  };

  const computeStats = (scansData) => {
    const total = scansData.length;
    const scam = scansData.filter(s => s.status === '❌ Confirmed Scam').length;
    const suspicious = scansData.filter(s => s.status === '⚠️ Suspicious').length;
    const safe = scansData.filter(s => s.status === '✅ Safe').length;
    setStats({ total, scam, suspicious, safe });
  };

  // Mock scan logic - replace with real API or logic
  const scanInput = (input, type) => {
    // Example simplistic mock logic:
    if (!input) return null;

    let status = '✅ Safe';
    if (input.includes('scam') || input.includes('fraud') || input.includes('fake')) status = '❌ Confirmed Scam';
    else if (input.includes('suspicious') || input.includes('warn')) status = '⚠️ Suspicious';

    return {
      input,
      type,
      status,
      dateChecked: new Date()
    };
  };

  const handleNewScan = async (e) => {
    e.preventDefault();
    if (!newScanInput.trim()) return;

    const result = scanInput(newScanInput.trim(), newScanType);
    setScanResult(result);

    // Save to Firestore
    try {
      await db.collection('users').doc(user.uid)
        .collection('scans').add({
          input: result.input,
          type: result.type,
          status: result.status,
          dateChecked: result.dateChecked
        });
      // Reload scans after add
      loadUserScans(user.uid);
      setNewScanInput('');
    } catch (err) {
      console.error('Error saving scan:', err);
    }
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileUpdate = async () => {
    try {
      await db.collection('users').doc(user.uid).update({
        fullName: profile.fullName,
        phone: profile.phone,
      });
      setUpdateMsg('Profile updated successfully!');
      setEditing(false);
    } catch (err) {
      console.error('Error updating profile:', err);
      setUpdateMsg('Update failed.');
    }
    setTimeout(() => setUpdateMsg(''), 3000);
  };

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  // Format Date for display
  const formatDate = (date) => {
    if (!date) return '';
    const d = date.toDate ? date.toDate() : date;
    return d.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
  };

  // Data for Chart
  const chartData = {
    labels: ['Safe', 'Suspicious', 'Confirmed Scam'],
    datasets: [{
      data: [stats.safe, stats.suspicious, stats.scam],
      backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
      hoverBackgroundColor: ['#218838', '#e0a800', '#c82333'],
    }]
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome back, {profile.fullName || user?.email || 'User'}! Here's your Scam Detector Dashboard.</h1>

      {/* Profile Section */}
      <section className="profile-section">
        <h2>Account Profile</h2>
        {loadingProfile ? <p>Loading profile...</p> :
          <>
            <div>
              <label>Name:</label>
              {editing ? (
                <input name="fullName" value={profile.fullName} onChange={handleProfileChange} />
              ) : <span>{profile.fullName}</span>}
            </div>
            <div>
              <label>Phone:</label>
              {editing ? (
                <input name="phone" value={profile.phone} onChange={handleProfileChange} />
              ) : <span>{profile.phone}</span>}
            </div>
            <div>
              <label>Email:</label> <span>{profile.email}</span>
            </div>
            {editing ? (
              <button onClick={handleProfileUpdate}>Save</button>
            ) : (
              <button onClick={() => setEditing(true)}>Edit Profile</button>
            )}
            {updateMsg && <p className="update-msg">{updateMsg}</p>}
          </>
        }
      </section>

      {/* Recent Scans Section */}
      <section className="recent-scans-section">
        <h2>Recent Scans</h2>
        {scans.length === 0 ? <p>No scans yet.</p> :
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Input</th>
                <th>Status</th>
                <th>Date Checked</th>
              </tr>
            </thead>
            <tbody>
              {scans.map(scan => (
                <tr key={scan.id}>
                  <td>{scan.type}</td>
                  <td>{scan.input}</td>
                  <td>{scan.status}</td>
                  <td>{formatDate(scan.dateChecked)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </section>

      {/* New Scan Section */}
      <section className="new-scan-section">
        <h2>Scan New</h2>
        <form onSubmit={handleNewScan}>
          <label>
            Type:
            <select value={newScanType} onChange={e => setNewScanType(e.target.value)}>
              <option value="Website">Website</option>
              <option value="Phone No.">Phone No.</option>
            </select>
          </label>
          <input
            type="text"
            placeholder={`Enter ${newScanType} URL or Number`}
            value={newScanInput}
            onChange={e => setNewScanInput(e.target.value)}
            required
          />
          <button type="submit">Scan</button>
        </form>
        {scanResult && (
          <p>
            Result: <strong>{scanResult.status}</strong> for "{scanResult.input}"
          </p>
        )}
      </section>

      {/* Stats Summary Section */}
      <section className="stats-section">
        <h2>Stats Summary</h2>
        <p>Total scans: {stats.total}</p>
        <p>Scams detected: {stats.scam}</p>
        <p>Safe: {stats.safe}</p>
        <p>Suspicious: {stats.suspicious}</p>
        <div style={{ maxWidth: '300px' }}>
          <Pie data={chartData} />
        </div>
      </section>

      {/* Report & Save Scam Section */}
      <section className="report-scam-section">
        <h2>Report & Save Scam</h2>
        <p>
          To report a scam manually or bookmark scam results, please use the scan function and save suspicious or scam results for future reference.
        </p>
      </section>

      {/* Logout */}
      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </div>
  );
};

export default Dashboard;
