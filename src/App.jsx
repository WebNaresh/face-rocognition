import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";
import UseEffectState from "./lib/globalUseEffect";
import AppAlert from "./utils/AppAlert/AppAlert";
import AppLoader from "./utils/AppLoader/AppLoader";
import TopLoadingBar from "./utils/TopLoadingBar/TopLoadingBar";
import TopNav from "./utils/TopNav/TopNav";
const queryClient = new QueryClient();
axios.defaults.baseURL =
  import.meta.env.VITE_SERVER_URL || "http://localhost:5000";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UseEffectState>
          <TopLoadingBar />
          <AppLoader />
          <AppAlert />
          <TopNav />
          <div style={{ height: "100%", width: "100%" }}>
            <Route />
          </div>
        </UseEffectState>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
