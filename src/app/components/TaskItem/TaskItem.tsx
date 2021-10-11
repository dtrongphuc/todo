import { Space, Modal, Input, Tooltip } from 'antd';
import React, { useState } from 'react';
import { AnimateButton, Content, Wrapper } from './TaskItem.style';
import { MdOutlineDeleteSweep } from 'react-icons/md';
import { TaskState } from 'models/Task.interface';
import Checkbox from './Checkbox';
import Star from './Star';
import { useAppDispatch } from 'app/hooks';
import { actions } from 'features/task/taskSlice';
import { useTranslation } from 'react-i18next';
const { TextArea } = Input;
const { confirm } = Modal;
interface Props {
  task: TaskState;
}

interface ConfirmArgs {
  title: string;
  item: string;
  onOk: (e: React.MouseEvent) => void;
}

const showConfirm = ({ title, item, onOk }: ConfirmArgs) => {
  confirm({
    title: 'Delete task',
    content: `"${item}" will be permanently deleted.`,
    onOk: onOk,
    onCancel() {},
  });
};

const TaskItem: React.FC<Props> = ({ task }) => {
  const { t } = useTranslation('common');
  const [editVisible, setEditVisible] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(task?.content);
  const dispatch = useAppDispatch();

  const handleOk = () => {
    dispatch(
      actions.updateTask({
        ...task,
        content: editText,
      })
    );

    setEditVisible(false);
  };

  const handleCancel = () => {
    setEditVisible(false);
  };

  const handleEditTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditText(e.currentTarget.value);
  };

  const handleBlur = () => {
    if (editText.trim() === '') {
      setEditText(task.content);
    }
  };

  const handleToggleComplete = (e: React.MouseEvent) => {
    e.stopPropagation();

    dispatch(
      actions.updateTask({
        ...task,
        isCompleted: !task.isCompleted,
      })
    );
  };

  const handleToggleImportant = (e: React.MouseEvent) => {
    e.stopPropagation();

    dispatch(
      actions.updateTask({
        ...task,
        isImportant: !task.isImportant,
      })
    );
  };

  const handleDeleteTask = () => {
    dispatch(actions.deleteTask(task.id));
  };

  return (
    <>
      <Wrapper onClick={() => setEditVisible(true)}>
        <Tooltip
          placement='topLeft'
          arrowPointAtCenter={true}
          title={t('tooltip_check')}
          destroyTooltipOnHide={true}
        >
          <div>
            <Checkbox
              checked={task?.isCompleted}
              onClick={handleToggleComplete}
            />
          </div>
        </Tooltip>
        <Content isCompleted={task?.isCompleted}>{task?.content}</Content>
        <Space direction='horizontal' size={16}>
          <Tooltip
            placement='top'
            arrowPointAtCenter={true}
            title={t('tooltip_delete')}
          >
            <AnimateButton
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                showConfirm({
                  title: t('popup_delete'),
                  item: task.content,
                  onOk: handleDeleteTask,
                });
              }}
            >
              <MdOutlineDeleteSweep color='var(--danger-color)' size='1.4rem' />
            </AnimateButton>
          </Tooltip>
          <Tooltip
            placement='topRight'
            arrowPointAtCenter={true}
            title={
              task?.isImportant
                ? t('tooltip_important.remove')
                : t('tooltip_important.mark')
            }
          >
            <div>
              <Star
                checked={task?.isImportant}
                onClick={handleToggleImportant}
              />
            </div>
          </Tooltip>
        </Space>
      </Wrapper>
      <Modal
        title={t('popup_edit')}
        visible={editVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={t('okText')}
        cancelText={t('cancelText')}
      >
        <TextArea
          placeholder={t('popup_edit')}
          autoSize={{ minRows: 2, maxRows: 6 }}
          defaultValue={task?.content}
          value={editText}
          onChange={handleEditTextChange}
          onBlur={handleBlur}
        />
      </Modal>
    </>
  );
};

export default TaskItem;
