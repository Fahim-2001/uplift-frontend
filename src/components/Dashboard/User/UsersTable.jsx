import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useState } from "react";

const columns = [
  { id: "id", label: "Id", minWidth: 50 },

  { id: "firstName", label: "First Name", align: "left", minWidth: 120 },
  {
    id: "lastName",
    label: "Last Name",
    minWidth: 120,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "email",
    label: "Email Address",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "roleId",
    label: "Role Id",
    minWidth: 50,
    align: "left",
    format: (value) => value.toFixed(),
  },
  {
    id: "registeredAt",
    label: "Joined In",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const UsersTable = ({ rows }) => {
  const { data, handleDeleteUser } = rows;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <section>
      {data.length === 0 ? (
        <p>Instructor&apos; s unavailable</p>
      ) : (
        <div className="my-5">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, i) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                <p>
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </p>
                              </TableCell>
                            );
                          })}
                          <button
                            className="my-4 ml-[-60px] px-4-3"
                            disabled = {row?.roleId === 1 && true}
                            onClick={() => handleDeleteUser(row?.email)}
                          >
                            <MdOutlineDeleteOutline color={row?.roleId === 1?"grey":"red"} />
                          </button>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      )}
    </section>
  );
};

export default UsersTable;
