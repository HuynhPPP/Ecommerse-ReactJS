import HeaderSideBar from "@components/ContentSideBar/components/HeaderSideBar";
import { TfiReload } from 'react-icons/tfi';

function Compare() {
    return <div>
        <HeaderSideBar icon={<TfiReload />} title='Compare'/>
    </div>;
}

export default Compare;