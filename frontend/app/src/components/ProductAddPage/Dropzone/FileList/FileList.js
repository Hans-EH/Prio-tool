import React from 'react'

import { MdRemoveCircleOutline } from "react-icons/md";
import { FaFileCsv } from "react-icons/fa";

export const FileList = (props) => {

    //const removeFile = (current) => {
      //let filesNew = files.filter((item) => { item.id != current.id});
  
    //}
  
    return (
      <div className="container bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="px-4 py-5 sm:px-6 border-b">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
            Files to be uploaded
          </h3>
        </div>
        <ul className="flex flex-col divide-y">
  
          {props.files.map((file, key) => {
            return (
              <UploadFileListItem file={file} key={key} removeFile={props.removeFile} />
            )
          })}
        </ul>
      </div>
    )
  }

const UploadFileListItem = (props) => {

    return (
      <li className="flex flex-row w-full">
        <div className="select-none cursor-pointer w-full flex flex-1 justify-between items-center p-4">
          <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
            <FaFileCsv className="text-green-400 mx-auto h-6 w-6" />
          </div>
          <div className="flex-1 pl-1 mr-16">
            <div className="font-medium dark:text-white">
              {props.file.name}
            </div>
            <div className="text-gray-600 dark:text-gray-200 text-sm">
              Size: {props.file.size} bytes
            </div>
          </div>
  
          <button onClick={()=>{props.removeFile(props.file)}}className="w-10 h-10 text-right flex justify-center items-center hover:text-yellow-400">
            <MdRemoveCircleOutline className="w-6 h-6 mx-auto"/>
          </button>
  
        </div>
      </li>
    )
  }