import {
  CreateTodoSchema,
  ICreateTodoType,
  IFullTodoType,
} from "@/schema/todoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormRow from "./FormRow";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useCreateTodo } from "@/hooks/useCreateTodo";
import { useUpdateTodo } from "@/hooks/useUpdateTodo";
import { formatDate } from "@/lib/utils";
// updateSession: boolean = false;

interface CreateTodoFormProps {
  todoToEdit: IFullTodoType;
}

function CreateTodoForm({
  todoToEdit = {} as IFullTodoType,
}: CreateTodoFormProps) {
  const isEditSession = Boolean(todoToEdit.id);

  const { register, handleSubmit } = useForm<ICreateTodoType>({
    resolver: zodResolver(CreateTodoSchema),
    defaultValues: isEditSession ? todoToEdit : {},
  });
  const { createTodo, isCreating } = useCreateTodo();
  const { updateTodo, isUpdating } = useUpdateTodo();

  const isWorking = isUpdating || isCreating;

  const onSubmit: SubmitHandler<ICreateTodoType> = function (data) {
    console.log(data);
    if (!isEditSession) {
      createTodo(data);
    } else {
      updateTodo({
        ...data,
        id: todoToEdit.id,
      });
    }
  };

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit, (err) => console.log(err))}
    >
      <FormRow label="Title">
        <Input
          type="text"
          placeholder="Enter the todo title"
          className="bg-gray-200 focus:bg-white "
          {...register("title")}
          disabled={isWorking}
        />
      </FormRow>
      <FormRow label="Description">
        <Textarea
          placeholder="Enter the todo description"
          className="w-full bg-gray-200 focus:bg-white"
          rows={7}
          {...register("description")}
          disabled={isWorking}
        />
      </FormRow>
      <FormRow label="Status">
        <div className="mx-4 flex flex-col justify-evenly">
          <div className="flex flex-row items-center gap-2 ">
            <Input
              type="radio"
              id="pending"
              value="pending"
              className="w-4"
              {...register("status")}
              disabled={isWorking}
            />
            <label htmlFor="pending">Pending</label>
          </div>
          <div className="flex flex-row items-center gap-2 ">
            <Input
              type="radio"
              id="in-progress"
              value="in-progress"
              className="w-4"
              {...register("status")}
              disabled={isWorking}
            />
            <label htmlFor="in-progress">In progress</label>
          </div>
          <div className="flex flex-row items-center gap-2 ">
            <Input
              type="radio"
              id="completed"
              value="completed"
              className="w-4"
              {...register("status")}
              disabled={isWorking}
            />
            <label htmlFor="completed">Completed</label>
          </div>
        </div>
      </FormRow>
      <FormRow label="Due Date">
        <div className="flex items-center gap-4">
          <Input
            type="datetime-local"
            className="w-fit bg-gray-200 focus:bg-white"
            {...register("dueDate")}
            disabled={isWorking}
          />
          {isEditSession && (
            <span>
              Current : {formatDate(todoToEdit.dueDate ?? "May 26, 2024")}
            </span>
          )}
        </div>
      </FormRow>

      <div className="flex justify-end">
        <Button className=" bg-slate-800" type="submit">
          {isEditSession ? "Edit Todo" : "Create Todo"}
        </Button>
      </div>
    </form>
  );
}

export default CreateTodoForm;
