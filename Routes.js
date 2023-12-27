import { Route, Navigate, Routes } from "react-router-native";
import RepositoryList from "./src/components/RepositoryList";
import SignIn from "./src/components/SignIn";
import { RepositoryListItem } from "./src/components/RepositoryListItem";
import CreateReview from "./src/components/CreateReview";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<RepositoryList />} />
      <Route
        path="/repository/:id"
        element={<RepositoryListItem singleView />}
      />
      <Route path="/login" element={<SignIn />} />
      <Route path="/review" element={<CreateReview />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RoutesList;
