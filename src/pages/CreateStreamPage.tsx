import React, {FC, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {postStream} from "../api/api";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTE} from "../const/const";

const CreateStreamPage:FC = () => {
    const[stream,setStream]=useState({name:'',url:''})
    const navigate = useNavigate()

    function submit(){
        postStream(stream.name,stream.url)
        navigate(MAIN_ROUTE)
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="streamName"
                    label="Stream name"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setStream({...stream, name: event.target.value});
                    }}
                />
                <TextField
                    required
                    id="StreamUrl"
                    label="Source URL"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setStream({...stream, url: event.target.value});
                    }}
                />
                <Button onClick={submit}>Submit</Button>
            </div>
        </Box>
    );
};

export default CreateStreamPage;
