import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import { productosData } from '../../Data/ProductosMock';
import FormEditInv from '../FormEditInv/FormEditInv';

const columns = [
    { id: 'acciones', label: 'Acciones', minWidth: 100 },
    { id: 'nombre', label: 'Nombre', minWidth: 120 },
    { id: 'marca', label: 'Marca', minWidth: 100 },
    { id: 'tamano', label: 'Tamaño', minWidth: 100 },
    { id: 'nicotina', label: 'Nicotina', minWidth: 100 },
    { id: 'stock', label: 'Stock', minWidth: 60, align: 'right' },
    { id: 'precio', label: 'Precio', minWidth: 80, align: 'right' },
    { id: 'categoriaId', label: 'Categoría', minWidth: 100 },
    { id: 'descripcion', label: 'Descripción', minWidth: 200 },
];

// ...elimina createData y rows...

export default function ListaStock() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);
    const [selectedRow, setSelectedRow] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleRowClick = (row) => {
        setSelectedRow(row);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedRow(null);
    };

     const handleEdit = (row) => {
        setSelectedRow(row);
        setEditOpen(true);
    };
     const handleEditClose = () => {
        setEditOpen(false);
        setSelectedRow(null);
    };

    const handleDelete = () => {
        // Aquí puedes implementar la lógica para eliminar
        alert('Eliminar: ' + selectedRow.nombre);
        handleClose();
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: 'rgba(168, 168, 168, 0.3)' }}>
            <TableContainer sx={{
                maxHeight: 600,
                '&::-webkit-scrollbar': {
                    width: 8,
                    backgroundColor: '#bdbdbd',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#888',
                    borderRadius: 4,
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: '#555',
                },

            }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, backgroundColor: 'rgba(168, 168, 168, 1)' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productosData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, idx) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id ? row.id : `row-${page * rowsPerPage + idx}`}>
                                    <TableCell sx={{ width: 100, backgroundColor: 'rgba(168, 168, 168, 0.3)' }} align="center" onClick={() => handleRowClick(row)}>
                                        <Stack direction="column" spacing={1} justifyContent="center">
                                            {/* <Button
                                                size="small"
                                                color="primary"
                                               onClick={() => handleEdit(row)}
                                                sx={{
                                                    borderRadius: 1,
                                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }
                                                }}
                                            >
                                                Editar
                                            </Button> */}
                                            <FormEditInv producto={row} onClose={handleEditClose} />
                                            <Button
                                                size="small"
                                                color="error"
                                                onClick={() => {
                                                    setSelectedRow(row);
                                                    alert('Eliminar: ' + row.nombre);
                                                }}
                                                sx={{
                                                    borderRadius: 1,
                                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }
                                                }}
                                            >
                                                Eliminar
                                            </Button>
                                        </Stack>
                                    </TableCell>
                                    {columns.slice(1).map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align} >
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[25, 50, 100, { label: 'All', value: -1 }]}
                component="div"
                count={productosData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{ borderTop: '1px solid rgba(255, 255, 255)' }}
            />
            {/* <Dialog open={editOpen} onClose={handleEditClose} maxWidth="md" fullWidth>
                <FormEditInv producto={selectedRow} onClose={handleEditClose} />
            </Dialog> */}
        </Paper>
    );
}