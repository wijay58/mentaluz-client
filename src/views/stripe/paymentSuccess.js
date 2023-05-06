import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUpdatedUserProfile } from 'store/slices/user';
import { useDispatch } from 'store';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [flag, setFlag] = useState("");

  const validateSession = async () => {
    let timer1;
    const updatedUser = await dispatch(getUpdatedUserProfile());
    if (updatedUser.premium) {
      setFlag("Success");
      timer1 = setTimeout(() => {
        navigate('/dashboard/default', { replace: true });
      }, 2000);
    } else {
      setFlag("Failed");
      timer1 = setTimeout(() => {
        navigate('/dashboard/default', { replace: true });
      }, 2000);
    }
    return () => {
      clearTimeout(timer1);
    };
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
