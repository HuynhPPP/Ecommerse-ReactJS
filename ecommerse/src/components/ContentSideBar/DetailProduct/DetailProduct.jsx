import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import Button from '@components/Button/Button';
import { PiShoppingCartThin } from 'react-icons/pi';
import { TfiReload } from 'react-icons/tfi';
import { PiHeartStraightLight } from 'react-icons/pi';
import { RiTwitterXFill } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';
import { TiMail } from 'react-icons/ti';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';

function DetailProduct() {
  const {
    container,
    title,
    price,
    description,
    boxSize,
    size,
    label,
    boxAddToCart,
    boxOr,
    line,
    or,
    boxAddOther,
    boxFooter,
    boxLinkFooter,
  } = styles;
  const { productDetail } = useContext(SideBarContext);

  const showOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
  ];

  return (
    <div className={container}>
      <SliderCommon data={productDetail?.images} />

      <div className={title}>{productDetail?.name}</div>

      <div className={price}>{productDetail?.price}</div>
      <div className={description}>{productDetail?.description}</div>

      <div className={label}>Size</div>
      <div className={boxSize}>
        {productDetail?.size?.map((item, index) => (
          <div key={index} className={size}>
            {item.name}
          </div>
        ))}
      </div>

      <div className={boxAddToCart}>
        <SelectBox options={showOptions} type='show' />
        <div>
          <Button
            content={
              <div>
                <PiShoppingCartThin /> ADD TO CART
              </div>
            }
          />
        </div>
      </div>

      <div className={boxOr}>
        <div className={line} />
        <div className={or}>OR</div>
        <div className={line} />
      </div>

      <Button
        content={
          <div>
            <PiShoppingCartThin /> SELECT OPTIONS
          </div>
        }
      />

      <div className={boxAddOther}>
        <TfiReload
          style={{
            fontSize: '22px',
          }}
        />
        <div>Add to compare</div>
      </div>

      <div className={boxAddOther}>
        <PiHeartStraightLight
          style={{
            fontSize: '24px',
          }}
        />
        <div>Add to wishlist</div>
      </div>

      <div className={boxFooter}>
        SKU: <span>12349</span>
      </div>

      <div className={boxFooter}>
        Category: <span>Shirt</span>
      </div>

      <div className={boxFooter}>
        Estimated delivery: <span>3 - 5 days</span>
      </div>

      <div className={boxFooter}>
        Share:
        <span className={boxLinkFooter}>
          <RiTwitterXFill style={{ paddingRight: '7px' }} />
          <FaFacebookF style={{ paddingRight: '7px' }} />
          <TiSocialPinterest style={{ paddingRight: '7px' }} />
          <TiMail style={{ paddingRight: '7px' }} />
          <FaLinkedinIn style={{ paddingRight: '7px' }} />
          <FaWhatsapp style={{ paddingRight: '7px' }} />
          <FaSkype style={{ paddingRight: '7px' }} />
          <BiLogoVk style={{ paddingRight: '7px' }} />
        </span>
      </div>
    </div>
  );
}

export default DetailProduct;
