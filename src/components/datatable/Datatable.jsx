import React from "react";
import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "type", headerName: "User Type", width: 140 },
  { field: "name", headerName: "Name", width: 140 },
  {
    field: "img",
    headerName: "Profile Picture",
    width: 140,
    renderCell: (paramas) => {
      return <div className="cellWithImg">
        <img className="cellImg" src="{params.row.img}" alt="Avatar" />
      </div>;
    },
  },
  { field: "location", headerName: "Location", width: 140 },
  { field: "status", headerName: "Account Status", width: 160 },
  { field: "action", headerName: "Action", width: 140 },
];

const rows = [
  {
    id: 1,
    type: "Donor",
    name: "Multi-Agency Int.",
    img: "https://static.boredpanda.com/blog/wp-content/uploads/2018/07/Bldm5TNFrpM-1-png__700.jpg",
    location: "United Arab Emirates",
    status: "Verified",
    action: "None",
  },
  {
    id: 2,
    type: "Donor",
    name: "We Will",
    img: "Jon",
    location: "Canada",
    status: "Verified",
    action: "None",
  },
  {
    id: 3,
    type: "Charity Org.",
    name: "Feed Africa",
    img: "Jon",
    location: "Cameeroon",
    status: "Pending Verification",
    action: "None",
  },
  {
    id: 4,
    type: "Donor",
    name: "DanChurchAid Donors",
    img: "Jon",
    location: "United States",
    status: "Verified",
    action: "None",
  },
  {
    id: 5,
    type: "Donor",
    name: "DonorsChoose",
    img: "Jon",
    location: "United Kingdom",
    status: "Verified",
    action: "None",
  },
  {
    id: 6,
    type: "Charity Og.",
    name: "Red Cross Kenya",
    img: "Jon",
    location: "Kenya",
    status: "Verified",
    action: "None",
  },
];

const Datatable = () => {
  return (
    <div className="datatable">
      <div className="title">SYSTEM USERS</div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
export default Datatable;
