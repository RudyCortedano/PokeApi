import { Box, Pagination } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const PaginationAllPoke = ({ pageCount, handleChange,paginateLimit}) => {

  const checked = useSelector(store => store.checkedSlice)

  return (
    <>
      {pageCount && paginateLimit && (      
      <div className="pagination__general">
        <div className={checked ? "pagination__button__nigth":"pagination__button__day"}>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <Pagination
                variant="outlined"
                count={pageCount}
                onChange={handleChange}
                size="small"       
              />
          </Box>     
        </div>
      </div>

    )}    
    </>
  );
};

export default PaginationAllPoke;
