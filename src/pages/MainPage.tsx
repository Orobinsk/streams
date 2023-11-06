import React, {memo, useEffect, useState} from 'react';
import {getStreams} from "../api/api";
import {Button} from "@mui/material";
import {params, streamsDataProps} from "../types/types";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TableStreams from "../components/TableStreams";


const MainPage = memo(() => {
    const [streamsData, setStreamsData] = useState<streamsDataProps>({estimated_count: 0, streams: []})
    const [paramsRequest, setParamsRequest] = useState<params>({limit: 100, cursor: 0})

    function loadData() {
        getStreams(paramsRequest).then(data => {
            if(data !==streamsData){
                setStreamsData(data)
            }
        });
    }

    const changePage = (direction: 'next' | 'prev') => {
        if (streamsData) {
            const newCursor = direction === 'next' ? streamsData.next : streamsData.prev;
            setParamsRequest({...paramsRequest, cursor: newCursor !== undefined ? newCursor : ''});
        }
    };

    useEffect(() => {
        loadData()
        const intervalId = setInterval(loadData, 10000)
        return () => clearInterval(intervalId);
    }, [paramsRequest]);


    return (
        <div>
            <TableStreams streams={streamsData.streams}/>
            <Button
                disabled={!streamsData.prev}
                onClick={() => changePage('prev')}
            >
                <ArrowBackIcon/>
            </Button>
            <Button
                disabled={!streamsData.next}
                onClick={() => changePage('next')}
            >
                <ArrowForwardIcon/>
            </Button>
        </div>
    );
});

export default MainPage;
