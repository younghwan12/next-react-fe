import { Button as PButton, ButtonProps } from "primereact/button";
import { Ripple } from "primereact/ripple";

const Button = (props: ButtonProps) => {
  return <PButton {...props} />;
};
export default Button;

export const CheckButton = (props: ButtonProps) => {
  return <PButton icon="pi pi-check" aria-label="Filter" {...props} />;
};
