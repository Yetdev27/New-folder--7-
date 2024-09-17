import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';


const queryClient = new QueryClient();


function App() {

  return (
    <>
   <Navbar />
   <QueryClientProvider client={queryClient}>
        <PostsComponent />
    </QueryClientProvider>
    </>
  )
}

export default App
