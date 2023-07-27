import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTaskById } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      navigate("/tasks");
    }
    else {
      await createTask(data);
      navigate("/tasks");
    }
  });

  useEffect(() => {
    async function loadTasks(){
      if (params.id) {
        const res = await getTaskById(params.id)
        setValue("title", res.data.title)
        setValue("description", res.data.description)
      }
    }
    loadTasks()
  }, []);

  const onDelete = async (id) => {
    await deleteTask(id);
    navigate("/tasks");
  };

  const navigate = useNavigate();

  const params = useParams();

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>This field is required</span>}
        <textarea
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>This field is required</span>}
        <button>Save</button>
      </form>

      {params.id && <button onClick={()=>onDelete(params.id)}>Delete</button>}
    </div>
  );
}
