import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

// icons
import { TiFolderOpen } from "react-icons/ti";
import { FileList } from './FileList/FileList';
import { toast } from 'react-toastify';


export const ProductDropzone = () => {

  const [files, setFiles] = useState([]);

  // Callback to remove from files array
  const removeFile = (received) => {
    let filteredFiles = files.filter(file => file !== received);
    setFiles(filteredFiles)
  }

  // On Drop function
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      setFiles([...files, file]);
    });
  }, [files]);

  // Handle onDrop Rejection.
  const onDropRejected = useCallback(rejectedFiles => {
    rejectedFiles.forEach(file => {
      toast.warning(`Rejected: ${file.errors[0].code}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, onDropRejected, accept: "application/vnd.ms-excel" })

  const handleOnClick = () => {
    toast.success('Product added', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
  });
  }

  return (
    <section className="bg-white shadow-sm py-8 mb-4 rounded-md">
      <div className="container h-full flex flex-col px-8 mx-auto space-y-6">
        <h2 className="text-xl mb-8">Add Products from CSV file</h2>

        <div {...getRootProps() } className="flex flex-grow">
          <input {...getInputProps()}/>
          {
            isDragActive ?
              <DropContentActive /> :
              <DropContentInactive />
          }
        </div>

        {files.length > 0 && <FileList files={files} removeFile={removeFile} />}
          <button type="button" onClick={handleOnClick} className="py-4 w-full  bg-bluecity_dark hover:bg-bluecity focus:ring-indigo-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
            Add Products
          </button>
      </div>
    </section>
  )
}

// Dropzone content - hover state
const DropContentActive = () => {
  return (
    <div className="flex w-full py-24 justify-center items-center rounded-lg border-dashed border-2 border-bluecity border-opacity-50">
      <div className="text-center space-y-2">
        <TiFolderOpen className="mx-auto text-5xl text-bluecity animate-bounce" />
        <p className="font-bold text-lg">Release the kraken</p>
        <p className="text-sm text-gray-300">Supports: CSV-files</p>
      </div>
    </div>
  )
}

// Dropzone content - default state
const DropContentInactive = () => {
  return (
    <div className="flex w-full py-24 justify-center items-center rounded-lg border-dashed border-2 border-gray-300 border-opacity-50">
      <div className="text-center space-y-2">
        <TiFolderOpen className="mx-auto text-5xl text-bluecity" />
        <p className="font-bold text-lg">Drop your file here, or <span className="text-bluecity">browse</span></p>
        <p className="text-sm text-gray-300">Supports: CSV-files</p>
      </div>
    </div>
  )
}