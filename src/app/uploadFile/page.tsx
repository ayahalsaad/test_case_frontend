"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import WebsiteNavBar from "@/app/components/NavBar/NavBar";
import { Toaster, toast } from "sonner";
import Loading from "@/app/components/Loading/page";

export default function UploadFile() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");
  const [data, setData] = useState<string[]>([]);
  const [Isloading, setIsLoading] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null);
  };

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (file && text.trim()) {
      toast.error("Please provide either a file or text, not both.");
      setIsLoading(false);
      return;
    }

    if (!file && !text.trim()) {
      toast.error("Either a file must be selected or text must be entered.");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    if (file) formData.append("file", file);
    if (text.trim()) formData.append("text", text);
    setIsLoading(true);
    const res = await SubmitForm(formData);
  };
  async function SubmitForm(formData: FormData) {
    const postUrl = process.env.NEXT_PUBLIC_URL;
    const response = await fetch(`${postUrl}/upload`, {
      method: "POST",
      headers: {
        Accept: "text/event-stream",
      },
      body: formData,
    });

    if (
      response.ok &&
      response.headers.get("content-type")?.includes("text/event-stream")
    ) {
      const reader = response.body!.getReader();

      const readStream = async () => {
        const { done, value } = await reader.read();

        if (done) {
          console.log("Stream complete");
          return;
        }
        setIsLoading(false);
        const textDecoder = new TextDecoder();
        let chunk = textDecoder.decode(value, { stream: true });
        setData((prevData) => [...prevData, chunk]);
        console.log("Received:", chunk);
        readStream();
      };
      readStream();
    } else {
      console.error("Failed to get the stream.");
    }
  }

  return (
    <>
      {Isloading ? (
        <Loading />
      ) : data.length > 0 ? (
        <>
          <WebsiteNavBar />
          <main className="flex flex-col min-h-screen items-center justify-center p-24">
            <div className="text-colorNine flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center p-24 text-1xl">
                <pre className="max-w-full whitespace-pre-wrap overflow-x-auto text-lg p-6 font-customFont ">
                  {data.map((item, index) => (
                    <React.Fragment key={index}>
                      {item.replace(/##/g, "\n")}
                    </React.Fragment>
                  ))}
                </pre>
              </div>
            </div>
          </main>
        </>
      ) : (
        <>
          <Toaster position="top-center" expand={false} richColors />
          <WebsiteNavBar />
          <form
            onSubmit={handleSubmit}
            className="flex min-h-screen flex-row items-center justify-center p-24 "
          >
            <div className="flex w-full justify-around flex-col items-center">
              <div className="w-1/3 flex flex-col ">
                <label
                  htmlFor="file_input"
                  className="block mb-2 hover:text-colorNine text-sm font-SecondaryFont text-black"
                >
                  Upload your PDF file here...
                </label>
                <input
                  className="block w-full text-sm border border-black hover:border-colorNine text-gray-500 rounded-lg cursor-pointer "
                  name="file"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                />
              </div>
              <div className="py-7 font-customFont text-black hover:text-colorNine ">
                OR
              </div>
              <div className="w-1/3">
                <label
                  htmlFor="message"
                  className="flex mb-2 text-sm font-secondaryFont text-black hover:text-colorNine"
                >
                  Type your requirements here...
                </label>
                <textarea
                  id="message"
                  rows={8}
                  name="text"
                  className="block p-2.5 w-full max-h-35 text-sm resize-none font-secondaryFont bg-gray-50 rounded-lg border border-black hover:border-colorNine"
                  placeholder="Write your thoughts here..."
                  onChange={handleTextChange}
                  value={text}
                ></textarea>
              </div>

              <button
                className="inline-flex mt-10 px-5 py-3 mr-3 text-base font-SecondaryFont text-center rounded-lg text-colorOne bg-colorNine hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                type="submit"
                name="generateButton"
              >
                Submit
              </button>
            </div>
            <div className="w-2/3 flex justify-center">
              <img
                src="Programming-bro.svg"
                alt="Programming illustration"
                className="max-w-full h-auto"
              />
            </div>
          </form>
        </>
      )}
    </>
  );
}
