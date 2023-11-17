import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  if (isCheckingOut) return <Spinner />;
  return (
    <Button
      variation="primary"
      disabled={isCheckingOut}
      onClick={() => checkout(bookingId)}
      size="small"
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
