import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PaymentFailed = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const timer1 = setTimeout(() => {
      navigate('/dashboard/default', { replace: true });
    }, 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div>
      <h1>Payment Failed</h1>
      <h3>You are being redirected to Mentaluz.com</h3>
    </div>
  );
};

export default PaymentFailed;
