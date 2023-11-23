export default function Download(props) {
  function handleDownload() {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/zacnation-cv.pdf"; // path
    downloadLink.download = "zacnation-cv";
    downloadLink.click();
  }

  return (
    <button
      className={`border ${
        props.darkMode
          ? "border-gray-400 hover:border-white"
          : "border-gray-400 hover:border-dark-I"
      } rounded p-2 text-lg`}
      onClick={handleDownload}
    >
      Download my CV
    </button>
  );
}
