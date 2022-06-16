import React, {useEffect, useState} from 'react';
import Axios, {AxiosResponse} from "axios";
import {
    Typography,
    Grid,
    Box,
    Button,
    List,
    ListItem,
    Card,
    CardContent,
    TextField,
    createTheme,
    ThemeProvider,
    IconButton,
    Stack,
    MenuItem,

} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

const Master = () => {
    const [packages, setPackages] = useState([])
    const [faq, setFaq] = useState([])

    const [editName, setEditName] = useState("")
    const [editDesc, setEditDesc] = useState("")
    const [editPrice, setEditPrice] = useState("")

    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    const [ID, setID] = useState(0)

    const [vraag, setVraag] = useState("")
    const [antwoord, setAntwoord] = useState("")
    const [visible, setVisible] = useState("")
    const [vraagID, setVraagID] = useState(0)
    const [editVraag, setEditVraag] = useState("")
    const [editAntwoord, setEditAntwoord] = useState("")
    const [editVisible, setEditVisible] = useState("")

    const deleteRequest = (id: number) => {
        Axios.post(`http://localhost:3001/api/deletepackages/${id}`
        ).then(() => {

        })
        window.location.reload();
    }
    const handleClick = (id: number) => {
        deleteRequest(id)
    }
    const handleEditClick = (id: number, name: string, desc: string, price: string) => {
        setID(id)
        setEditName(name)
        setEditDesc(desc)
        setEditPrice(price)
    }
    const handleFaqEditClick = (id: number, name: string, desc: string, price: string) => {
        setVraagID(id)
        setEditVraag(name)
        setEditAntwoord(desc)
        setEditVisible(price)
    }
    const submit = () => {
        if (!(name == "" || desc == "" || price == "")) {
            Axios.post("http://localhost:3001/api/createpackages", {name: name, desc: desc, price: price}
            )
            window.location.reload();
        }

    }

    function faqSubmit() {
        if (!(vraag == "" || antwoord == "")) {
            Axios.post("http://localhost:3001/api/createfaq", {vraag: vraag, antwoord: antwoord, visible: visible}
            )
            window.location.reload();

        }

    }

    const faqDeleteRequest = (id: number) => {
        Axios.post(`http://localhost:3001/api/deletefaq/${id}`
        ).then(() => {

        })
        window.location.reload();
    }

    const editSubmit = () => {
        if (!(editName == "" || editDesc == "" || editPrice == "")) {
            Axios.post("http://localhost:3001/api/alterpackages", {
                    id: ID,
                    name: editName,
                    desc: editDesc,
                    price: editPrice
                }
            )
            window.location.reload();

        }


    }

    const editFaqSubmit = () => {
        if (!(editVraag == "" || editAntwoord == "" || editVisible == "")) {
            Axios.post("http://localhost:3001/api/alterfaq", {
                    id: vraagID,
                    vraag: editVraag,
                    antwoord: editAntwoord,
                    visible: editVisible
                }
            )
            window.location.reload();

        }


    }

    const getData = () => {
        Axios.get('http://localhost:3001/api/getpackages').then((response: AxiosResponse) => {
            setPackages(response.data)
        })
        Axios.get('http://localhost:3001/api/getfaq').then((response: AxiosResponse) => {
            setFaq(response.data)
        })
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <Stack direction="column">
            <TableContainer component={Paper} sx={{width: "97%", m: "1.5%"}}>
                <Table aria-label="pakketten">
                    <TableHead>
                        <TableRow>
                            <TableCell>pakketID</TableCell>
                            <TableCell>naam</TableCell>
                            <TableCell>omschrijving</TableCell>
                            <TableCell>prijs</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {packages.map((result: any) => {
                            return (
                                <TableRow
                                    key={result.pakketID}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell>{result.pakketID}</TableCell>
                                    <TableCell>{result.naam}</TableCell>
                                    <TableCell>{result.omschrijving}</TableCell>
                                    <TableCell>{result.prijs}</TableCell>
                                    <TableCell><IconButton onClick={() => handleClick(result.pakketID)}>
                                        <DeleteOutlineIcon/>
                                    </IconButton>
                                    </TableCell>
                                    <TableCell><IconButton
                                        onClick={() => handleEditClick(result.pakketID, result.naam, result.omschrijving, result.prijs)}>
                                        <EditIcon/>
                                    </IconButton>
                                    </TableCell>
                                </TableRow>

                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack direction={{xs: "column", md: "row"}} spacing={2}
                   sx={{display: "flex", justifyContent: "space-around",}}>
                <Card sx={{
                    width: {xs: "95%", md: "40%"},
                    ml: {xs: "2.5% !important", md: "0px"},
                    mr: {xs: "2.5% !important", md: "0px"},
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    height: "480px"
                }}>
                    <Stack spacing={2} sx={{p: "1em", width: "100%"}}>
                        <TextField

                            fullWidth
                            variant="standard"
                            inputProps={{readOnly: true, style: {textAlign: "center"}}}
                            value="creëer nieuw pakket"


                        />
                        <TextField required label="naam" value={name}
                                   onChange={e => setName(e.target.value)}

                        />
                        <TextField required label="omschrijving" value={desc}
                                   onChange={e => setDesc(e.target.value)} multiline rows="4"

                        />
                        <TextField required label="prijs" value={price}
                                   onChange={e => setPrice(e.target.value)}

                        />
                        <Button variant="contained" sx={{minHeight: "75px",}} onClick={submit}>
                            Maak nieuw pakket
                        </Button>
                    </Stack>
                </Card>
                <Card sx={{
                    width: {xs: "95%", md: "40%"},
                    ml: {xs: "2.5% !important", md: "0px"},
                    height: "480px"
                }}>
                    <Stack spacing={2} sx={{p: "1em"}}>
                        <TextField label="selecteer pakket"
                                   value={ID}
                                   fullWidth
                                   inputProps={{readOnly: true}}
                        >
                            {packages.map((result: any) => {
                                return (
                                    <MenuItem key={result.pakketID}>{result.pakketID}</MenuItem>
                                )
                            })}
                        </TextField>
                        <TextField required label="naam" value={editName}
                                   onChange={e => setEditName(e.target.value)}
                        />
                        <TextField required label="omschrijving" value={editDesc}
                                   onChange={e => setEditDesc(e.target.value)} multiline rows="4"

                        />
                        <TextField required label="prijs" value={editPrice}
                                   onChange={e => setEditPrice(e.target.value)}
                        />
                        <Button variant="contained" sx={{minHeight: "75px"}} onClick={editSubmit}>
                            pas pakket aan
                        </Button>
                    </Stack>
                </Card>
            </Stack>

            <TableContainer component={Paper} sx={{width: "97%", m: "1.5%"}}>
                <Table aria-label="pakketten">
                    <TableHead>
                        <TableRow>
                            <TableCell>vraagID</TableCell>
                            <TableCell>vraag</TableCell>
                            <TableCell>antwoord</TableCell>
                            <TableCell>zichtbaar</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {faq.map((result: any) => {
                            return (
                                <TableRow
                                    key={result.vraagID}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell>{result.vraagID}</TableCell>
                                    <TableCell>{result.vraag}</TableCell>
                                    <TableCell>{result.antwoord}</TableCell>
                                    <TableCell>{result.visible}</TableCell>
                                    <TableCell><IconButton onClick={() => faqDeleteRequest(result.vraagID)}>
                                        <DeleteOutlineIcon/>
                                    </IconButton>
                                    </TableCell>
                                    <TableCell><IconButton
                                        onClick={() => handleFaqEditClick(result.vraagID, result.vraag, result.antwoord, result.visible)}>
                                        <EditIcon/>
                                    </IconButton>
                                    </TableCell>
                                </TableRow>

                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack direction={{xs: "column", md: "row"}} spacing={2}
                   sx={{display: "flex", justifyContent: "space-around",}}>
                <Card sx={{
                    width: {xs: "95%", md: "40%"},
                    ml: {xs: "2.5% !important", md: "0px"},
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    height: "480px"
                }}>
                    <Stack spacing={2} sx={{p: "1em", width: "100%"}}>
                        <TextField
                            fullWidth
                            variant="standard"
                            inputProps={{readOnly: true, style: {textAlign: "center"}}}
                            value="creëer nieuwe faq"


                        />
                        <TextField required label="vraag" value={vraag}
                                   onChange={e => setVraag(e.target.value)}

                        />
                        <TextField required label="antwoord" value={antwoord}
                                   onChange={e => setAntwoord(e.target.value)} multiline rows="4"

                        />
                        <TextField label="selecteer zichtbaarheid"
                                   onChange={e => setVisible(e.target.value)}
                                   select
                                   fullWidth
                                   value={visible}
                        >
                            <MenuItem value="0">0</MenuItem>
                            <MenuItem value="1">1</MenuItem>


                        </TextField>
                        <Button variant="contained" sx={{minHeight: "75px",}} onClick={faqSubmit}>
                            stel vraag
                        </Button>
                    </Stack>
                </Card>
                <Card sx={{
                    width: {xs: "95%", md: "40%"},
                    ml: {xs: "2.5% !important", md: "0px"}, height: "480px"
                }}>
                    <Stack spacing={2} sx={{p: "1em"}}>
                        <TextField label="selecteer vraag"
                                   value={vraagID}
                                   fullWidth
                                   inputProps={{readOnly: true}}
                        >
                            {packages.map((result: any) => {
                                return (
                                    <MenuItem key={result.vraagID}>{result.vraagID}</MenuItem>
                                )
                            })}
                        </TextField>


                        <TextField required label="vraag" value={editVraag}
                                   onChange={e => setEditVraag(e.target.value)}
                        />
                        <TextField required label="antwoord" value={editAntwoord}
                                   onChange={e => setEditAntwoord(e.target.value)} multiline rows="4"

                        />
                        <TextField label="selecteer zichtbaarheid"
                                   onChange={e => setEditVisible(e.target.value)}
                                   select
                                   fullWidth
                                   value={editVisible}
                        >
                            <MenuItem value="0">0</MenuItem>
                            <MenuItem value="1">1</MenuItem>


                        </TextField>
                        <Button variant="contained" sx={{minHeight: "75px"}} onClick={editFaqSubmit}>
                            pas pakket aan
                        </Button>
                    </Stack>
                </Card>
            </Stack>


        </Stack>

    );
};

export default Master;
