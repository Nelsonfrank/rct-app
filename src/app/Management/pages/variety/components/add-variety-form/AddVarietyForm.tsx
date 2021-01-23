import React, { useEffect, useContext } from 'react';

// dependencies
import { Input, Button } from 'antd';
import { navigate, RouteComponentProps } from '@reach/router';
import { useForm, SubmitHandler } from 'react-hook-form';

// Components
import BackButton from '../../../../components/back-button';
import Notification from '../../../../../components/notification';
// Auth
import { Auth } from '../../../../../../auth/AuthContext';
// Styles
import './AddVarietyForm.less';

// API
import { AddVariety } from '../../../../../../API';
// Props Types
// export interface PriceRateFormProps {}

const AddVarietyForm: React.FC<RouteComponentProps> = () => {
  const { register, handleSubmit, setValue, errors } = useForm({
    mode: 'onBlur',
  });

  const { userAccessToken } = useContext(Auth);
  useEffect(() => {
    register('variety_name', { required: true });
  }, [register]);

  const handleVarietyChange = (e: any) => {
    setValue('variety_name', e.target.value);
  };

  type FormValues = {
    variety_name: string;
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const payload = {
      variety_name: data.variety_name,
    };

    const addVariety = async () => {
      const varietyResponse = await AddVariety(payload, userAccessToken).then(
        (response) => response,
      );
      if (varietyResponse.status === 200) {
        Notification(
          true,
          'Variety Created Successfully',
          `Succeed with status ${varietyResponse.status}`,
        );
        navigate(-1);
      } else {
        Notification(false, 'Failed to Create Variety', varietyResponse);
      }
      console.log(varietyResponse);
    };
    addVariety();
  };
  return (
    <>
      <BackButton />
      <div className="add-variety-container">
        <div>
          <h1 className="add-variety-form-header">Add Variety</h1>
        </div>
        <hr />
        <form className="add-variety-inner" onSubmit={handleSubmit(onSubmit)}>
          <div className="add-variety-input">
            <Input
              size="large"
              placeholder="Name"
              onChange={handleVarietyChange}
            />
            <span style={{ fontSize: '1rem', color: 'red' }}>
              {errors.variety_name && 'Variety name is required'}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2.5rem',
            }}
          >
            <Button
              size="large"
              type="primary"
              style={{
                padding: '1.33rem 1.875rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              htmlType="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddVarietyForm;
