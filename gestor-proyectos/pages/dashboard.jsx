import PrivateRoute from '../components/PrivateRoute';

const Dashboard = () => {
  return (
    <PrivateRoute>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
