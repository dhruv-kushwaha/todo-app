import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import SearchTodos from "./pages/SearchTodos";
import CreateTodo from "./pages/CreateTodo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";
import UpdateTodo from "./pages/UpdateTodo";
import Todo from "./pages/Todo";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster richColors />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/todos" element={<SearchTodos />} />
          <Route path="/todos/create" element={<CreateTodo />} />

          <Route path="/todos/:id" element={<Todo />} />
          <Route path="/todos/edit/:id" element={<UpdateTodo />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
