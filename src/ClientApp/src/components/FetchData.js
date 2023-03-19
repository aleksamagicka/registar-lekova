import React, { Component } from 'react';
import MaterialReactTable from 'material-react-table';
import Table from 'react-bootstrap/Table';
import { ExportToCsv } from 'export-to-csv-fix-source-map';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

//Material-UI Imports
import {
    Box,
    Button
} from '@mui/material';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = { drugs: [], loading: true };
    }

    componentDidMount() {
        this.populateDrugData();
    }

    static columns = [
        {
            accessorKey: 'vrstaResenja',
            header: 'Vrsta rešenja',
        },
        {
            accessorKey: 'nazivLeka',
            header: 'Naziv leka',
        },
        {
            accessorKey: 'inn',
            header: 'Sastav',
        },
        {
            accessorKey: 'rezimReizdavanja',
            header: 'Režim reizdavanja',
        },
        {
            accessorKey: 'vrsta',
            header: 'Vrsta leka',
        },
    ];

    static csvOptions = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        useBom: true,
        useKeysAsHeaders: false,
        headers: ["id", "vrsta_resenja", "naziv_leka", "inn", "rezim_reizdavanja", "oblik_doza", "broj_resenja", "datum_resenja", "datum_vazenja_resenja", "proizvodjac",
        "nosilac_dozvole", "atc", "ean", "jkl", "vrsta", "sifra_proizvoda", "sifra_proizvoda_u_saradnji", "oblik_saradnje", "sifra_proizvodjaca", "sifra_nosioca_dozvole"],
    };

    static csvExporter = new ExportToCsv(this.csvOptions);

    static handleExportRows = (rows) => {
        this.csvExporter.generateCsv(rows.map((row) => row.original));
    };

    static handleExportData = () => {
        this.csvExporter.generateCsv(this.state.forecasts);
    };

    static renderDrugData(forecasts) {
        return <MaterialReactTable columns={this.columns} data={forecasts} enableStickyHeader initialState={{ showColumnFilters: true }}
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
                                    <th>Broj rešenja:</th>
                                    <td>{row.original.brojResenja}</td>
                                </tr>
                                <tr>
                                    <th>Datum rešenja:</th>
                                    <td>{row.original.datumResenja}</td>
                                </tr>
                                <tr>
                                    <th>Datum isteka rešenja:</th>
                                    <td>{row.original.datumVazenjaResenja}</td>
                                </tr>
                                <tr>
                                    <th>Proizvođač:</th>
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
                                    <th>Šifra proizvoda:</th>
                                    <td>{row.original.sifraProizvoda}</td>
                                </tr>
                                <tr>
                                    <th>Šifra proizvoda u saradnji:</th>
                                    <td>{row.original.sifraProizvodjacaUSaradnji}</td>
                                </tr>
                                <tr>
                                    <th>Oblik saradnje:</th>
                                    <td>{row.original.oblikSaradnje}</td>
                                </tr>
                                <tr>
                                    <th>Šifra proizvođača:</th>
                                    <td>{row.original.sifraProizvodjaca}</td>
                                </tr>
                                <tr>
                                    <th>Šifra nosioca dozvole:</th>
                                    <td>{row.original.SifraNosiocaDozvole}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Box>
                </Box>
            )}
            renderTopToolbarCustomActions={({ table }) => (
                <Box
                    sx={{ display: 'flex', gap: '1rem', p: '0.5rem', flexWrap: 'wrap' }}
                >
                    <Button
                        color="primary"
                        //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                        onClick={this.handleExportData}
                        startIcon={<FileDownloadIcon />}
                        variant="contained"
                    >
                        Izvezi sve lekove
                    </Button>
                    <Button
                        disabled={table.getPrePaginationRowModel().rows.length === 0}
                        //export all rows, including from the next page, (still respects filtering and sorting)
                        onClick={() =>
                            this.handleExportRows(table.getPrePaginationRowModel().rows)
                        }
                        startIcon={<FileDownloadIcon />}
                        variant="contained"
                    >
                        Izvezi filtrirane lekove
                    </Button>
                    <Button
                        disabled={table.getRowModel().rows.length === 0}
                        //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
                        onClick={() => this.handleExportRows(table.getRowModel().rows)}
                        startIcon={<FileDownloadIcon />}
                        variant="contained"
                    >
                        Izvezi prikazane lekove
                    </Button>
                </Box>
            )}
        />;
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Učitava se...</em></p>
            : FetchData.renderDrugData(this.state.drugs);

        return (
            <div>
                {contents}
            </div>
        );
    }

    async populateDrugData() {
        const response = await fetch('lekovi');
        const data = await response.json();
        this.setState({ drugs: data, loading: false });
    }
}
