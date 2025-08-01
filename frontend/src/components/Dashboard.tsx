
import Rewards from './Rewards';

function Dashboard() {
  const internName = "Ayush";
  const referralCode = `${internName.toLowerCase()}2025`;
  const totalDonations = 12345; // mock number

  return (
    <div>
      <h2>Welcome, {internName}</h2>
      <p><strong>Referral Code:</strong> {referralCode}</p>
      <p><strong>Total Donations Raised:</strong> ₹{totalDonations}</p>
      <Rewards />
    </div>
  );
}

export default Dashboard;
