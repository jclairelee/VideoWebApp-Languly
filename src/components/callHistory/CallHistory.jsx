import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { motion } from "framer-motion";

export const columns = [
  { field: "id", headerName: "No.", width: 50 },
  { field: "name", headerName: "Name", width: 110 },
  { field: "callCreated", headerName: "Call Created", width: 130 },
  { field: "interest", headerName: "Other Interests", width: 150 },
  { field: "status", headerName: "Status", width: 130 },
];

export const rows = [
  {
    id: 1,
    name: "Bennet S.",
    callCreated: "09/12/2022",
    interest: "Sports/Music",
    status: "Active",
  },
  {
    id: 2,
    name: "Jack K.",
    callCreated: "09/01/2022",
    interest: "Food/Game",
    status: "Active",
  },
  {
    id: 3,
    name: "George Pablo",
    callCreated: "07/30/2022",
    interest: "Art/Music",
    status: "Active",
  },
  {
    id: 4,
    name: "Nzinga O.",
    callCreated: "06/09/2022",
    interest: "Animal/Food",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Shazi A.",
    callCreated: "04/02/2022",
    interest: "Blockchain",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Kashvi N.",
    callCreated: "03/23/2022",
    interest: "Books",
    status: "Active",
  },
  {
    id: 7,
    name: "Branda K.",
    callCreated: "03/14/2022",
    interest: "Movies/Food",
    status: "inactive",
  },
  {
    id: 8,
    name: "Darcey C.",
    callCreated: "02/28/2022",
    interest: "Movies/Food",
    status: "inactive",
  },
  {
    id: 9,
    name: "Elmo M.",
    callCreated: "02/22/2022",
    interest: "Movies/Food",
    status: "inactive",
  },
  {
    id: 10,
    name: "Isla C.",
    callCreated: "01/28/2022",
    interest: "Movies/Food",
    status: "inactive",
  },
];

export default function CallHistory({ open }) {
  // const [isOpen, setMenu] = useState(false);
  // const toggle = () => {
  //   setMenu((isOpen) => !isOpen);
  // };
  return (
    <motion.div
      className="callHistory"
      onClick={open}
      whileHover={{ scale: 1 }}
      style={{ display: "flex" }}
    >
      <div className="callHistory__info callHistory__info--left">
        <div className="callHistory__info__row"></div>
        <div className="callHistory__info__row"></div>
      </div>
      <div style={{ height: 240, width: "95%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[9]}
          checkboxSelection
          sx={{ borderRadius: "30px" }}
        />
      </div>
    </motion.div>
  );
}
