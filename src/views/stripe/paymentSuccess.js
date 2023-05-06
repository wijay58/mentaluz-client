import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { updateUserProfile, getUserProfile } from 'store/slices/user';
import { useDispatch } from 'store';
import apiClient from "api-service";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [flag, setFlag] = useState("");
  const sessionId = searchParams.get("session_id");

  const validateSession = async () => {
    if (!sessionId) {
      navigate('/dashboard/default', { replace: true });
      return;
    }
    apiClient.get(`/payments/validate_session?session_id=${sessionId}`)
    .then(async (response) => {
      if (response.data.session) {
        setFlag("Success");
        const updatedUser = dispatch(updateUserProfile({ premium: true }));
        await dispatch(getUserProfile(updatedUser));
        const timer1 = setTimeout(() => {
          navigate('/dashboard/default', { replace: true });
        }, 2000);
        return () => {
          clearTimeout(timer1);
        };
      }
    })
    .catch((error) => {
      setFlag("Failed");
      navigate('/payment/failed', { replace: true });
    });
  };

  useEffect(() => {
    validateSession();
  }, []);

  return (
    <div>
      <h1>Payment {flag}</h1>
      <h3>You are being redirected to Mentaluz.com</h3>
    </div>
  );
};

export default PaymentSuccess;
