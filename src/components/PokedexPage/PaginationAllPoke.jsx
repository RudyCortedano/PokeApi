import { Box, Pagination } from "@mui/material";
import React from "react";

const PaginationAllPoke = ({ pageCount, handleChange,paginateLimit}) => {
  console.log(pageCount);
  return (
    <>

      {pageCount && paginateLimit && (      
    <div className="pagination__button">
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Pagination
            variant="outlined"
            count={pageCount}
            onChange={handleChange}
            size="small"       
          />
      </Box>     
    </div>
    )}    
    </>
  );
};

export default PaginationAllPoke;
