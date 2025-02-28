import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SearchEvent from "./pages/SearchEvent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notification from "./pages/Notification";
import ChatList from "./pages/ChatList";
import Chat from "./pages/Chat";

function App() {
  const routeLists = [{ path: "/", element: <Home />, showHeader: true, showBottom: true },
  { path: "/search", element: <SearchEvent />, showHeader: true, showBottom: true },
  { path: "/login", element: <Login />, showHeader: false, showBottom: false },
  { path: "/signup", element: <Signup />, showHeader: false, showBottom: false },
  { path: "/notification", element: <Notification />, showHeader: false, showBottom: false },
  { path: "/chatlist", element: <ChatList />, showHeader: false, showBottom: true },
  { path: "/chat", element: <Chat />, showHeader: false, showBottom: false},
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
