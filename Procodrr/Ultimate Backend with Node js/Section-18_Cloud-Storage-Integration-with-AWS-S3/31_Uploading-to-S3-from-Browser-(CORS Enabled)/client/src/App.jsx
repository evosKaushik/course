import "./App.css";

function App() {
  const URL =
    "https://kaushik-labs-storage-app.s3.ap-south-1.amazonaws.com/hello-world.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA4R55CNPZMR3M53WM%2F20260818%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260818T190726Z&X-Amz-Expires=3600&X-Amz-Signature=9b193f566d4285604cd41d073a3f5875293bcc2d3eacf710acbd59155c2aca4c&X-Amz-SignedHeaders=content-type%3Bhost&x-amz-checksum-crc32=AAAAAA%3D%3D&x-amz-sdk-checksum-algorithm=CRC32&x-id=PutObject";
  const handleFileUpload = async (e) => {
    await fetch(URL, {
      method: "PUT",
      body: e.target.files[0],
    });
    console.log("File uploaded");
  };
  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}

export default App;
