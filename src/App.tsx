import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SearchEvent from "./pages/SearchEvent";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import EventDetail from "./pages/EventDetail";

function App() {
  const routeLists = [{ path: "/", element: <Home />, showHeader: true, showBottom: true },
  { path: "/search", element: <SearchEvent />, showHeader: true, showBottom: true },
  { path: "/event/:id", element: <EventDetail />, showHeader: true, showBottom: false },
  ];

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        {routeLists.map(({ path, element, showHeader, showBottom }) => (
          <Route key={path} path={path} element={
            <Layout showHeader={showHeader} showBottom={showBottom}>
              {element}
            </Layout>} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
