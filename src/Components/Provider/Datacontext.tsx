import { createContext, useContext, useState, ReactNode } from "react";

type ContextType = {
    edit: null | number;
    setEdit: React.Dispatch<React.SetStateAction<null| number>>;
    job: string;
    setJob: React.Dispatch<React.SetStateAction<string>>;
    jobs: string[];
    setJobs: React.Dispatch<React.SetStateAction<string[]>>;
  }
  export const DataContext = createContext<ContextType| null>(null);
  export const useToDoContext = () => {
    const context = useContext(DataContext)
    if(!context) throw new Error;
    return context;
  };

  function Provider({children}: {children: ReactNode}) {
    const [job, setJob] = useState<string>('');
  const [jobs, setJobs] = useState<string[]>([])
  const [edit,setEdit] = useState<null | number>(null)
 
  const data: ContextType = {
    edit,
    setEdit,
    job,
    setJob,
    jobs,
    setJobs
  }


    return <DataContext.Provider value={data} >
        {children}
    </DataContext.Provider>;
  }
  
  export default Provider;