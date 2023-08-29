import { Button, Input } from "@/common/component";
import Calendar from "@/common/component/Calendar";
import { Ripple } from "primereact/ripple";

const IndexPage = () => {
  return (
    <div>
      <div className="mb-5">
        <Calendar />
      </div>
      <div className="mb-5">
        <span className="p-float-label">
          <Input id="username" />
          <label htmlFor="username">Username</label>
        </span>
      </div>
      <Button label="타이틀" />
    </div>
  );
};
export default IndexPage;
