import {Link, Route, Routes} from "react-router-dom";
import Todos from "./components/todos";
import Albums from "./components/albums";
import Comments from "./components/comments";
import PostDetails from "./components/postDetails";

const App = () => {
    return (
        <div>
            <div>
                <h2>different</h2>
                <ul>
                    <li>
                        <Link to={`/todos`}>todos</Link>
                    </li>
                    <li>
                        <Link to={'/albums'}>albums</Link>
                    </li>
                    <li>
                        <Link to={'/comments'}>comments</Link>
                    </li>

                </ul>

            </div>
            <div>
                <h2>Відповідь від сервера</h2>
                <Routes>
                    <Route
                        path={`/todos`} element={<Todos/>}>
                    </Route>
                    <Route
                        path={'/albums'} element={<Albums/>}>
                    </Route>
                    <Route
                        path={'/comments'} element={<Comments/>}>
                        <Route path={':id'} element={<PostDetails/>}></Route>
                    </Route>
                </Routes>
            </div>
        </div>

    );
};

export default App;
