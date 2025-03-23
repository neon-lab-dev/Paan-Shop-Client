import Modal from "../Reusable/Modal/Modal";

type TVideo = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  modalType: string;
};

const Video: React.FC<TVideo> = ({
  isModalOpen,
  setIsModalOpen,
  modalType,
}) => {
  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      modalType={modalType}
    >
      <div className="flex flex-row justify-center p-5 ">
        <video
          width="100%"
          height="auto"
          controls
          controlsList="nodownload"
          preload="metadata"
          className="rounded-md"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </Modal>
  );
};

export default Video;
