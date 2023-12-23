import { Route, Navigate, Routes } from "react-router-native";
import RepositoryList from "./src/components/RepositoryList";
import SignIn from "./src/components/SignIn";

const RoutesList = () => {
    return (<Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>)
};

export default RoutesList;