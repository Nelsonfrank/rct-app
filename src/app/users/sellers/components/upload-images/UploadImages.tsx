/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import React, { useCallback } from 'react';

//dependencies
import { useDropzone } from 'react-dropzone';
import { RouteComponentProps } from '@reach/router';

//Styles
import './UploadImages.less';

// Props Type
// export interface UploadImagesProps {}

const UploadImages: React.FC<RouteComponentProps> = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <div className="upload-image-container">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag {`'n'`} drop some files here, or click to select files</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UploadImages;
