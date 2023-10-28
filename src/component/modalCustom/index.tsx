import {Modal } from 'antd';

interface IProps {
    setShow: any,
    show: boolean
    children: JSX.Element,
    title?: string
}

const ModalCustom = ({ setShow, show, children, title }: IProps) => {
    const showModal = () => {
        setShow(true);
    };
    const handleOk = () => {
        setShow(false);
    };
    const handleCancel = () => {
        setShow(false);
    };
    return (
        <>

            <Modal
                open={show}
                centered
                closable={false}
                onOk={handleOk}
                footer={false}
                onCancel={handleCancel}
                className="!p-0 !z-[400]"
                // wrapClassName='!bg-black'
                title={title ? title : ''}
                style={{ fontFamily: 'TidFont' }}>
                <div className='dark:bg-darkMode-gray rounded-md'>{children}</div>
            </Modal>
        </>
    );
};
export default ModalCustom;