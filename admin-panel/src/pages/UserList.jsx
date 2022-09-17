import { DataGrid } from "@material-ui/data-grid";
import { userRows } from "../data";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as BsIcons from "react-icons/bs"
import styled from "styled-components";


const Container = styled.div`
  flex: 4;
`

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button style={{padding:"7px 10px", backgroundColor:"green",color:"#fff",borderRadius:"5px",border:"none" }}>Edit</button>
            </Link>
            <BsIcons.BsTrash size={25}
              style={{color:"red", cursor:"pointer"}}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  );
}