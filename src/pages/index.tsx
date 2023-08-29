import { Button, CheckButton } from "@/common/component";
import Calendar from "@/common/component/Calendar";
import { addLocale } from "primereact/api";
import { Ripple } from "primereact/ripple";

const IndexPage = () => {
  return (
    <div className="fl">
      <div>
        <CheckButton />
      </div>
      <div>
        <Button label="버튼" />
      </div>
      <Calendar />
    </div>
  );
};
export default IndexPage;
