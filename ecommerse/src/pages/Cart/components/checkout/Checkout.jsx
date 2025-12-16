import InputCustom from '@components/InputCommonForm/InputCustom';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import cls from 'classnames';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import RightBody from '@/pages/Cart/components/checkout/RightBody';

const CN_BASE = 'https://countriesnow.space/api/v0.1';

function Checkout() {
  const dataOption = [
    { value: '1', label: 'option1' },
    { value: '2', label: 'option2' },
    { value: '3', label: 'option3' },
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

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const formRef = useRef();

  console.log(formRef);

  console.log(errors);

  const handleExternalSubmit = () => {
    formRef.current?.requestSubmit();
  };

  useEffect(() => {
    axios.get(`${CN_BASE}/countries/iso`).then((res) =>
      setCountries(
        res.data.data.map((c) => {
          return {
            value: c.name,
            label: c.name,
          };
        })
      )
    );
  }, []);

  useEffect(() => {
    if (!watch('country')) return;
    console.log(watch('country'));

    if (watch('country') === 'Vietnam' && !localStorage.getItem('listCities')) {
      axios.get('https://provinces.open-api.vn/api/?depth=2').then((res) => {
        localStorage.setItem('listCities', JSON.stringify(res.data));
      });
    }

    console.log(JSON.parse(localStorage.getItem('listCities')));

    if (localStorage.getItem('listCities')) {
      const data = JSON.parse(localStorage.getItem('listCities'));
      setCities(
        data.map((item) => {
          return {
            label: item.name,
            value: item.codename,
          };
        })
      );
    }
  }, [watch('country')]);

  useEffect(() => {
    if (!watch('cities')) return;
    console.log(watch('cities'));

    if (localStorage.getItem('listCities')) {
      const data = JSON.parse(localStorage.getItem('listCities'));
      setDistricts(
        data
          .find((item) => item.codename === watch('cities'))
          .districts.map((item) => {
            return {
              label: item.name,
              value: item.codename,
            };
          })
      );
    }
  }, [watch('cities')]);

  return (
    <div className={container}>
      <div className={leftBody}>
        <p className={coupon}>
          Have a coupon? <span>Click here to enter your code</span>
        </p>

        <p className={title}>Billing Details</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit((data) => console.log(data))}
          noValidate
        >
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
              dataOption={countries}
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
              type={'select'}
              isRequired={true}
              dataOption={cities}
              register={register('cities', {
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
              dataOption={districts}
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

      <RightBody handleExternalSubmit={handleExternalSubmit} />
    </div>
  );
}

export default Checkout;
