import { Button, ButtonType } from "../Button/Index";
import { useToDoContext } from "../Provider/Datacontext";
import { AppDiv, AppH2, Table } from "../StyledComponents";
// type PropsType = {
//     job: string;
//     jobs: string[];
//     setJob: React.Dispatch<React.SetStateAction<string>>;
//     setJobs: React.Dispatch<React.SetStateAction<string[]>>;
//     edit: any;
//     setEdit: React.Dispatch<React.SetStateAction<any>>;
// }
// edit, jobs, setEdit, setJobs }: PropsType

function RenderTodoList() {
    const context = useToDoContext();
    console.log('context', context.jobs)
    const handleDelete = (index: any) => {
        const newJobs = [...context.jobs]
        newJobs.splice(index, 1)
        context.setJobs(newJobs)
    }
    const handleEdit = (newJob: any, index: any) => {
        context.setJobs((jobs) => {
            const newJobs = jobs.map((job, i) => (i === index ? newJob : job));
            return newJobs;
        });
    };
    return (<>
        <AppDiv>
            <Table>
                <thead>
                    <tr>
                        <th> <AppH2>My task list</AppH2></th>
                    </tr>
                </thead>
                <tbody>
                    {context.jobs.map((job, index) => (
                        <tr key={index}>
                            <th>
                                {context.edit === index ? (
                                    <>
                                        <input
                                            type="text"
                                            defaultValue={job}
                                            onChange={e => handleEdit(e.target.value, index)}
                                        />
                                        <Button type={ButtonType.DONE} onClick={() => context.setEdit(null)}>Done</Button>
                                    </>
                                ) : (<>
                                    {job}
                                    <Button type={ButtonType.EDIT} onClick={() => context.setEdit(index)}>Edit</Button>
                                    <Button type={ButtonType.DELETE} onClick={() => handleDelete(index)}>Delete</Button>
                                </>
                                )}

                            </th>

                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* <AppH2>My task list</AppH2>
            <ul >
                {jobs.map((job: string, index: number) => (
                    <AppLi key={index}>
                        {job}
                        <Button type={ButtonType.DELETE} onClick={() => handleDelete(index)}>Delete</Button>
                    </AppLi>

                ))}

            </ul> */}
        </AppDiv>
    </>);
}

export default RenderTodoList;