import { Container } from "./style";
import { TaskDataTypes } from "../TaskCard";
import { FormMutationTask } from "../FormMutationTask";

type ModalTaskDetailsTypes = {
  toggleModal?: () => void;
  task: TaskDataTypes;
};

export function ModalTaskDetails({ toggleModal, task }: ModalTaskDetailsTypes) {
  return (
    <Container onClick={toggleModal}>
      <div className="handleTaskContainer" onClick={toggleModal}>
        <div className="formContainer">
          <div className="headerForm">
            <h2>Detalhes da tarefa</h2>
            <i className="material-icons closeIcon" onClick={toggleModal}>
              close
            </i>
          </div>
          <FormMutationTask
            isUpdate={true}
            toggleModal={toggleModal}
            taskData={task}
          />
        </div>
      </div>
    </Container>
  );
}
