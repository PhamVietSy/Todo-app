

import { Button, ButtonType } from "../Button/Index";
import { useToDoContext } from "../Provider/Datacontext";
import { AppDiv1, AppDiv, AppDivBl } from "../StyledComponents";

// type PropsType = {
//     job: string;
//     setJob: React.Dispatch<React.SetStateAction<string>>;
//     setJobs: React.Dispatch<React.SetStateAction<string[]>>
// }
// { job, setJob, setJobs }: PropsType

function FormAddTodo() {
    const context = useToDoContext();
    const handleAdd = () => {
        if (context.job === "") {
            return alert("giá trị nhập vào không được để trống!");
        }

        context.setJobs(prev => [...prev, context.job])
        context.setJob('')
    }
    const handleDeleteAll = () => {
        context.setJobs((prev) => {
            prev = [];
            return prev;
        })

    }
    return (<AppDiv1>
        <AppDiv>
            <AppDivBl>
                <h3>Add new task</h3>
                <input
                    value={context.job}
                    onChange={e => context.setJob(e.target.value)}

                />
            </AppDivBl>
            <AppDivBl>
                <span>
                    <Button type={ButtonType.DEFAULT} onClick={handleAdd}>Add</Button>
                    <Button type={ButtonType.DONE} onClick={handleDeleteAll}>Clear All</Button>
                </span>
            </AppDivBl>
        </AppDiv>
    </AppDiv1>);
}

export default FormAddTodo;