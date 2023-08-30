import { Button, Input, Column } from "@/common/component";
import Calendar from "@/common/component/Calendar";
import { DataTable } from "primereact/datatable";

// import DataTable from "@/common/component/DataTable";
import { Ripple } from "primereact/ripple";

const IndexPage = () => {
  const dummyData = [
    {
      id: "191010",
      name: "일민수",
    },
    {
      id: "191010",
      name: "이민수",
    },
  ];
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
      <div>
        <DataTable value={dummyData}>
          <Column header="id" field="id" />
          <Column header="name" field="name" />
        </DataTable>
      </div>
    </div>
  );
};
export default IndexPage;
