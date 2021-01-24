/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import React, { useState } from 'react';

//dependencies
import { Upload, Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { RouteComponentProps } from '@reach/router';
import Card from '../../../../components/card';

//Styles
import './UploadImages.less';

// Props Type
// export interface UploadImagesProps {}

const UploadImages: React.FC<RouteComponentProps> = () => {
  const [previewImage, setpreviewImage] = useState<any>('');
  const [previewVisible, setpreviewVisible] = useState<any>(false);
  const [previewTitle, setpreviewTitle] = useState<any>('');
  const [fileList, setfileList] = useState<any>([]);

  function getBase64(file: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const handlePreview = async (file: {
    url: string;
    preview: unknown;
    originFileObj: Blob;
    name: any;
  }) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setpreviewImage(file.url || file.preview);
    setpreviewVisible(true);
    setpreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    );
  };

  const handlePictureChange = ({ fileList }: any) => {
    setfileList({ fileList });
  };

  const handleCancel = () => setpreviewVisible(false);
  return (
    <>
      <div className="uploadPictureContainer">
        <h3 style={{ marginLeft: '15px' }}>
          Add Picture For Your Tender Request
        </h3>
        <Card styles={{ width: '100%', height: '350px' }}>
          <Upload
            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            // onPreview={handlePreview}
            onChange={handlePictureChange}
          >
            {fileList.length >= 8 ? null : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </Card>
        {fileList.length !== 0 ? (
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
              <Button type="primary" size="large">
                Upload
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default UploadImages;
