import CustomButton from "./CustomButton";
import BeatLoader from "react-spinners/BeatLoader";

import { toast } from "sonner";

const AiPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea text-gray-600"
        placeholder="Ask AI...."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="flex flex-wrap gap-3 justify-center">
        {generatingImg ? (
          <div className="flex justify-center">
            <CustomButton
              type="outline"
              title="Asking AI"
              customStyles="text-xs border-none"
            />
            <BeatLoader size={5} className="my-auto" />
          </div>
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => {
                handleSubmit("logo");
                setTimeout(() => {
                  toast(
                    "Generating images using Ai usually takes about 10 to 20 seconds. Please wait.."
                  );
                }, 5000);
              }}
              customStyles="text-xs"
            />

            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => {
                handleSubmit("full");
                setTimeout(() => {
                  toast(
                    "Generating images using Ai usually takes about 10 to 20 seconds. Please wait.."
                  );
                }, 5000);
              }}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AiPicker;
