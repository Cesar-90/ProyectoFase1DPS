import { useEffect } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET); // Verify JWT
    } catch (err) {
      router.push('/login');
    }
  }, []);

  return children;
};

export default PrivateRoute;
