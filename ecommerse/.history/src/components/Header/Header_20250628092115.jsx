import BoxIcon from './BoxIcon/BoxIcon';
import styles from './styles.module.scss';

function MyHeader() {
  return (
    <div>
      <div>
        <div>
            {
              dataBoxIcon.map((item) => {
                return <BoxIcon type={}/>
              })
            }
        </div>
        <div></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default MyHeader;
