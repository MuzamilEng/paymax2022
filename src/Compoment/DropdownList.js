import style from './dropdown.module.css'
import CallIcon from '@mui/icons-material/Call'
import GroupIcon from '@mui/icons-material/Group'
import PlaceIcon from '@mui/icons-material/Place'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'

const DropdownList = () => {
  return (
    <div className={style.DropdownList_wrapper}>
      <div className={style.dropdown_menu}>
        <li className={` ${style.menu_lists} ${style.active}`}>
          <PlaceIcon className={style.menu_icons} />
          <p className={style.menu_option}>Dashboard</p>
        </li>
        <li className={style.menu_lists}>
          <PlaceIcon className={style.menu_icons} />
          <p className={style.menu_option}>Bills Payment</p>
        </li>
        <li className={`${style.menu_lists} ${style.purple_padding}`}>
          <img src={`../../../assets/img/file.svg`} alt='file' className={`${style.menu_icons} ${style.icon_2}`} />
          <p className={style.menu_option}>Booking</p>
          <img src={`../../../assets/img/2icon.png`} alt='file' className={`${style.menu_icons} ${style.icon2}`} />
        </li>
        <li className={style.menu_lists}>
          <PlaceIcon className={style.menu_icons} />

          <p className={style.menu_option}>Online Consultation</p>
        </li>
        <li className={style.menu_lists}>
          <img src={`../../../assets/img/folder.png`} alt='folder' className={style.menu_icons} />
          <p className={style.menu_option}>Bills Payment</p>
        </li>
        <li className={style.menu_lists}>
          <img
            src={`../../../assets/img/icon.svg`}
            alt='small'
            className={` ${style.menu_icons} ${style.icon_small}`}
          />
          <p className={style.menu_option}>Offers</p>
        </li>
        <li className={style.menu_lists}>
          <GroupIcon className={style.menu_option} />
          <p className={style.menu_option}>Refer a friend</p>
        </li>
        <li className={style.menu_lists}>
          <CallIcon className={style.menu_icons} />
          <p className={style.menu_option}>Support</p>
        </li>
      </div>
    </div>
  )
}

export default DropdownList
