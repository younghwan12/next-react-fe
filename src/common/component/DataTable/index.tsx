import {
  DataTable as PDataTable,
  DataTableProps,
  DataTableValueArray,
} from "primereact/datatable";

import { useState, useCallback, useMemo, useEffect } from "react";
import Button from "../Button";

const DataTable: React.FC<DataTableProps<DataTableValueArray>> = (props) => {
  const { totalRecords } = props;
  const [first, setFirst] = useState(0);

  return (
    <>
      <PDataTable
        selectionPageOnly
        paginator
        rows={10}
        rowsPerPageOptions={[10, 25, 50, 75, 100, 500, 1000]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        emptyMessage="데이터가 없습니다."
        {...props}
      ></PDataTable>

      {/* </div> */}
    </>
  );
};

export default DataTable;
