import MainPage from "./pages/MainPage";
import CreateStreamPage from "./pages/CreateStreamPage";
import {CREATE_STREAM_ROUTE, MAIN_ROUTE} from "./const/const";

export const routes=[
    {
        path: MAIN_ROUTE,
        element: <MainPage/>
    },
    {
        path: CREATE_STREAM_ROUTE,
        element: <CreateStreamPage/>
    },

]
