import React, { Component } from 'react';
import { useMemo } from 'react';
//import authService from './api-authorization/AuthorizeService'
import MaterialReactTable from 'material-react-table';
import Table from 'react-bootstrap/Table';

//Material-UI Imports
import {
    Box,
    Button,
    ListItemIcon,
    MenuItem,
    Typography,
    TextField,
} from '@mui/material';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts) {
        const columns = [
            {
                accessorKey: 'vrstaResenja',
                header: 'Vrsta resenja',
            },
            {
                accessorKey: 'nazivLeka',
                header: 'Naziv leka',
            },
            /*{
                accessorFn: (row) => `${row.nazivLeka}`, //accessorFn used to join multiple data into a single cell
                id: 'nazivLeka', //id is still required when using accessorFn instead of accessorKey
                header: 'Naziv Leka 2',
                size: 250,
                Cell: ({ renderedCellValue, row }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <span>{renderedCellValue}</span>
                    </Box>
                ),
            },*/
            {
                accessorKey: 'inn',
                header: 'Sastav',
            },
            {
                accessorKey: 'rezimReizdavanja',
                header: 'Rezim reizdavanja',
            },
            {
                accessorKey: 'vrsta',
                header: 'Oblik doza',
            },
        ];

        return <MaterialReactTable columns={columns} data={forecasts} enableStickyHeader
            renderDetailPanel={({ row }) => (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ textAlign: 'left', width: '90%' }}>
                        <Table hover striped>
                        <tbody>
                            <tr>
                                <th>Proizvođač:</th>
                                <td>{row.original.proizvodjac}</td>
                            </tr>
                            <tr>
                                <th>Oblik doza:</th>
                                    <td style={{ width: '70%' }}>{row.original.oblikDoza}</td>
                                </tr>
                                <tr>
                                    <th>INN:</th>
                                    <td>{row.original.inn}</td>
                                </tr>
                            <tr>
                                <th>Broj resenja:</th>
                                <td>{row.original.brojResenja}</td>
                            </tr>
                            <tr>
                                <th>Datum resenja:</th>
                                <td>{row.original.datumResenja}</td>
                            </tr>
                            <tr>
                                <th>Datum isteka resenja:</th>
                                <td>{row.original.datumVazenjaResenja}</td>
                            </tr>
                            <tr>
                                <th>Proizvodjac:</th>
                                <td>{row.original.proizvodjac}</td>
                            </tr>
                            <tr>
                                <th>Nosilac dozvole:</th>
                                <td>{row.original.nosilacDozvole}</td>
                            </tr>
                            <tr>
                                <th>ATC:</th>
                                <td>{row.original.atc}</td>
                            </tr>
                            <tr>
                                <th>EAN:</th>
                                <td>{row.original.ean}</td>
                            </tr>
                            <tr>
                                <th>JKL:</th>
                                <td>{row.original.jkl}</td>
                            </tr>
                            <tr>
                                <th>Sifra proizvoda:</th>
                                <td>{row.original.sifraProizvoda}</td>
                            </tr>
                            <tr>
                                <th>Sifra proizvoda u saradnji:</th>
                                <td>{row.original.sifraProizvodjacaUSaradnji}</td>
                            </tr>
                            <tr>
                                <th>Oblik saradnje:</th>
                                <td>{row.original.oblikSaradnje}</td>
                            </tr>
                            <tr>
                                <th>Sifra proizvodjaca:</th>
                                <td>{row.original.sifraProizvodjaca}</td>
                            </tr>
                            <tr>
                                <th>Sifra nosioca dozvole:</th>
                                <td>{row.original.SifraNosiocaDozvole}</td>
                            </tr>
                        </tbody>
                        </Table>
                    </Box>
                </Box>
            )}
        />;
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <h1 id="tableLabel">Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const token = null; // await authService.getAccessToken();
        const response = await fetch('lekovi', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
