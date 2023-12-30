import Input from "./Input";
import {useRef} from 'react'

const NewProjects = (props) => {

  const title = useRef();
  const description = useRef()
  const dueDate = useRef()

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueData = dueDate.current.value;

    // validation
    // if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueData.trim() === '') {
      

      
    // }
      



    const newProject = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueData
    }

    props.onHandleAddProject(newProject);
  }

  const cancleHandler = () => {
    return (
      props.onCancle()
    )
  }


  return (
    <div className=" w-[35rem] mt-16">
      <menu className="flex item-center justify-end gap-4 my-4">
        <li>
          <button className=" py-2 text-stone-800 hover:text-stone-950" onClick={ cancleHandler}>Cancel</button>
        </li>
        <li onClick = {handleSave}>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        </li>
      </menu>
      <Input type = "text" ref={ title} label = "Title"/>
      <Input ref={ description} label = "Description" textarea ={true} />
      <Input type = "date" ref={ dueDate} label = "Due Date"/>
    </div>
  );
};
export default NewProjects;
