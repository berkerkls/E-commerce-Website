import React, { useEffect } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../data";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as BsIcons from "react-icons/bs"
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/apiCalls"


const Container = styled.div`
    flex: 4;
`
const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius:50%;
    object-fit: cover;
    margin-right: 10px;
`

const LıstItem = styled.div`
    display: flex;
    align-items:center;
`

const ProductList = () => {
    const [data,setData] = useState(productRows)
  
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {
            return (
              <LıstItem>
                <Image src={params.row.img} />
                {params.row.name}
              </LıstItem>
            );
          },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
          field: "price",
          headerName: "Price Fee",
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/product/" + params.row.id}>
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
  )
}

export default ProductList