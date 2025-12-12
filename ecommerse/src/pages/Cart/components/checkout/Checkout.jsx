import InputCustom from '@components/InputCommonForm/InputCustom';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import cls from 'classnames';

function Checkout() {
  const dataOption = [
    { value: '1', label: 'car' },
    { value: '2', label: 'bike' },
    { value: '3', label: 'motorcycle' },
    { value: '4', label: 'plane' },
  ];

  const {
    container,
    leftBody,
    rightBody,
    row,
    row2Column,
    title,
    coupon,
    line,
  } = styles;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <div className={container}>
      <div className={leftBody}>
        <p className={coupon}>
          Have a coupon? <span>Click here to enter your code</span>
        </p>

        <p className={title}>Billing Details</p>

        <form onSubmit={handleSubmit((data) => console.log(data))} noValidate>
          <div className={cls(row, row2Column)}>
            <InputCustom
              label={'First Name'}
              type={'text'}
              isRequired={true}
              placeholder={'Enter your first name'}
              register={register('firstName', {
                required: true,
                maxLength: 25,
              })}
            />
            <InputCustom
              label={'Last Name'}
              type={'text'}
              isRequired={true}
              placeholder={'Enter your last name'}
              register={register('lastName', {
                required: true,
                maxLength: 25,
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Company name (optional)'}
              type={'text'}
              placeholder={'Company name'}
              register={register('companyName')}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Country / Region'}
              type={'select'}
              isRequired={true}
              placeholder={'Select your country'}
              dataOption={dataOption}
              register={register('country', {
                required: true,
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Street address'}
              type={'text'}
              isRequired={true}
              placeholder={'Home number and street name'}
              register={register('streetAddress', {
                required: true,
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'apartment'}
              isShowLabel={false}
              type={'text'}
              placeholder={'Apartment, suite, etc. (optional)'}
              register={register('apartment')}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Town / City'}
              type={'text'}
              isRequired={true}
              placeholder={''}
              register={register('city', {
                required: true,
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Sate'}
              type={'select'}
              isRequired={true}
              placeholder={'California'}
              dataOption={dataOption}
              register={register('state', {
                required: true,
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Phone'}
              type={'text'}
              isRequired={true}
              placeholder={'Phone number'}
              register={register('phone', {
                required: true,
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'ZIP code'}
              type={'text'}
              isRequired={true}
              placeholder={''}
              register={register('zipCode', {
                required: true,
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Email address'}
              type={'text'}
              isRequired={true}
              placeholder={'Email address'}
              register={register('email', {
                required: true,
              })}
            />
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>

      <div className={rightBody}></div>
    </div>
  );
}

export default Checkout;
