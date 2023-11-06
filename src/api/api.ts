import axios from "axios";
import {params, streamsDataProps} from "../types/types";

export async function getStreams(params?:params): Promise<streamsDataProps> {
    try {
        const response = await axios.get<streamsDataProps>('http://localhost:4010/streamer/api/v3/streams',{params});
        return(response.data);
    } catch (error) {
        return Promise.reject('Произошла ошибка при загрузке данных');
    }
}

export async function postStream(name: string, url: string) {
    try {
        await axios.put(`http://localhost:4010/streamer/api/v3/streams/${name}`, {
            inputs: [{ URL: url }],
        });
    } catch (error) {
        console.error(error);
    }
}
