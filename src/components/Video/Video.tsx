import Modal from "../Reusable/Modal/Modal";

type TVideo = {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    modalType: string;
}
const Video: React.FC<TVideo> = ({ isModalOpen, setIsModalOpen, modalType }) => {
    return (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalType={modalType}>
            <div>
                Video
            </div>
        </Modal>
    );
};

export default Video;