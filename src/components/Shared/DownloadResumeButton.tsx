import { Download } from "lucide-react";
import { Button } from "../ui/button";

const DownloadResumeButton = () => {
  return (
    <Button
      asChild
      size="sm"
      className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-md"
    >
      <a
        href="https://drive.google.com/uc?export=download&id=16TVBHe8_Z666M8RXG3S_zQHrwmLcIXsu
"
        download
      >
        Download Resume <Download className="ml-2" />
      </a>
    </Button>
  );
};

export default DownloadResumeButton;
