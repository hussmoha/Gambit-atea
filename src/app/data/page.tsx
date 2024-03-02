import { fetchData } from "../lib/fetchData";
import { groupAndProcessRegisters } from "../lib/dataProcessing";
import DataTable from "../components/DataTable";

async function MyPage() {
  const dataEntries = await fetchData();

  const processed = groupAndProcessRegisters(dataEntries);

  return <DataTable data={processed} />;
}

export default MyPage;
