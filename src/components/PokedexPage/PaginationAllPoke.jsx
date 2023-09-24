import { Box, Pagination } from "@mui/material";
import React from "react";

const PaginationAllPoke = ({ pageCount, handleChange }) => {
  console.log(pageCount);
  return (
    <>
      {pageCount && (      
    <div className="pagination__button">
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Pagination
            variant="outlined"
            count={pageCount}
            onChange={handleChange}
            size="minius"
            // siblingCount={2}
            // boundaryCount={2}
          />
      </Box>     
    </div>
    )}
    
    </>
  );
};

export default PaginationAllPoke;
