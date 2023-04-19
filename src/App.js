import {Link, Route, Routes} from "react-router-dom";
import Todos from "./components/todos";
import Albums from "./components/albums";

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

                </Routes>
            </div>
        </div>

    );
};

export default App;
