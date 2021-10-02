import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

import './sidebar.css';

export default function Sidebar(props: any) {

    const onDrop = useCallback(async (acceptedFiles) => {
        try {
          const fileName = acceptedFiles[0].name;
          const fileType = fileName.split('.').splice(-1).pop().toLowerCase();
          if (fileType === 'pdf') {
            // setLoading(true);
            // const { key } = await uploadFile('resume', acceptedFiles[0]);
            console.log('Uploaded successfully! Please save changes.');
            // setLoading(false);
          }
        } catch (err: any) {
            if (err.message) {
                console.error(err.message);
            }
          console.error('Some Error occured. Try reuploading the resume!');
        }
    }, []);


    return (
        <div className="sidebarContainer">

        </div>
    )
}