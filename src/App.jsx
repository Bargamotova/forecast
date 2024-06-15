import Aside from "./components/Aside";
import Main from "./components/Main";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  width: 100vw;
  overflow-x: hidden;
  @media only screen and (max-width: 1366px) {
    display: block;
  }
`;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <Wrapper>
          <Aside />
          <Main />
        </Wrapper>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
              style: { background: "var(--accent)" },
            },
            error: {
              duration: 5000,
              style: {
                background: "var(--accent)",
              },
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              color: "var(--gray-light)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
