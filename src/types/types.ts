export interface stream {
    name: string;
    stats: {
        status: string;
        online_clients: number;
        input_bitrate: number;
        output_bitrate: number;
    }
}

export interface streamsDataProps {
    prev?: number|string,
    next?: number|string
    estimated_count: number,
    streams: stream[]
}


export interface params{
    limit?:number;
    cursor?:  string | number
}
