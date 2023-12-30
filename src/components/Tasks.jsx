import NewTasks from "./NewTasks";

export default function tasks() {
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">
           TASKS
        </h2>
        <NewTasks/>
        <p className="text-stone-800 my-4">
            This projects does not have any tasks yet.
        </p>
        <ul>

        </ul>
    </section>
}