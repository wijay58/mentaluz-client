import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { updateUserProfile, getUserProfile } from 'store/slices/user';
import { useDispatch } from 'store';
import apiClient from "api-service";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const validateSession = async () => {
    if (!sessionId) {
      navigate('/dashboard/default', { replace: true });
      return;
    }
    const response = await apiClient.get(`/payments/validate_session?session_id=${sessionId}`);
    if (response.data.session) {
      const updatedUser = dispatch(updateUserProfile({ premium: true }));
      await dispatch(getUserProfile(updatedUser));
    }
    navigate('/dashboard/default', { replace: true });
  };

  useEffect(() => {
    validateSession();
  }, []);

  return (
    <div>
      <h1>Payment Success</h1>
      <h3>You are being redirected to Mentaluz.com</h3>
    </div>
  );
};

export default PaymentSuccess;
